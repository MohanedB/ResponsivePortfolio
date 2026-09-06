import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const preference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (preference?.matches || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(current);
    const showWithoutMotion = () => {
      if (preference.matches) {
        setIsVisible(true);
        observer.disconnect();
      }
    };
    preference?.addEventListener?.('change', showWithoutMotion);
    return () => {
      observer.disconnect();
      preference?.removeEventListener?.('change', showWithoutMotion);
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
