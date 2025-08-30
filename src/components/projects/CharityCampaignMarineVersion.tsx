import campaignImage from 'figma:asset/b74fbb8de2c9166277b6dc0cff5a4b4fe70a70d0.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function CharityCampaignMarineVersion() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Dummy Charity Website for Client Pitching",
    year: "2021",
    description: "Sleep for Cancer Campaign Landing Page",
    fullDescription: "A client pitching project for the 'Sleep for Cancer' campaign where I implemented provided mockups into a custom CMS-based website. This was my first experience with custom CMS development, requiring extra effort to achieve the fancy layout design and ultimately leading to client approval for outsourcing selection.",
    image: campaignImage,
    tags: ["Campaign", "Landing Page", "Fancy Layout"],
    features: [
      "First-time custom CMS implementation with complex layout requirements and advanced functionality",
      "Pixel-perfect recreation of fancy design mockups with intricate visual elements and animations",
      "Responsive design optimization ensuring consistent visual appeal across all devices and screen sizes",
    ],
    technologies: ["Custom CMS", "HTML/CSS", "Responsive Design"],
    timeline: "4 Weeks",
    role: "Digital Designer",
    client: "Pitching Project for Client",
    implementationPhases: [
      {
        phase: "Client Requirements & Mockup Analysis",
        description: "Analyzing the provided 'Sleep for Cancer' campaign mockups and understanding client expectations for the outsourcing pitch presentation."
      },
      {
        phase: "Custom CMS Learning & Setup",
        description: "First-time exploration and configuration of custom CMS platform, learning new technical approaches while setting up the complex content structure."
      },
      {
        phase: "Fancy Layout Implementation",
        description: "Implementing the intricate design elements and fancy layout components that required extra effort and advanced CSS techniques to achieve pixel-perfect results."
      }
    ],
    challenges: [
      "First-time experience with custom CMS platform requiring steep learning curve while maintaining project timeline",
      "Implementing fancy layout design with complex visual elements that demanded extra effort and advanced development techniques"
    ],
    solutions: [
      "Invested extra time in learning custom CMS documentation and best practices, developing systematic implementation approach",
      "Applied advanced CSS techniques and custom development methods to achieve the sophisticated fancy layout requirements"
    ],
    results: [
      "Delivered a pixel-perfect website matching the provided mockups with excellent responsive performance across all devices",
      "Successfully impressed the client and received approval for outsourcing selection, demonstrating capability despite being first custom CMS project"
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
                  This 'Sleep for Cancer' campaign project was a crucial client pitching opportunity where I was tasked with implementing provided design mockups into a custom CMS-based website. As my first experience working with a custom CMS platform, this project presented unique learning challenges while needing to deliver professional results for outsourcing selection evaluation.
                </p>
                <p className="text-muted-foreground">
                  The provided mockups featured a sophisticated, fancy layout design that required extra effort and advanced development techniques to achieve. Every visual element needed to be precisely implemented while ensuring the custom CMS integration would support the client's content management needs effectively.
                </p>
                <p className="text-muted-foreground">
                  Despite the steep learning curve of working with an unfamiliar CMS platform, the project successfully delivered a pixel-perfect implementation that matched the original mockups completely. The responsive design performed excellently across all devices, ultimately leading to client approval and selection for the outsourcing partnership.
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