import image_3044737e5ace911d6b63c176294b74c22071e2b6 from 'figma:asset/3044737e5ace911d6b63c176294b74c22071e2b6.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function DummyCampaignLandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Dummy Charity Website for Client Pitching",
    year: "2021",
    description: "Implemented the 'Sleep for Cancer' campaign landing page by translating provided mockups into a CMS-based website.",
    fullDescription: "The 'Sleep for Cancer' campaign landing page was a pivotal project that served as a pitching website to demonstrate technical capabilities and design implementation skills to potential clients. This project involved translating pre-designed mockups into a fully functional, CMS-powered website while maintaining pixel-perfect accuracy and implementing responsive design principles.",
    image: image_3044737e5ace911d6b63c176294b74c22071e2b6,
    tags: ["Campaign", "Landing Page", "Fancy Layout"],
    features: [
      "Pixel-perfect translation of provided mockups into functional web pages with precise attention to design details",
      "Custom CMS integration allowing easy content management and updates for campaign information and donor engagement",
      "Responsive design implementation ensuring optimal viewing experience across all device types and screen sizes",
      "Performance optimization techniques to ensure fast loading times and smooth user interactions throughout the site",
      "SEO-friendly structure and content organization to maximize visibility and reach for the cancer awareness campaign",
    ],
    technologies: ["Custom CMS", "HTML/CSS", "JavaScript", "Responsive Design"],
    timeline: "4 weeks",
    role: "Digital Designer",
    client: "Charitable Organization (Pitching Project)",
    implementationPhases: [
      {
        phase: "Mockup Analysis",
        description: "Detailed analysis of provided design mockups to understand layout requirements and visual specifications."
      },
      {
        phase: "CMS Architecture",
        description: "Setting up custom CMS structure to support campaign content management and future scalability needs."
      },
      {
        phase: "Design Implementation",
        description: "Translating mockups into functional web pages while maintaining design integrity and adding interactive elements."
      },
      {
        phase: "Responsive Testing",
        description: "Comprehensive testing across devices to ensure consistent user experience and optimal performance on all platforms."
      }
    ],
    challenges: [
      "First-time experience implementing a website with custom CMS, requiring rapid learning of new technologies and frameworks",
      "Translating complex visual mockups into functional web elements while maintaining pixel-perfect accuracy and design fidelity",
      "Ensuring responsive design functionality across all devices without access to the original designer for clarification",
      "Balancing visual appeal with performance optimization to create an engaging yet fast-loading user experience"
    ],
    solutions: [
      "Invested significant time in learning custom CMS architecture and best practices for scalable content management systems",
      "Developed systematic approach to mockup analysis, breaking down complex designs into manageable component structures",
      "Created comprehensive responsive design testing protocols to ensure consistent experience across all device types",
      "Implemented performance optimization techniques including image compression and efficient CSS/JavaScript loading strategies"
    ],
    results: [
      "Successfully delivered a polished, professional website that perfectly matched the original mockup designs",
      "Client was impressed with the visual quality, layout precision, and responsive design implementation",
      "The project served as a successful pitching tool, leading to client acquisition and additional project opportunities",
      "Gained valuable experience with custom CMS development that became foundational for future client projects"
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
                  The 'Sleep for Cancer' campaign landing page was designed as a pitching project to demonstrate technical capabilities and design implementation skills to potential clients. This project represented a significant learning opportunity, as it was my first experience working with a custom CMS platform.
                </p>
                <p className="text-muted-foreground">
                  The primary objective was to translate provided design mockups into a fully functional, content-managed website while maintaining pixel-perfect accuracy and implementing responsive design principles. The project served as both a technical challenge and a business development tool.
                </p>
                <p className="text-muted-foreground">
                  Through careful attention to visual details, layout precision, and responsive functionality, the project successfully demonstrated the ability to deliver high-quality web solutions that meet client expectations and technical requirements.
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