import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LoginButton from '../Auth/LoginButton';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserRole } from '../../hooks/useQueries';
import { UserRole } from '../../backend';

interface SiteHeaderProps {
  currentView: 'marketing' | 'admin';
  onViewChange: (view: 'marketing' | 'admin') => void;
}

export default function SiteHeader({ currentView, onViewChange }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity } = useInternetIdentity();
  const { data: userRole } = useGetCallerUserRole();

  const isAuthenticated = !!identity;
  const isAdmin = userRole === UserRole.admin;

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'marketing') {
      onViewChange('marketing');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onViewChange('marketing');
              scrollToSection('home');
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/generated/it-consulting-logo.dim_512x512.png"
              alt="SecureInfra Solutions"
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <div className="font-semibold text-lg leading-tight">SecureInfra Solutions</div>
              <div className="text-xs text-muted-foreground">Government IT Consulting</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated && isAdmin && (
              <Button
                variant={currentView === 'admin' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewChange(currentView === 'admin' ? 'marketing' : 'admin')}
                className="hidden md:flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                {currentView === 'admin' ? 'Back to Site' : 'Admin'}
              </Button>
            )}
            <LoginButton />

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  {isAuthenticated && isAdmin && (
                    <Button
                      variant={currentView === 'admin' ? 'default' : 'outline'}
                      onClick={() => {
                        onViewChange(currentView === 'admin' ? 'marketing' : 'admin');
                        setMobileMenuOpen(false);
                      }}
                      className="mt-4 w-full"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      {currentView === 'admin' ? 'Back to Site' : 'Admin Panel'}
                    </Button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
