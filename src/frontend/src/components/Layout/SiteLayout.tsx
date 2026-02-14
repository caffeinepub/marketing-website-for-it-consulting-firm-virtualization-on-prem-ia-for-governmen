import SiteHeader from '../Navigation/SiteHeader';
import SiteFooter from './SiteFooter';

interface SiteLayoutProps {
  children: React.ReactNode;
  currentView: 'marketing' | 'admin';
  onViewChange: (view: 'marketing' | 'admin') => void;
}

export default function SiteLayout({ children, currentView, onViewChange }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentView={currentView} onViewChange={onViewChange} />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
