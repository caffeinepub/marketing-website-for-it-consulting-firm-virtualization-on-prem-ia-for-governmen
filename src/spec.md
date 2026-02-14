# Specification

## Summary
**Goal:** Create a responsive marketing website for an IT consulting firm focused on virtualization and on‑prem infrastructure/IA work for government contracts, with a contact form and an admin-only inquiries review area.

**Planned changes:**
- Build a responsive marketing site with clear navigation and sections/pages: Home (hero + value proposition), Services, Capabilities (government contracting/IA-focused), About, Contact.
- Add a consistent, professional visual theme suitable for government-facing consulting (avoid blue/purple as the dominant palette).
- Implement a Contact form (name, organization, email, message) with validation plus success/error states.
- Add backend storage for contact inquiries (timestamped) and provide methods to create inquiries and list/read inquiries for an authenticated admin via Internet Identity.
- Add an admin-only UI view requiring Internet Identity sign-in to list inquiries and view inquiry details.
- Include generated static assets (logo + hero visual) in `frontend/public/assets/generated` and render them in the navbar and Home hero.

**User-visible outcome:** Visitors can browse a polished, mobile-friendly consulting website and submit inquiries via a contact form; an authenticated admin can sign in with Internet Identity to review submitted inquiries (list and detail).
