"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { initEmailJS } from "@/utils/emailjs";
import { ensureContentVisibility } from "@/utils/animation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize AOS with more professional settings
    AOS.init({
      easing: 'ease-out-cubic', // Smooth cubic easing
      duration: 800, // Restore original animation duration
      once: true, // Animations occur only the first time element scrolls into view
      mirror: false, // Elements don't animate out when scrolled past
      offset: 100, // Proper offset for animations
      delay: 50, // Small base delay for smoother appearance
      anchorPlacement: 'top-bottom', // Default anchor placement
      disable: 'mobile', // Disable animations on mobile devices
      startEvent: 'DOMContentLoaded', // When animations should start
      throttleDelay: 99,
    });
    
    // Apply our fallback mechanism to ensure content visibility
    ensureContentVisibility();
    
    // Refresh AOS when window is resized
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    // Initialize EmailJS
    if (typeof window !== 'undefined') {
      initEmailJS();
    }
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return <>{children}</>;
} 