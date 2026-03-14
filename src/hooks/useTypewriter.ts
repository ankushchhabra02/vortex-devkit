import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
}

/**
 * A hook to simulate a typewriter effect, useful for AI chat applications.
 * 
 * @param text - The full text to type out.
 * @param options - Configure typing speed (ms) and initial delay (ms).
 * @returns The currently revealed portion of the text.
 */
export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 30, delay = 0 } = options;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on new text

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let currentIndex = 0;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return displayedText;
}
