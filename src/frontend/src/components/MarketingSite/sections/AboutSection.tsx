import { Award, Target, Users2 } from 'lucide-react';
import { BRANDING } from '../../../config/branding';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About {BRANDING.companyName}</h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for secure, compliant infrastructure solutions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {BRANDING.companyName} specializes in delivering enterprise-grade virtualization and on-premises 
              infrastructure solutions for government agencies and contractors. With deep expertise in information 
              assurance and compliance frameworks, we help organizations build and maintain secure, mission-critical 
              IT environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings decades of combined experience in federal IT, security clearances, and a proven track 
              record of successful government contract delivery. We understand the unique challenges of operating in 
              highly regulated environments and deliver solutions that meet the most stringent security requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Deliver secure, compliant infrastructure that enables government agencies to focus on their mission.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Expertise</h3>
              <p className="text-muted-foreground">
                Certified professionals with active clearances and deep government IT experience.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-muted-foreground">
                Collaborative partnerships focused on long-term success and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
