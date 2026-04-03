import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

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
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
