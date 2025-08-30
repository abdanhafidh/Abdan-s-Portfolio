import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed nav height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="font-medium hover:text-sage-green transition-colors">
              Abdan Ahnafi
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a 
              href="#more-works" 
              onClick={(e) => handleSmoothScroll(e, 'more-works')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              More Works
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleSmoothScroll(e, 'experience')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-[60px] bg-gradient-green hover:opacity-90 border-0"
            asChild
          >
            <a href="mailto:knockmedan@gmail.com">
              Knock Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}