import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { MoreWorksSection } from "./components/MoreWorksSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HireMeCTA } from "./components/HireMeCTA";
import { BackgroundMotif } from "./components/BackgroundMotif";
import { CustomCursor } from "./components/CustomCursor";
import { CaseStudyProject } from "./components/projects/CaseStudyProject";
import { CharityRedesignProject } from "./components/projects/CharityRedesignProject";
import { NavigationProject } from "./components/projects/NavigationProject";
import { FancyDesignProject } from "./components/projects/FancyDesignProject";
import { GoGreenProject } from "./components/projects/GoGreenProject";
import { MarineLiveDonation } from "./components/projects/MarineLiveDonation";

import { CharityCampaignMarineVersion } from "./components/projects/CharityCampaignMarineVersion";
import { UIDesignGallery } from "./components/more-works/UIDesignGallery";
import { UXCaseStudy } from "./components/more-works/UXCaseStudy";
import { BrandAndLogo } from "./components/more-works/BrandAndLogo";

function HomePage() {
  return (
    <>
      <Hero />
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="more-works">
        <MoreWorksSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <HireMeCTA />
    </>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-medium">Abdan Ahnafi</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://dribbble.com/abdanahnafi" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              Dribbble
            </a>
            <a href="https://www.behance.net/abdanahnafi" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/abdanahnafi" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="mailto:knockmedan@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Abdan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Parallax Background */}
        <BackgroundMotif />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <main>
            <Routes>
              {/* Main Homepage/Landing Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Website Design Project Detail Pages */}
              <Route path="/project/case-study-brand-site" element={<CaseStudyProject />} />
              <Route path="/project/go-green-website" element={<GoGreenProject />} />
              <Route path="/project/charity-website-redesign" element={<CharityRedesignProject />} />
              <Route path="/project/custom-navigation-foundation" element={<NavigationProject />} />
              <Route path="/project/marine-live-donation" element={<MarineLiveDonation />} />

              <Route path="/project/charity-campaign-marine-version" element={<CharityCampaignMarineVersion />} />
              
              {/* More Works Detail Pages */}
              <Route path="/more-works/ui-design-gallery" element={<UIDesignGallery />} />
              <Route path="/more-works/ux-case-study" element={<UXCaseStudy />} />
              <Route path="/more-works/brand-and-logo" element={<BrandAndLogo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}