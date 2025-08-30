import image_cb02297a6278279adf889b9e434f18e8b8712555 from 'figma:asset/cb02297a6278279adf889b9e434f18e8b8712555.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import image_666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb from 'figma:asset/666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb.png';

export function UXCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Petto - Pet Shop App",
    year: "2020",
    description: "Explored a dummy case study to understand and enhance UX design processes",
    fullDescription: "Pet Shop App is a conceptual UX project created to reimagine how pet owners connect with pet products and services. The goal is to deliver a smooth, friendly, and reliable digital experience tailored for both pets and their owners.",
    image: image_cb02297a6278279adf889b9e434f18e8b8712555,
    tags: ["UX Research", "Process", "Strategy"],
    features: [
      "Comprehensive user research including interviews, surveys, and usability testing",
      "Detailed persona development based on real student and instructor feedback",
      "Information architecture redesign to improve content discoverability",
      "Interactive prototyping with user journey mapping and flow optimization",
      "Accessibility considerations ensuring inclusive design for all learners",
    ],
    technologies: ["User Research", "Information Architecture", "Prototyping", "Usability Testing"],
    timeline: "3 months",
    role: "UX Researcher & Designer",
    client: "Academic Study Project",
    challenges: [
      "Understanding diverse learning styles and preferences across different age groups",
      "Balancing feature complexity with ease of use for non-technical users",
      "Creating an engaging interface that maintains focus on educational content"
    ],
    solutions: [
      "Developed modular interface system that adapts to different learning preferences",
      "Created clear visual hierarchy that prioritizes educational content",
      "Implemented flexible learning paths that support various teaching methodologies"
    ],
    results: [
      "Positive feedback from educators on improved content organization",
      "Research findings contributed to academic understanding of e-learning UX"
    ],
    researchPhases: [
      {
        phase: "Research",
        description: "Understanding user needs and market insights."
      },
      {
        phase: "Task Analysis",
        description: "Defining user goals and key actions."
      },
      {
        phase: "Wireframing",
        description: "Structuring layouts and user flows."
      },
      {
        phase: "Design",
        description: "Creating polished, user-friendly interfaces."
      }
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

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-[60px] bg-gradient-green hover:opacity-90 border-0"
              asChild
            >
              <a href="https://www.behance.net/gallery/98851097/Petto-Pet-Shop-App-Case-Study#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Case Study
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
                  The Pet Shop App is a conceptual UX design project aimed at enhancing the way pet owners interact with pet-related products and services. The app is designed to make browsing, purchasing, and managing pet care more intuitive and enjoyable.
                </p>
                <p className="text-muted-foreground">
                  Through this project, I explored key UX processes such as user research, persona development, wireframing, and prototyping. The focus was on creating a seamless flow that balances functionality with a warm, friendly interface that reflects the joyful bond between pets and their owners.
                </p>
                <p className="text-muted-foreground">
                  This dummy project highlights my ability to translate user needs into a clear digital experience while experimenting with engaging design patterns and usability principles.
                </p>
              </div>
            </section>

            {/* Research Process Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Research Process</h2>
              <div className="space-y-6">
                {project.researchPhases.map((phase, index) => (
                  <div key={index} className="border-l-4 border-sage-green pl-6">
                    <h3 className="text-xl font-medium mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Research Challenges</h2>
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
              <h2 className="text-3xl font-medium mb-6">Research Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hunter-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Insights Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Key Research Insights</h2>
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
                  <span className="text-sm text-muted-foreground block">Type</span>
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

            {/* Methodologies */}
            <div className="bg-muted/20 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Research Methods</h3>
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