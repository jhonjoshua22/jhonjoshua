import { useEffect, useRef, useState } from 'react';

interface TypingProps {
  className?: string;
}

export default function Typing({ className }: TypingProps) {
  const fullText = `I design, create, and transform — not just websites, but every idea that sparks my curiosity. When I'm not coding beautiful, responsive sites, you'll find me gaming, sketching, exploring new places, or chasing after good food (and occasionally my cat). I believe great design combines creativity, functionality, and a bit of fun. 

Let’s build something amazing together.`;

  const [displayedText, setDisplayedText] = useState('');
  const [typingStarted, setTypingStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 30;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !typingStarted) {
          setTypingStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [typingStarted]);

  useEffect(() => {
    if (!typingStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText[index] === '\n' ? '<br>' : fullText[index];
        setDisplayedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [typingStarted, fullText]);

  return (
    <div
      ref={containerRef}
      id="mission-text"
      className={className}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
}
