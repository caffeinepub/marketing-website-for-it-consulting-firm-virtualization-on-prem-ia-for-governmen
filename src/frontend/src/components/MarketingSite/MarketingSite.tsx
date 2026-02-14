import HomeHeroSection from './sections/HomeHeroSection';
import ServicesSection from './sections/ServicesSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ProfileSetupDialog from '../Auth/ProfileSetupDialog';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../../hooks/useQueries';

export default function MarketingSite() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  return (
    <>
      <HomeHeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <AboutSection />
      <ContactSection />
      <ProfileSetupDialog open={showProfileSetup} />
    </>
  );
}
