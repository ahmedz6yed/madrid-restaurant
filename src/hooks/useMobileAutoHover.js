import { useEffect, useRef } from 'react';

export function useMobileAutoHover() {
  const registeredNodes = useRef(new Set());
  const observerLRef = useRef(null);
  const observerRRef = useRef(null);
  const activeElementRef = useRef(null);

  useEffect(() => {
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth >= 1024) {
          if (activeElementRef.current) {
            activeElementRef.current.removeAttribute('data-mobile-hover');
            activeElementRef.current = null;
          }
          return;
        }

        if (entry.isIntersecting) {
          if (activeElementRef.current && activeElementRef.current !== entry.target) {
            activeElementRef.current.removeAttribute('data-mobile-hover');
          }
          entry.target.setAttribute('data-mobile-hover', 'true');
          activeElementRef.current = entry.target;
        } else {
          if (activeElementRef.current === entry.target) {
            entry.target.removeAttribute('data-mobile-hover');
            activeElementRef.current = null;
          }
        }
      });
    };

    const createObservers = () => {
      observerLRef.current?.disconnect();
      observerRRef.current?.disconnect();

      observerLRef.current = new IntersectionObserver(handleEntries, {
        rootMargin: '-42% 0px -42% 0px',
        threshold: 0,
      });

      observerRRef.current = new IntersectionObserver(handleEntries, {
        rootMargin: '-48% 0px -36% 0px',
        threshold: 0,
      });

      // Re-observe all nodes
      registeredNodes.current.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const isRight = rect.left > window.innerWidth / 2.5;
        if (isRight) {
          observerRRef.current?.observe(node);
        } else {
          observerLRef.current?.observe(node);
        }
      });
    };

    createObservers();

    // Re-calculate columns on resize/orientation change
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(createObservers);
    });
    resizeObserver.observe(document.body);

    return () => {
      observerLRef.current?.disconnect();
      observerRRef.current?.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  const registerNode = (node) => {
    if (!node || registeredNodes.current.has(node)) return;
    registeredNodes.current.add(node);
    
    // Initial observation
    requestAnimationFrame(() => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const isRight = rect.left > window.innerWidth / 2.5;
      if (isRight) {
        observerRRef.current?.observe(node);
      } else {
        observerLRef.current?.observe(node);
      }
    });
  };

  return registerNode;
}
