'use client';

import { motion } from 'motion/react';
import { useRef, useState, useLayoutEffect, useCallback } from 'react';
import React from 'react';

export type TimelineEvent = {
  id: number;
  title: string;
  description: string;
  date?: string;
  side: 'left' | 'right';
  icon?: React.ReactNode;
};

export type TimelineProps = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [points, setPoints] = useState<number[]>([]);

  // measure each card’s vertical center relative to container
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPoints = cardRefs.current.map((card) => {
      if (!card) return 0;
      const rect = card.getBoundingClientRect();
      return rect.top - containerRect.top + rect.height / 2;
    });
    setPoints(newPoints);
  }, [events]);

  return (
    <div ref={containerRef} className="relative w-full">
      {points.length === events.length && <CurvyLine points={points} />}
      <div className="relative z-10 max-w-4xl mx-auto snap-y snap-mandatory h-auto">
        {events.map((event, i) => (
          <TimelineCard
            key={event.id}
            event={event}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>
    </div>
  );
}

function CurvyLine({ points }: { points: number[] }) {
  const controlOffset = 14;

  // build path starting at the first point, then one C‑segment per subsequent point
  const d = (() => {
    if (points.length === 0) return '';
    const [first, ...rest] = points;
    // move to the first anchor
    const move = `M50 ${first}`;
    // draw a cubic curve from each previous point to the next
    const segments = rest
      .map((y, idx) => {
        const prev = idx === 0 ? first : rest[idx - 1];
        const cpY1 = prev + (y - prev) * 0.33;
        const cpY2 = prev + (y - prev) * 0.66;
        // use (idx+1) to decide left/right bend matching event index
        const cpX = 50 + ((idx + 1) % 2 === 0 ? controlOffset : -controlOffset);
        return `C ${cpX} ${cpY1}, ${cpX} ${cpY2}, 50 ${y}`;
      })
      .join(' ');
    return `${move} ${segments}`;
  })();

  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
      width="100%"
      height={points[points.length - 1]}
      viewBox={`0 0 100 ${points[points.length - 1]}`}
      preserveAspectRatio="none"
    >
      <path d={d} stroke="#e0f2fe" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

function TimelineCard({
  event,
  cardRef,
}: {
  event: TimelineEvent;
  index: number;
  cardRef?: React.Ref<HTMLDivElement>;
}) {
  // forward ref for measurement and scrolling
  const handleRef = useCallback((node: HTMLDivElement | null) => {
    if (cardRef && typeof cardRef === 'function') {
      cardRef(node);
    }
  }, [cardRef]);

  const isLeft = event.side === 'left';
  return (
    <motion.div
      ref={handleRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative snap-start my-8 flex ${
        isLeft ? 'justify-start' : 'justify-end'
      } md:flex-row flex-col items-center`}
    >
      {/* Icon on the curve */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-6 h-6 bg-sky-400 rounded-full flex items-center justify-center text-foreground shadow-lg">
        </div>
      </div>

      {/* Card */}
      <div
        className={`p-6 w-full lg:w-96 bg-slate-100 dark:bg-slate-700 text-foreground z-10 rounded-lg shadow-lg ${
          isLeft ? 'md:rotate-2' : 'md:-rotate-2'
        }`}
      >
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="mt-2 text-md text-slate-500">{event.description}</p>
        <p className="mt-2 text-sm">{event.icon}</p> {/* Added icon display */}
        <p className="mt-2 text-sm">{event.date}</p> {/* Added date display */}
      </div>
    </motion.div>
  );
}