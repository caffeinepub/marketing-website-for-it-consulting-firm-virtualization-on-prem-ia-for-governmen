import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/Layout/SiteLayout';
import MarketingSite from './components/MarketingSite/MarketingSite';
import AdminInquiriesPage from './components/Admin/AdminInquiriesPage';
import { Toaster } from '@/components/ui/sonner';

type View = 'marketing' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('marketing');

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
