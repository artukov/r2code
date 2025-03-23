/**
 * Animation utility functions to ensure content visibility
 * and handle edge cases for AOS animations
 */

// Add interface for window with AOS
declare global {
  interface Window {
    AOS?: {
      refresh: () => void;
    };
    scrollTimeout?: ReturnType<typeof setTimeout>;
  }
}

/**
 * Ensures animations work properly but content becomes visible
 * even if animations fail or user scrolls quickly
 */
export const ensureContentVisibility = () => {
  // Create a fallback function that only makes content visible if animations haven't worked
  const ensureFallbackVisibility = () => {
    // Only target elements that haven't received the aos-animate class yet
    const nonAnimatedElements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
    
    if (nonAnimatedElements.length > 0) {
      console.log('Ensuring visibility for', nonAnimatedElements.length, 'elements that failed to animate');
      
      nonAnimatedElements.forEach(el => {
        // Check if element is in viewport and should be visible
        const rect = el.getBoundingClientRect();
        const isInViewport = (
          rect.top <= window.innerHeight &&
          rect.bottom >= 0
        );
        
        // Only make elements visible if they should be seen
        if (isInViewport) {
          el.classList.add('aos-animate');
        }
      });
    }
  };
  
  // Let animations happen naturally first
  setTimeout(() => {
    // Attempt to refresh AOS to trigger any pending animations
    if (typeof window !== 'undefined' && window.AOS) {
      try {
        window.AOS.refresh();
      } catch (e) {
        console.error('Error refreshing AOS:', e);
      }
    }
  }, 300);
  
  // Then check for any elements that failed to animate
  setTimeout(ensureFallbackVisibility, 1000);
  
  // Final fallback for slow-loading pages
  setTimeout(ensureFallbackVisibility, 2500);
  
  // Add scroll handler to ensure elements become visible when scrolled to
  window.addEventListener('scroll', () => {
    // Debounce the scroll handler for performance
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(ensureFallbackVisibility, 200);
  }, { passive: true });
}; 