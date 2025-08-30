import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import image_2b2ea050d2711d502e9f13fc585076bc4057603e from 'figma:asset/2b2ea050d2711d502e9f13fc585076bc4057603e.png';
import image_3044737e5ace911d6b63c176294b74c22071e2b6 from 'figma:asset/3044737e5ace911d6b63c176294b74c22071e2b6.png';
import image_0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7 from 'figma:asset/0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7.png';
import image_666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb from 'figma:asset/666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb.png';

const projects = [
  {
    id: 1,
    title: "Case Study page for the Brand Site",
    description: "Implemented a case study page in collaboration with the marketing team, enhancing brand storytelling and improving audience engagement.",
    image: image_666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb,
    tags: ["Case Study", "Web Design", "Marketing"],
    year: "2025",
    fullDescription: "This project involved creating a comprehensive case study page that would serve as a cornerstone for the brand's storytelling efforts. Working closely with the marketing team, I designed an engaging layout that effectively communicates complex project narratives while maintaining visual appeal and user engagement.",
    features: [
      "Engaging visual storytelling layout",
      "Interactive elements to showcase project progression",
      "Responsive design optimized for all devices",
      "SEO-optimized content structure",
      "Integration with existing brand design system"
    ],
    technologies: ["Web Design", "Content Strategy", "Brand Design"],
    timeline: "2 months",
    role: "Lead Web Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Cancer Charity Website Re-design",
    description: "Revamped the platform's design and style, carefully transitioning from the previous layout to a fresh, modern look while maintaining consistency and usability",
    image: image_0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7,
    tags: ["Charity", "Redesign", "Custom Work"],
    year: "2024",
    fullDescription: "A complete redesign of a cancer charity website that needed to balance emotional impact with clear information architecture. The challenge was to create a compassionate, trustworthy design while ensuring easy navigation for users seeking critical information and support services.",
    features: [
      "Compassionate and accessible design approach",
      "Clear navigation for critical information",
      "Donation integration with secure payment processing",
      "Mobile-first responsive design",
      "Content management system for easy updates"
    ],
    technologies: ["Charity Web Design", "Accessibility Design", "Content Management"],
    timeline: "4 months",
    role: "UX/UI Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Custom Navigation Style for the Foundation Website",
    description: "Created a fully customized mega navigation, exploring and applying a new design style to enhance user experience.",
    image: image_3044737e5ace911d6b63c176294b74c22071e2b6,
    tags: ["Web Design", "Navigation Menu", "Custom Work"],
    year: "2024",
    fullDescription: "This project focused on revolutionizing the user experience through innovative navigation design. The mega navigation system was built to handle complex site architecture while maintaining intuitive user flows and visual clarity across all sections of the foundation's website.",
    features: [
      "Custom mega navigation with dropdown categories",
      "Intuitive information architecture",
      "Smooth animations and transitions",
      "Mobile-optimized navigation drawer",
      "Search integration within navigation"
    ],
    technologies: ["Navigation Design", "Information Architecture", "Interactive Design"],
    timeline: "3 months",
    role: "Navigation UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Charity Website with Fancy Design",
    description: "Implemented the client's unique design—distinct from previous versions—using our CMS, ensuring accurate translation of their vision into a functional website.",
    image: image_2b2ea050d2711d502e9f13fc585076bc4057603e,
    tags: ["Web Design", "Fancy", "Custom Work"],
    year: "2022",
    fullDescription: "A unique charity website project that required translating the client's distinctive creative vision into a fully functional website. The challenge was maintaining the artistic integrity of their design while ensuring optimal performance and user experience across all devices.",
    features: [
      "Custom artistic design implementation",
      "CMS integration for content management",
      "Performance optimization without compromising design",
      "Cross-browser compatibility testing",
      "Custom animations and interactive elements"
    ],
    technologies: ["Custom Web Design", "CMS Implementation", "Creative Development"],
    timeline: "5 months",
    role: "Creative Web Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(projectId || '0'));
    setProject(foundProject);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-medium mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            className="rounded-full border-hunter-green text-hunter-green hover:bg-hunter-green hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')}
          variant="ghost" 
          className="mb-8 rounded-full hover:bg-muted/50"
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
              <Badge key={tag} variant="secondary" className="text-sm rounded-full px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-green hover:opacity-90 border-0"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-hunter-green text-hunter-green hover:bg-hunter-green hover:text-white"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
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
            {/* Features Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Design Process Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Design Process</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  The design process began with comprehensive user research to understand the target audience's needs and pain points. 
                  Through interviews, surveys, and competitive analysis, we identified key opportunities for improvement in the user experience.
                </p>
                <p className="text-muted-foreground">
                  Multiple design iterations were created and tested with users to ensure the final solution met their expectations. 
                  The design system was carefully crafted to maintain consistency across all touchpoints while allowing for scalability.
                </p>
              </div>
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
              <h3 className="font-medium mb-4">Technologies Used</h3>
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
                className="rounded-full"
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