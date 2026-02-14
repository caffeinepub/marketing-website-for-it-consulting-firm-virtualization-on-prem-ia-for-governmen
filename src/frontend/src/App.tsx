import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/Layout/SiteLayout';
import MarketingSite from './components/MarketingSite/MarketingSite';
import AdminInquiriesPage from './components/Admin/AdminInquiriesPage';
import { Toaster } from '@/components/ui/sonner';
import { BRANDING } from './config/branding';
import { isValidSlug } from './utils/slug';

type View = 'marketing' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('marketing');

  // Runtime validation of deployment slug (non-blocking, logs error)
  useEffect(() => {
    const slug = BRANDING.deploymentSlug;
    
    if (!isValidSlug(slug)) {
      console.error(
        `[Deployment Slug Validation Error] Invalid deployment slug: "${slug}"\n` +
        `Constraints: 5-50 characters, lowercase letters/numbers/hyphens only, ` +
        `no leading/trailing/consecutive hyphens.\n` +
        `Current length: ${slug.length} characters`
      );
    } else {
      console.log(`[Deployment Slug] Valid: "${slug}" (${slug.length} characters)`);
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SiteLayout currentView={currentView} onViewChange={setCurrentView}>
        {currentView === 'marketing' ? (
          <MarketingSite />
        ) : (
          <AdminInquiriesPage onBackToHome={() => setCurrentView('marketing')} />
        )}
      </SiteLayout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
