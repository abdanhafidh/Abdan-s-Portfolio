import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import image_2b2ea050d2711d502e9f13fc585076bc4057603e from 'figma:asset/2b2ea050d2711d502e9f13fc585076bc4057603e.png';

export function FancyDesignProject() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Charity Website with Fancy Design",
    year: "2022",
    description: "Implemented the client's unique design—distinct from previous versions—using our CMS, ensuring accurate translation of their vision into a functional website.",
    fullDescription: "A unique charity website project that required translating the client's distinctive creative vision into a fully functional website. The challenge was maintaining the artistic integrity of their design while ensuring optimal performance and user experience across all devices.",
    image: image_2b2ea050d2711d502e9f13fc585076bc4057603e,
    tags: ["Web Design", "Fancy", "Custom Work"],
    features: [
      "Custom artistic design implementation that preserves the client's creative vision",
      "CMS integration for easy content management by charity staff",
      "Performance optimization without compromising visual design elements",
      "Cross-browser compatibility testing and optimization",
      "Custom animations and interactive elements that enhance user engagement",
      "Responsive design adaptation that maintains artistic integrity across devices"
    ],
    technologies: ["Custom Web Design", "CMS Implementation", "Creative Development", "Performance Optimization"],
    timeline: "5 months",
    role: "Creative Web Designer",
    client: "Independent Charity Organization",
    challenges: [
      "Translating artistic vision into functional web components",
      "Balancing visual creativity with website performance",
      "Ensuring accessibility while maintaining unique design elements",
      "Creating a CMS structure that supports complex visual layouts"
    ],
    solutions: [
      "Developed custom CSS and JavaScript solutions for unique design elements",
      "Implemented image optimization strategies for faster loading times",
      "Created flexible CMS templates that maintain design consistency",
      "Used progressive enhancement to ensure accessibility across all features"
    ],
    results: [
      "Successfully launched a visually striking website that reflects the charity's unique brand",
      "Achieved 90+ performance scores while maintaining complex design elements",
      "Positive feedback from the client on accurate translation of their vision",
      "Increased donor engagement through compelling visual storytelling"
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
                View Design Files
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
                  This project was particularly exciting because it involved working with a charity that had a very specific and artistic vision for their online presence. Unlike typical charity websites that follow conventional layouts, this client wanted something that would stand out and reflect their unique approach to their cause.
                </p>
                <p className="text-muted-foreground">
                  The challenge was to create a website that was both visually striking and functionally robust, ensuring that the artistic elements didn't compromise the user experience or the site's ability to serve the charity's operational needs.
                </p>
              </div>
            </section>

            {/* Creative Process Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Creative Process</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Working closely with the client, we developed a design-to-development workflow that preserved their creative vision while ensuring technical feasibility. This involved creating detailed prototypes and conducting regular design reviews to maintain alignment throughout the project.
                </p>
                <p className="text-muted-foreground">
                  The implementation phase required custom coding solutions for many of the unique design elements, as standard CMS themes couldn't accommodate the client's artistic requirements. We built custom components and templates that could be easily managed through the content management system.
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