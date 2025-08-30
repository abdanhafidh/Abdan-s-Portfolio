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

// Option 2: Centered with Background Image
export function HeroAlternative2() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Section */}
        <div className="relative mb-12">
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTk0MDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Abdan - UX/UI Designer"
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-background"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-lg text-muted-foreground mb-4">Hi, I'm Abdan</p>
              <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
                Creating digital experiences that <span className="text-muted-foreground">inspire</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a passionate designer with 5+ years of experience crafting beautiful, 
              user-centered digital products. I specialize in creating seamless experiences 
              that bridge creativity and functionality.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button size="lg" className="px-8 rounded-full group">
            Hire Me
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full">
            View Portfolio
          </Button>
        </div>

        {/* Skills & Tools in Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/30 rounded-3xl p-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Tools Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full">
                  <tool.icon className="w-4 h-4 text-muted-foreground" />
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