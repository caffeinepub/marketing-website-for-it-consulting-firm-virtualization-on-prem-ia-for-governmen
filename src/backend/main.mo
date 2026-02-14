import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import Order "mo:core/Order";
import AccessControl "authorization/access-control";

actor {
  // Include authorization component
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // UserProfile type
  public type UserProfile = {
    name : Text;
  };

  // Storage for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Get caller's user profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Get specific user's profile
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Save caller's user profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // ContactInquiry type
  type ContactInquiry = {
    id : Nat;
    name : Text;
    organization : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  // Module for ContactInquiry comparison
  module ContactInquiry {
    public func compareBySubmittedAt(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      if (inquiry1.submittedAt < inquiry2.submittedAt) {
        #less;
      } else if (inquiry1.submittedAt > inquiry2.submittedAt) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  // Storage for inquiries
  let contactInquiries = Map.empty<Nat, ContactInquiry>();
  var nextInquiryId = 1;

  // Store a new contact inquiry - PUBLIC, no authentication required
  public func submitContactInquiry(name : Text, organization : Text, email : Text, message : Text) : async () {
    let inquiry : ContactInquiry = {
      id = nextInquiryId;
      name;
      organization;
      email;
      message;
      submittedAt = Time.now();
    };
    contactInquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  // Get all inquiries (admin only)
  public query ({ caller }) func getAllContactInquiries() : async [ContactInquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access inquiries");
    };
    contactInquiries.values().toArray().sort(ContactInquiry.compareBySubmittedAt);
  };

  // Get specific inquiry by id (admin only)
  public query ({ caller }) func getContactInquiry(id : Nat) : async ContactInquiry {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access inquiries");
    };
    switch (contactInquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
