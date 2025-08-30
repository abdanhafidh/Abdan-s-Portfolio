import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Figma, Palette, Code, Globe, Monitor, ArrowRight } from "lucide-react";
import { NotionIcon } from "./NotionIcon";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  "UI/UX Design", "Product Design", "Design Systems", "Prototyping", "User Research"
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Monitor },
  { name: "Webflow", icon: Globe },
  { name: "Notion", icon: NotionIcon },
  { name: "After Effects", icon: Palette },
  { name: "React", icon: Code }
];

// Option 1: Split Two-Column Layout
export function HeroAlternative1() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground mb-4">Hi, I'm Abdan 👋</p>
              <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
                Creating digital experiences that <span className="text-muted-foreground">inspire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a passionate designer with 5+ years of experience crafting beautiful, 
                user-centered digital products. I specialize in creating seamless experiences 
                that bridge creativity and functionality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 rounded-full group">
                Hire Me
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 rounded-full">
                View Portfolio
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Tools */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTk0MDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abdan - UX/UI Designer"
                  className="w-full h-full object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center lg:text-left">
                Tools Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-full hover:bg-muted/50 transition-colors">
                    <tool.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}