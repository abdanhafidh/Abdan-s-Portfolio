import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import image_0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7 from 'figma:asset/0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7.png';

export function CharityRedesignProject() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Cancer Charity Website Re-design",
    year: "2024",
    description: "Revamped the platform's design and style, carefully transitioning from the previous layout to a fresh, modern look while maintaining consistency and usability",
    fullDescription: "A comprehensive redesign of a cancer charity website that needed to balance emotional impact with clear information architecture. The challenge was to create a compassionate, trustworthy design while ensuring easy navigation for users seeking critical information and support services.",
    image: image_0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7,
    tags: ["Charity", "Redesign", "Custom Work"],
    features: [
      "Compassionate and accessible design approach that considers user emotional state",
      "Clear navigation for critical information and support resources",
      "Secure donation integration with multiple payment processing options",
      "Mobile-first responsive design for accessibility across all devices",
      "Content management system for easy updates by charity staff",
      "Multilingual support for diverse community needs"
    ],
    technologies: ["Charity Web Design", "Accessibility Design", "Content Management", "UX Research"],
    timeline: "4 months",
    role: "UX/UI Designer",
    client: "Cancer Support Charity",
    challenges: [
      "Balancing emotional impact with functional clarity",
      "Creating trust and credibility through design",
      "Ensuring accessibility for users with various abilities",
      "Managing complex information architecture for multiple user types"
    ],
    solutions: [
      "Conducted user research with charity beneficiaries and staff",
      "Implemented WCAG 2.1 AA accessibility standards",
      "Created clear user journeys for different visitor intentions",
      "Developed a warm, trustworthy visual language"
    ],
    results: [
      "60% increase in online donation conversions",
      "40% improvement in average session duration",
      "Positive feedback from users about improved navigation",
      "Accessibility score improved from 65% to 98%"
    ]
  };

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')}
          variant="ghost" 
          className="mb-8 rounded-[60px] hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl md:text-6xl font-medium">{project.title}</h1>
            <span className="text-xl text-muted-foreground">{project.year}</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mb-6">
            {project.fullDescription}
          </p>
          
          {/* Project Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-sm rounded-[60px] px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-[60px] bg-gradient-green hover:opacity-90 border-0"
              asChild
            >
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-[60px] border-hunter-green text-hunter-green hover:bg-hunter-green hover:text-white"
              asChild
            >
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Case Study
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted/30">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  The cancer charity website redesign was a deeply meaningful project that required careful consideration of user emotional states and accessibility needs. The existing site was outdated and difficult to navigate, creating barriers for people seeking critical support during challenging times.
                </p>
                <p className="text-muted-foreground">
                  Through extensive user research and stakeholder interviews, we identified key pain points and developed a comprehensive redesign strategy that prioritized clarity, accessibility, and emotional support while maintaining the organization's trusted brand identity.
                </p>
              </div>
            </section>

            {/* Research & Discovery Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Research & Discovery</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  We conducted interviews with charity staff, volunteers, and beneficiaries to understand their needs and challenges. Key insights included the importance of quick access to support resources, clear donation processes, and content that provides hope while acknowledging difficult realities.
                </p>
              </div>
            </section>

            {/* Challenges Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solutions Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hunter-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pine-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Results & Impact</h2>
              <ul className="space-y-4">
                {project.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-moss-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-muted/20 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground block">Role</span>
                  <span className="font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Client</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Timeline</span>
                  <span className="font-medium">{project.timeline}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Year</span>
                  <span className="font-medium">{project.year}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-muted/20 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Technologies & Skills</h3>
              <div className="space-y-2">
                {project.technologies.map((tech: string) => (
                  <div key={tech} className="text-sm text-muted-foreground">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-green rounded-2xl p-6 text-white">
              <h3 className="font-medium mb-2">Interested in working together?</h3>
              <p className="text-sm opacity-90 mb-4">
                Let's discuss your next project and how we can bring your vision to life.
              </p>
              <Button 
                variant="secondary" 
                size="sm" 
                className="rounded-[60px]"
                asChild
              >
                <a href="mailto:knockmedan@gmail.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}