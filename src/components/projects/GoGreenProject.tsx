import image_b355c4b1e2be77c92651a8f62375abbd7d7982c6 from 'figma:asset/b355c4b1e2be77c92651a8f62375abbd7d7982c6.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function GoGreenProject() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Go Green Website Implementation",
    year: "2023",
    description: "Implemented a Go Green website by adapting a pre-designed template into a CMS platform",
    fullDescription: "The Go Green website implementation involved transforming a static environmental awareness template into a fully functional, content-managed website. The project focused on maintaining the original eco-friendly design aesthetic while enhancing usability and adding modern interactive elements to promote environmental consciousness and sustainable practices.",
    image: image_b355c4b1e2be77c92651a8f62375abbd7d7982c6,
    tags: ["Recycle", "Implementation", "Custom Work"],
    features: [
      "Responsive design adaptation ensuring optimal viewing across all devices and screen sizes",
      "CMS integration allowing easy content updates for environmental articles and campaigns",
      "Interactive elements including donation forms and volunteer registration systems",
      "Performance optimization to reduce carbon footprint through efficient loading times",
      "SEO implementation to increase visibility for environmental awareness content",
    ],
    technologies: ["CMS", "Custom CSS", "Responsive Design"],
    timeline: "1 week",
    role: "Digital Designer",
    client: "Internal - Template Creation",
    implementationPhases: [
      {
        phase: "Template Analysis",
        description: "Analyzing the original template structure and identifying adaptation requirements."
      },
      {
        phase: "CMS Setup",
        description: "Configuring the content management system and database structure."
      },
      {
        phase: "Design Integration",
        description: "Implementing the visual design while maintaining eco-friendly aesthetics."
      },
      {
        phase: "Testing & Launch",
        description: "Cross-browser testing and deployment to production environment."
      }
    ],
    challenges: [
      "Adapting static template layouts to work seamlessly within a dynamic CMS environment",
      "Maintaining the original design integrity while adding modern functionality requirements",
      "Ensuring fast loading times to minimize environmental impact of the website itself",
      "Creating intuitive content management workflows for non-technical users"
    ],
    solutions: [
      "Developed custom themes that preserve original design elements while adding CMS functionality",
      "Implemented modern CSS techniques and optimized image handling for improved performance",
      "Created user-friendly admin interfaces with clear documentation for content management",
      "Added progressive web app features to enhance user experience and engagement"
    ],
    results: [
      "Successfully transformed static template into fully functional CMS-powered website",
      "Enabled easy content management for ongoing environmental campaigns and updates",
      "Increased user engagement through interactive features and improved user experience"
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
          Back to Home
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
                  The Go Green website project transformed a static eco-themed template into a dynamic CMS-based platform, combining a clean, nature-inspired design with modern functionality. The implementation balanced preserving the original aesthetic with adding interactive features, ensuring an easy content management experience while promoting environmental awareness through both design and performance optimization.
                </p>
              </div>
            </section>

            {/* Implementation Process Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Implementation Process</h2>
              <div className="space-y-6">
                {project.implementationPhases.map((phase, index) => (
                  <div key={index} className="border-l-4 border-sage-green pl-6">
                    <h3 className="text-xl font-medium mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Challenges Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Technical Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Solutions Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Technical Solutions</h2>
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
              <h2 className="text-3xl font-medium mb-6">Key Implementation Features</h2>
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
                  <span className="text-sm text-muted-foreground block">Duration</span>
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
              <h3 className="font-medium mb-4">Technologies Used</h3>
              <div className="space-y-2">
                {project.technologies.map((tech: string) => (
                  <div key={tech} className="text-sm text-muted-foreground">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}