import { CheckCircle2, FileCheck, Users, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: FileCheck,
    title: 'ATO & Compliance Support',
    items: [
      'Authority to Operate (ATO) package preparation',
      'NIST 800-53 control implementation',
      'FedRAMP and DoD Impact Level compliance',
      'Continuous monitoring and reporting',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Security Hardening',
    items: [
      'DISA STIG baseline implementation',
      'CIS benchmark configuration',
      'Vulnerability assessment and remediation',
      'Security audit and penetration testing coordination',
    ],
  },
  {
    icon: Users,
    title: 'Professional Services',
    items: [
      'Cleared personnel with active security clearances',
      'Experienced government contract delivery',
      'Comprehensive documentation and knowledge transfer',
      'On-site and remote support options',
    ],
  },
  {
    icon: Zap,
    title: 'Operational Excellence',
    items: [
      'Rapid deployment and migration services',
      'Change management and ITIL processes',
      'Disaster recovery and business continuity',
      'Performance optimization and capacity planning',
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Government-Focused Capabilities</h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise in delivering secure, compliant infrastructure for federal, state, 
            and local government agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-soft border">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
              <ul className="space-y-3">
                {capability.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
