import ContactForm from '../../Contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your infrastructure needs? Contact us to learn how we can support 
              your mission with secure, compliant IT solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-soft border">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:contact@secureinfra.example" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@secureinfra.example
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Location</div>
                      <p className="text-muted-foreground">
                        Washington, DC Metro Area<br />
                        Serving Federal Agencies Nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">What to Include</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Brief description of your project or requirements</li>
                  <li>• Timeline and budget considerations</li>
                  <li>• Compliance or security requirements (e.g., FedRAMP, FISMA)</li>
                  <li>• Preferred contact method and availability</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  We typically respond within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
