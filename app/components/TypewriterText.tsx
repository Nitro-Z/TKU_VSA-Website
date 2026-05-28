'use client';
import { useState, useEffect } from 'react';

export default function TypewriterText({
  text,
  className,
  speed = 35,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  // Reset khi text thay đổi (đổi ngôn ngữ)
  useEffect(() => {
    setDisplayed('');
    setStarted(false);
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [text, startDelay]);

  useEffect(() => {
    if (!started || displayed.length >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, text, started, speed]);

  const done = displayed.length >= text.length;

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="inline-block w-0.5 h-[1em] bg-current align-middle ml-0.5 animate-pulse" />
      )}
    </span>
  );
}
