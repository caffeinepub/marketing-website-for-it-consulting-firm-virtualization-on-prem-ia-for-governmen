import { Heart } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || BRANDING.domain);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {BRANDING.companyName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
