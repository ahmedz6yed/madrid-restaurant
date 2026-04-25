import { useEffect, useRef } from 'react';

export function useMobileAutoHover() {
  const elementsRef = useRef(new Set());
  const observerRef = useRef(null);
  const activeElementRef = useRef(null);

  useEffect(() => {
    // We always create the observer so it works if the user dynamically resizes the window.
    // The screen size check will happen inside the observer callback.

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If we are on desktop, don't auto-hover. Just clean up if needed.
          if (window.innerWidth >= 1024) {
            if (activeElementRef.current) {
              activeElementRef.current.removeAttribute('data-mobile-hover');
              activeElementRef.current = null;
            }
            return;
          }

          if (entry.isIntersecting) {
            // Remove active state from the previous element to ensure only 1 is active
            if (activeElementRef.current && activeElementRef.current !== entry.target) {
              activeElementRef.current.removeAttribute('data-mobile-hover');
            }
            
            // Set the new active element
            console.log('Auto-hover activated for:', entry.target.querySelector('h3, h2')?.innerText);
            entry.target.setAttribute('data-mobile-hover', 'true');
            activeElementRef.current = entry.target;
          } else {
            // If the element leaving the center zone is the currently active one, remove the state
            if (activeElementRef.current === entry.target) {
              console.log('Auto-hover deactivated for:', entry.target.querySelector('h3, h2')?.innerText);
              entry.target.removeAttribute('data-mobile-hover');
              activeElementRef.current = null;
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );

    // Observe any elements that have already registered
    elementsRef.current.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Callback ref passed to the components
  const registerNode = (node) => {
    if (node) {
      if (!elementsRef.current.has(node)) {
        elementsRef.current.add(node);
        if (observerRef.current) {
          observerRef.current.observe(node);
        }
      }
    }
  };

  return registerNode;
}
