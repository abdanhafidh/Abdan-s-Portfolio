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

// Option 3: Minimal Grid Layout
export function HeroAlternative3() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Profile Column */}
          <div className="lg:col-span-3">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="w-48 h-48 lg:w-full lg:h-auto lg:aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTk0MDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abdan - UX/UI Designer"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-muted-foreground">Hi, I'm Abdan 👋</p>
                  <h3 className="text-xl font-medium">UX/UI Designer</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button size="lg" className="w-full rounded-full group">
                    Hire Me
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
                Creating digital experiences that <span className="text-muted-foreground">inspire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a passionate designer with 5+ years of experience crafting beautiful, 
                user-centered digital products. I specialize in creating seamless experiences 
                that bridge creativity and functionality.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
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

          {/* Tools Sidebar */}
          <div className="lg:col-span-3">
            <div className="space-y-4 lg:sticky lg:top-24">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Tools Expertise
              </h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-full hover:bg-muted/50 transition-colors">
                    <tool.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="lg" className="w-full rounded-full mt-6">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}