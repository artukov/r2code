"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { initEmailJS } from "@/utils/emailjs";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize AOS with more professional settings
    AOS.init({
      easing: 'ease-out-cubic', // Smooth cubic easing
      duration: 800,
      once: false, // Animations occur every time element scrolls into view
      mirror: true, // Whether elements should animate out when scrolled past
      offset: 100,
      delay: 50,
      anchorPlacement: 'top-bottom', // Default anchor placement
      disable: 'mobile', // Disable animations on mobile devices
      startEvent: 'DOMContentLoaded', // When animations should start
    });
    
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