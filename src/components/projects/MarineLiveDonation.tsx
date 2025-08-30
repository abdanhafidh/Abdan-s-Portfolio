import image_7e1a37972034542d9a1fdd414a41b89726c770d3 from 'figma:asset/7e1a37972034542d9a1fdd414a41b89726c770d3.png';
import image_2b2ea050d2711d502e9f13fc585076bc4057603e from 'figma:asset/2b2ea050d2711d502e9f13fc585076bc4057603e.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function MarineLiveDonation() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Donation Page for Marine Live",
    year: "2022",
    description: "Donation Page for Marine Live",
    fullDescription: "The Marine Live donation page project involved creating a compelling and user-friendly donation platform to support marine life conservation efforts. The project focused on developing an emotional connection with visitors while providing a seamless donation experience that encourages contributions to marine wildlife protection and ocean conservation initiatives.",
    image: image_7e1a37972034542d9a1fdd414a41b89726c770d3,
    tags: ["Donation Page", "Implementation", "Template"],
    features: [
      "Emotionally engaging design featuring marine life imagery and compelling storytelling elements",
      "Impact visualization showing how donations directly contribute to marine conservation efforts",
      "Responsive design ensuring optimal donation experience across all devices and platforms",
    ],
    technologies: ["CMSS", "Custom CSS", "Responsive Design"],
    timeline: "3 days",
    role: "Digital Designer",
    client: "Internal - Template Creation",
    implementationPhases: [
      {
        phase: "Research & Planning",
        description: "Understanding donor psychology and analyzing successful donation page patterns and user flows."
      },
      {
        phase: "Design Development",
        description: "Creating visually compelling layouts that connect emotionally with marine conservation mission."
      },
      {
        phase: "Responsive Design",
        description: "Ensuring optimal donation experience across all devices and platforms with responsive layout testing."
      }
    ],
    challenges: [
      "Balancing emotional appeal with clear call-to-action elements to maximize donation conversions",
      "Creating mobile-optimized donation flows that work seamlessly across all device types"
    ],
    solutions: [
      "Developed compelling visual storytelling with marine life imagery and impact statistics to drive engagement",
      "Created mobile-first responsive design with optimized touch targets and simplified donation flows"
    ],
    results: [
      "Developed a fully responsive donation page template that seamlessly aligns with the project’s theme and visual identity",
      "Designed with usability in mind, ensuring an intuitive and accessible experience across all devices"
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
                  The Marine Live donation page project was designed to create a powerful and effective platform for supporting marine life conservation efforts. The primary goal was to develop a donation experience that not only facilitates contributions but also educates visitors about the critical importance of marine ecosystem protection.
                </p>
                <p className="text-muted-foreground">
                  The project required careful consideration of user psychology, visual design, and technical implementation to create a donation platform that builds trust, inspires action, and provides a seamless giving experience. Every element was designed to support the organization's mission while maximizing donation conversion rates.
                </p>
                <p className="text-muted-foreground">
                  Through strategic use of marine life imagery, compelling storytelling, and user-centered design principles, the donation page successfully connects emotional appeal with practical functionality to support ongoing conservation efforts and marine wildlife protection initiatives.
                </p>
              </div>
            </section>

            {/* Development Process Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Development Process</h2>
              <div className="space-y-6">
                {project.implementationPhases.map((phase, index) => (
                  <div key={index} className="border-l-4 border-sage-green pl-6">
                    <h3 className="text-xl font-medium mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Challenges Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Project Challenges</h2>
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