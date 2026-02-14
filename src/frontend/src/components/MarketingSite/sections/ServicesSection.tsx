import { Server, Cloud, Shield, Wrench, Database, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Server,
    title: 'Virtualization Solutions',
    description: 'Enterprise-grade VMware, Hyper-V, and KVM deployments optimized for government workloads with high availability and disaster recovery.',
  },
  {
    icon: Database,
    title: 'On-Premises Infrastructure',
    description: 'Design, deployment, and management of secure on-prem data centers meeting NIST, FISMA, and DoD compliance requirements.',
  },
  {
    icon: Shield,
    title: 'Information Assurance',
    description: 'Comprehensive IA services including security hardening, STIG implementation, vulnerability management, and continuous monitoring.',
  },
  {
    icon: Cloud,
    title: 'Hybrid Cloud Integration',
    description: 'Secure hybrid architectures connecting on-premises infrastructure with authorized government cloud environments.',
  },
  {
    icon: Network,
    title: 'Network Architecture',
    description: 'Secure network design and implementation with segmentation, zero-trust principles, and defense-in-depth strategies.',
  },
  {
    icon: Wrench,
    title: 'Operations & Maintenance',
    description: '24/7 monitoring, patch management, and operational support ensuring mission continuity and system availability.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions tailored for government agencies and contractors requiring secure, 
            compliant infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
