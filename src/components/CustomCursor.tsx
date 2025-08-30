'use client';

import { useState, useEffect } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(false);
      }
    };

    const isInteractiveElement = (element: HTMLElement): boolean => {
      return (
        element.tagName.toLowerCase() === 'a' ||
        element.tagName.toLowerCase() === 'button' ||
        element.getAttribute('role') === 'button' ||
        element.type === 'submit' ||
        element.type === 'button' ||
        !!element.closest('a') ||
        !!element.closest('button') ||
        !!element.closest('[role="button"]')
      );
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-3 h-3 bg-foreground rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed w-8 h-8 border border-foreground/30 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.8 : 0.3,
        }}
      />
    </>
  );
}