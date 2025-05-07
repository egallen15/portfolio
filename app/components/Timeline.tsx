'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
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
  index,
  cardRef,
}: {
  event: TimelineEvent;
  index: number;
  cardRef?: React.Ref<HTMLDivElement>;
}) {
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  // forward both the inView ref and our measurement ref
  const combinedRef = useCallback(
    (node: HTMLDivElement | null) => {
      inViewRef(node);
      if (typeof cardRef === 'function') {
        cardRef(node);
      } else if (cardRef && 'current' in cardRef) {
        // Only assign non-null DOM nodes to satisfy current's type
        if (node) {
          (cardRef as React.RefObject<HTMLDivElement>).current = node;
        }
      }
    },
    [inViewRef, cardRef]
  );

  const isLeft = event.side === 'left';
  return (
    <motion.div
      ref={combinedRef}
      initial={{ opacity: 0, y: 20 }}       // start 20px below, invisible
      animate={controls}                    // controls will drive us to…
      transition={{ duration: 0.3, ease: 'easeOut' }}
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
        className={`p-6 w-full lg:w-96 bg-background text-foreground z-10 rounded-lg shadow-lg ${
          isLeft ? 'rotate-2' : '-rotate-2'
        }`}
      >
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="mt-2 text-gray-600">{event.description}</p>
        <p className="mt-2 text-gray-500">{event.icon}</p> {/* Added icon display */}
        <p className="mt-2 text-gray-400">Event ID: {event.id}</p> {/* Added event ID display */}
        <p className="mt-2 text-gray-400">Side: {event.side}</p> {/* Added side display */}
        <p className="mt-2 text-gray-400">Index: {index + 1}</p> {/* Added index display */}
      </div>
    </motion.div>
  );
}