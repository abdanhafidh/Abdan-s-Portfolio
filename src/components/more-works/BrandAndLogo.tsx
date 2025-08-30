import image_c8218ff8244d46cd94890ac21ca461718397e87d from 'figma:asset/c8218ff8244d46cd94890ac21ca461718397e87d.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import image_0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7 from 'figma:asset/0aa47f85f9ca0a716fba8057f9165b9db1a0fcd7.png';

export function BrandAndLogo() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "SPATUKAMU - Shoes & Care",
    year: "2021",
    description: "Explored visual identity and branding through independent design projects",
    fullDescription: "SPATUKAMU is a conceptual brand I created during my time with the SoftwareSeni Design Team. As a shoe cleaning service company, this dummy project allowed me to explore the full creative process — from developing the logo and visual identity to designing the website mockup.",
    image: image_c8218ff8244d46cd94890ac21ca461718397e87d,
    tags: ["Branding", "Logo", "Identity"],
    features: [
      "Logo, typography, and icons applied consistently across website mockups.",
      "Promotional materials tailored to appeal to student audiences.",
      "Digital assets created for both online and offline presence."
    ],
    technologies: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    timeline: "4 months",
    role: "Designer",
    client: "Training Project",
    brandElements: [
      {
        element: "Logo Design",
        description: "Modern, Illustrates shoes being cleaned, reflecting the core service."
      },
      {
        element: "Color Palette",
        description: "Black and white for simplicity and cleanliness."
      },
      {
        element: "Typography",
        description: "Clean, modern, and highly readable."
      },
      {
        element: "Iconography",
        description: "Minimal and consistent to support the brand."
      }
    ],
    challenges: [
      "Many existing shoe cleaning service competitors in the market.",
      "Targeting a younger audience, especially students, with limited budgets.",
      "Creating a unique and memorable brand identity that stands out."
    ],
    solutions: [
      "Developed a clean, minimal visual identity with a strong concept (shoes being cleaned).",
      "Chose a monochrome palette and modern typography to reflect simplicity and trust.",
      "Designed approachable, student-friendly brand messaging and visuals."
    ],
    results: [
      "A fresh, modern identity that differentiates SPATUKAMU from competitors.",
      "Clear and consistent brand visuals strengthen trust and recognition.",
      "The project demonstrates full-scope design skills, from branding to digital product mockups."
    ],
    brandValues: [
      "Cleanliness – Delivering freshness and hygiene as the core promise of the service.",
      "Trustworthiness – Building confidence through consistent, professional care.",
      "Simplicity – Keeping the brand minimal, modern, and easy to connect with.",
      "Youthful – Friendly and approachable identity that resonates with students and young audiences."
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
                  SPATUKAMU is a conceptual shoe cleaning service brand developed as part of my work with the SoftwareSeni Design Team. The project explores end-to-end design processes, starting from brand identity and logo creation to the development of a website mockup.
                </p>
                <p className="text-muted-foreground">
                The goal was to design a clean, modern, and trustworthy brand identity that reflects professionalism while appealing to young, urban audiences. Through this project, I focused on combining visual branding with a user-friendly digital experience, ensuring that the brand feels both reliable and approachable.
                </p>
              </div>
            </section>

            {/* Brand Strategy Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Brand Strategy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  SPATUKAMU positions itself as a modern, trustworthy, and student-friendly shoe cleaning service. With a clean and minimal identity, the brand aims to stand out in a crowded market by emphasizing professional care, affordability, and a youthful tone.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {project.brandValues.map((value, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-xl">
                    <span className="text-hunter-green font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Brand Elements Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Brand Elements</h2>
              <div className="space-y-6">
                {project.brandElements.map((element, index) => (
                  <div key={index} className="border-l-4 border-sage-green pl-6">
                    <h3 className="text-xl font-medium mb-2">{element.element}</h3>
                    <p className="text-muted-foreground">{element.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Design Challenges</h2>
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
              <h2 className="text-3xl font-medium mb-6">Design Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hunter-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Brand Applications Section */}
            <section>
              <h2 className="text-3xl font-medium mb-6">Brand Applications</h2>
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

            {/* Design Skills */}
            <div className="bg-muted/20 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Design Skills</h3>
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