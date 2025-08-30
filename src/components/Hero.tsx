import image_4b711cf8c6f99f9f07a18d2828cd437076489b5b from 'figma:asset/4b711cf8c6f99f9f07a18d2828cd437076489b5b.png';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Figma, Code, Globe, ArrowRight } from "lucide-react";
import { NotionIcon } from "./NotionIcon";
import { AdobeIcon } from "./AdobeIcon";
import { FramerIcon } from "./FramerIcon";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const skills = [
    "UI/UX Design",
    "Web Design",
    "Mobile Design",
    "Prototyping",
    "Design Systems",
    "Responsive Design"
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Adobe Creative Suite", icon: AdobeIcon },
    { name: "Framer", icon: FramerIcon },
    { name: "Notion", icon: NotionIcon },
    { name: "WordPress", icon: Globe },
    { name: "HTML/CSS", icon: Code }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-32 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header - Image + Title/Bio Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-12">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-lg text-muted-foreground mb-4">Hi, I'm Abdan!</p>
              <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
                Crafting websites that blend <span className="text-sage-green">beauty </span>and <span className="text-sage-green">usability. </span>
              </h1>
            </div>
          
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
Passionate web & digital designer with 4+ years of experience. I craft user-centered, responsive websites that blend creativity with functionality — always learning, adapting, and delivering with impact.
              </p>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40">
              <ImageWithFallback
                src={image_4b711cf8c6f99f9f07a18d2828cd437076489b5b}
                alt="Abdan - UX/UI Designer"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-start mb-12">
          <Button size="lg" className="px-8 rounded-full group bg-gradient-green hover:opacity-90 border-0" asChild>
            <a href="mailto:knockmedan@gmail.com">
              Knock Me
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full border-hunter-green text-hunter-green hover:bg-hunter-green hover:text-white" asChild>
            <a 
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              View Portfolio
            </a>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3 justify-start">
              {skills.map((skill, index) => (
                <Badge key={skill} variant="outline" className={`px-4 py-2 rounded-full transition-colors ${
                  index % 4 === 0 ? 'border-dark-forest text-dark-forest hover:bg-dark-forest hover:text-white' :
                  index % 4 === 1 ? 'border-hunter-green text-hunter-green hover:bg-hunter-green hover:text-white' :
                  index % 4 === 2 ? 'border-pine-green text-pine-green hover:bg-pine-green hover:text-white' :
                  'border-sage-green text-sage-green hover:bg-sage-green hover:text-white'
                }`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Tools Expertise
            </h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {tools.map((tool, index) => (
                <div key={tool.name} className={`group flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
                  index % 6 === 0 ? 'bg-green-background border border-green-border hover:bg-dark-forest hover:text-white' :
                  index % 6 === 1 ? 'bg-muted/30 hover:bg-hunter-green hover:text-white' :
                  index % 6 === 2 ? 'bg-muted/30 hover:bg-pine-green hover:text-white' :
                  index % 6 === 3 ? 'bg-muted/30 hover:bg-sage-green hover:text-white' :
                  index % 6 === 4 ? 'bg-muted/30 hover:bg-moss-green hover:text-white' :
                  'bg-muted/30 hover:bg-olive-green hover:text-white'
                }`}>
                  <tool.icon className={`w-5 h-5 transition-colors group-hover:text-white ${
                    index % 6 === 0 ? 'text-dark-forest' :
                    index % 6 === 1 ? 'text-hunter-green' :
                    index % 6 === 2 ? 'text-pine-green' :
                    index % 6 === 3 ? 'text-sage-green' :
                    index % 6 === 4 ? 'text-moss-green' :
                    'text-olive-green'
                  }`} />
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}