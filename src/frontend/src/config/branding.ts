import { generateSlug } from '../utils/slug';

/**
 * Centralized branding configuration for Falconrock Consulting
 * Single source of truth for company name, domain, and contact information
 */

const companyName = 'Falconrock Consulting';
const fullDescription = 'Falconrock Consulting (Virtualization + On-Prem IA)';

export const BRANDING = {
  companyName,
  tagline: 'Government IT Consulting',
  domain: 'falconrock.app',
  
  // Deployment-facing slug: valid domain label for deployment systems
  // Generated from full description to be unique and descriptive
  deploymentSlug: generateSlug(fullDescription),
  
  contactEmail: 'contact@falconrock.app',
  phone: '+1 (555) 123-4567',
  location: {
    primary: 'Washington, DC Metro Area',
    secondary: 'Serving Federal Agencies Nationwide',
  },
} as const;
