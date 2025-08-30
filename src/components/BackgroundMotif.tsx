import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function BackgroundMotif() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Different parallax speeds for various elements
  const y1 = useTransform(scrollY, [0, windowHeight * 2], [0, -100]);
  const y2 = useTransform(scrollY, [0, windowHeight * 2], [0, -200]);
  const y3 = useTransform(scrollY, [0, windowHeight * 2], [0, -150]);
  const y4 = useTransform(scrollY, [0, windowHeight * 2], [0, -80]);
  const rotate1 = useTransform(scrollY, [0, windowHeight * 2], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, windowHeight * 2], [0, -30]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-green-background/10 to-green-background/20" />
      
      {/* Grid pattern with green tint */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--hunter-green) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating geometric shapes with green colors */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-[10%] w-32 h-32 rounded-full border border-dark-forest/5 bg-gradient-to-br from-dark-forest/4 to-transparent"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-[15%] w-24 h-24 rounded-xl border border-hunter-green/8 bg-gradient-to-tr from-hunter-green/5 to-transparent"
      />
      
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[60%] left-[5%] w-20 h-20 rounded-full border border-pine-green/10 bg-gradient-to-bl from-pine-green/6 to-transparent"
      />
      
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[30%] right-[8%] w-16 h-16 rounded-lg border border-sage-green/6 bg-gradient-to-tl from-sage-green/4 to-transparent"
      />
      
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-40 left-[20%] w-28 h-28 rounded-full border border-moss-green/8 bg-gradient-to-r from-moss-green/5 to-transparent"
      />
      
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute bottom-20 right-[25%] w-36 h-36 rounded-2xl border border-olive-green/6 bg-gradient-to-br from-olive-green/3 to-transparent"
      />

      {/* Additional smaller elements with green tints */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[80%] left-[40%] w-12 h-12 rounded-full border border-forest-shadow/8 bg-forest-shadow/4"
      />
      
      <motion.div
        style={{ y: y4, rotate: rotate2 }}
        className="absolute top-[15%] left-[60%] w-8 h-8 rounded-md border border-hunter-green/10 bg-hunter-green/6"
      />
      
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-60 right-[40%] w-14 h-14 rounded-xl border border-pine-green/9 bg-pine-green/5"
      />

      {/* Floating dots with green variations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            y: useTransform(scrollY, [0, windowHeight * 2], [0, -60 - i * 20]),
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
          }}
          className={`absolute w-2 h-2 rounded-full ${
            i % 4 === 0 ? 'bg-dark-forest/8' :
            i % 4 === 1 ? 'bg-hunter-green/8' :
            i % 4 === 2 ? 'bg-sage-green/8' :
            'bg-moss-green/8'
          }`}
        />
      ))}

      {/* Subtle animated lines with green gradients */}
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute top-32 left-[70%] w-px h-24 bg-gradient-to-b from-transparent via-hunter-green/6 to-transparent"
      />
      
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute bottom-32 left-[30%] w-px h-32 bg-gradient-to-t from-transparent via-pine-green/9 to-transparent"
      />
      
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[50%] right-[50%] w-20 h-px bg-gradient-to-r from-transparent via-sage-green/8 to-transparent"
      />

      {/* Additional organic shapes for forest feel */}
      <motion.div
        style={{ y: y1, rotate: rotate2 }}
        className="absolute top-[25%] left-[80%] w-18 h-18 rounded-full border border-forest-mist/5 bg-gradient-to-tl from-forest-mist/3 to-transparent"
      />

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[15%] left-[65%] w-22 h-22 rounded-2xl border border-olive-green/4 bg-gradient-to-br from-olive-green/2 to-transparent"
      />

      {/* Subtle leaf-like elements */}
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute top-[45%] left-[25%] w-6 h-12 rounded-full border border-moss-green/6 bg-gradient-to-b from-moss-green/4 to-transparent transform rotate-45"
      />

      <motion.div
        style={{ y: y4, rotate: rotate2 }}
        className="absolute bottom-[35%] right-[60%] w-8 h-16 rounded-full border border-sage-green/5 bg-gradient-to-t from-sage-green/3 to-transparent transform -rotate-30"
      />
    </div>
  );
}