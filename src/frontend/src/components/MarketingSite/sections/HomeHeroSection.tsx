import { ArrowRight, Shield, Server, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeHeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              Trusted by Government Agencies
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Secure Infrastructure for Mission-Critical Operations
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Expert virtualization and on-premises infrastructure solutions designed for government contracts. 
              We deliver compliant, hardened systems that meet the highest security standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('capabilities');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Capabilities
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Server className="h-5 w-5 text-primary" />
                <span>On-Prem Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 text-primary" />
                <span>IA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>ATO Support</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] h-[400px] rounded-lg overflow-hidden shadow-medium">
            <img
              src="/assets/generated/hero-datacenter.dim_1600x900.png"
              alt="Secure data center infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
