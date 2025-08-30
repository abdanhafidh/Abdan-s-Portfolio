import image_96d1009674c819361b9011e4dd49d2fae3f84ebc from 'figma:asset/96d1009674c819361b9011e4dd49d2fae3f84ebc.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import image_666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb from 'figma:asset/666d6fef29fc8597ef77c3fc95d9c8fab6e4f3cb.png';

export function CaseStudyProject() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Case Study page for the Brand Site",
    year: "2025",
    description: "Implemented a case study page in collaboration with the marketing team, enhancing brand storytelling and improving audience engagement.",
    fullDescription: "This project involved creating a comprehensive case study page that would serve as a cornerstone for the brand's storytelling efforts. Working closely with the marketing team, I designed an engaging layout that effectively communicates complex project narratives while maintaining visual appeal and user engagement.",
    image: image_96d1009674c819361b9011e4dd49d2fae3f84ebc,
    tags: ["Case Study", "Web Design", "Marketing"],
    features: [
      "Engaging visual storytelling layout that guides users through the project narrative",
      "Interactive elements to showcase project progression and key milestones",
      "Responsive design optimized for all devices and screen sizes",
      "SEO-optimized content structure for improved search visibility",
      "Integration with existing brand design system and guidelines",
      "Performance-optimized images and assets for fast loading times"
    ],
    technologies: ["Web Design", "Content Strategy", "Brand Design", "SEO Optimization"],
    timeline: "2 - 3 days",
    role: "Web Designer",
    client: "Brand Marketing Team",
    challenges: [
      "Balancing visual impact with information hierarchy",
      "Creating engagement without sacrificing readability",
      "Maintaining brand consistency across different content types",
      "Optimizing for both desktop and mobile experiences"
    ],
    solutions: [
      "Developed a modular layout system for flexible content presentation",
      "Implemented progressive disclosure to manage information density",
      "Created custom components aligned with brand guidelines",
      "Used responsive design principles for seamless cross-device experience"
    ],
    results: [
      "Positive feedback from marketing team",
      "Successfully implemented across multiple brand case studies"
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
                  This project focused on creating a client case study website in collaboration with the marketing team. The marketing team prepared the initial draft text and layout, while I was responsible for translating these into wireframes and a cohesive website structure. In addition, I designed graphics to strengthen the explanatory sections and improve overall visual storytelling. The project was developed in close collaboration with a senior designer and the Chief Creative Officer, ensuring both creative alignment and high-quality visual execution.
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
                  Knock Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}