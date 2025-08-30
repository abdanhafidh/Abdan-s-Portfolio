import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function HireMeCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
            Let’s build something
            <br />
            <span className="text-sage-green">amazing.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
Currently available for exciting projects. Let’s create something great together.
          </p>
        </div>

        {/* Single CTA Button */}
        <div className="mb-12">
          <Button 
            size="lg" 
            className="px-12 py-4 text-lg rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-green hover:opacity-90 border-0"
            asChild
          >
            <a href="mailto:knockmedan@gmail.com">
              Knock Me
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}