// src/hooks/useTypewriter.ts
import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayText(''); // Clear before typing

    const type = () => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    // Clean up on unmount or when text changes
    return () => {
      setDisplayText('');
    };
  }, [text, speed]);

  return displayText;
}
