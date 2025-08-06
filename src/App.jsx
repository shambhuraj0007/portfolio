
import { lazy, Suspense, memo } from "react";

// Lazy load components for better performance
const Footer = lazy(() => import("./sections/Footer"));
const Contact = lazy(() => import("./sections/Contact"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Experience = lazy(() => import("./sections/Experience"));
const Hero = lazy(() => import("./sections/Hero"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Navbar = lazy(() => import("./components/NavBar"));
const Certificates = lazy(() => import("./sections/Certificates"));
const Internships = lazy(() => import("./sections/Internships"));
const PerformanceMonitor = lazy(() => import("./components/PerformanceMonitor"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#cd7c2e]"></div>
  </div>
);

const App = memo(() => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <Certificates />
      <Internships />
      <TechStack />
      <Contact />
      <Footer />
      <PerformanceMonitor />
    </Suspense>
  </>
));

export default App;