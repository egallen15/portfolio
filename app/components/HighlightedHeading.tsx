'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export type HighlightColor = 'cyan' | 'pink' | 'green' | 'yellow' | 'purple';
export type HighlightStyle = 'full' | 'underline' | 'skinny';
export type SkewAngle = 'light' | 'medium' | 'heavy';

interface HighlightedHeadingProps {
  children: React.ReactNode;
  highlightColor?: HighlightColor;
  highlightStyle?: HighlightStyle;
  skewAngle?: SkewAngle;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  href?: string;
}

const colorMap: Record<HighlightColor, string> = {
    cyan: 'from-cyan-300/60 to-cyan-200/50 dark:from-cyan-500/40 dark:to-cyan-600/30',
    pink: 'from-pink-300/60 to-pink-200/50 dark:from-pink-500/40 dark:to-pink-600/30', 
    green: 'from-green-300/60 to-green-200/50 dark:from-green-500/40 dark:to-green-600/30',
    yellow: 'from-yellow-300/60 to-yellow-200/50 dark:from-yellow-500/40 dark:to-yellow-600/30',
    purple: 'from-purple-300/60 to-purple-200/50 dark:from-purple-500/40 dark:to-purple-600/30',
};

const hoverColorMap: Record<HighlightColor, string> = {
  cyan: 'group-hover:from-cyan-400/70 group-hover:to-cyan-300/60 dark:group-hover:from-cyan-600/50 dark:group-hover:to-cyan-700/40',
  pink: 'group-hover:from-pink-400/70 group-hover:to-pink-300/60 dark:group-hover:from-pink-600/50 dark:group-hover:to-pink-700/40',
  green: 'group-hover:from-green-400/70 group-hover:to-green-300/60 dark:group-hover:from-green-600/50 dark:group-hover:to-green-700/40',
  yellow: 'group-hover:from-yellow-400/70 group-hover:to-yellow-300/60 dark:group-hover:from-yellow-600/50 dark:group-hover:to-yellow-700/40',
  purple: 'group-hover:from-purple-400/70 group-hover:to-purple-300/60 dark:group-hover:from-purple-600/50 dark:group-hover:to-purple-700/40',
};

const skewMap: Record<SkewAngle, string> = {
  light: '-skew-x-3 -skew-y-1',
  medium: '-skew-x-7 -skew-y-2', 
  heavy: '-skew-x-20 -skew-y-5',
};

const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
  children,
  highlightColor = 'cyan',
  highlightStyle = 'full',
  skewAngle = 'medium',
  className = '',
  as: Component = 'h3',
  href,
}) => {
  const gradientClass = colorMap[highlightColor];
  const hoverGradientClass = href ? hoverColorMap[highlightColor] : '';
  const skewClass = skewMap[skewAngle];
  
  const baseHighlightClasses = `
    bg-gradient-to-r ${gradientClass}
    ${skewClass}
    ${hoverGradientClass}
    transition-colors duration-200
  `;

  const fullHighlightClasses = `
    ${baseHighlightClasses}
    px-2 -my-1 mx-1 py-1 rounded-lg
    backdrop-blur-sm h-8 -left-2.5 top-1 -right-4
  `;

  const skinnyHighlightClasses = `
    ${baseHighlightClasses}
    px-1 -my-0.5 mx-0.5 py-0.5 rounded-md
    backdrop-blur-sm h-4 -left-1.5 top-1 -right-2
  `;

  const underlineHighlightClasses = `
    ${baseHighlightClasses}
    h-3 -mx-1 top-5 left-0 right-0
    rounded-full
  `;

  const content = href ? (
    <Link
      href={href}
      className="relative z-10 inline-flex items-center gap-1 transition-transform duration-200"
    >
      <span>{children}</span>
      <ChevronRightIcon className="w-6 h-6 translate-y-px opacity-80 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  ) : (
    <span className="relative z-10">
      {children}
    </span>
  );

  return (
    <Component
      className={`text-2xl font-bold relative inline-block ${href ? 'group transition-transform duration-200 hover:-rotate-2' : ''} ${className}`}
    >
      {content}
      {highlightStyle === 'full' ? (
        <span 
          className={`absolute inset-0 ${fullHighlightClasses} -z-10`}
        />
      ) : highlightStyle === 'skinny' ? (
        <span 
          className={`absolute inset-0 ${skinnyHighlightClasses} -z-10`}
        />
      ) : (
        <span 
          className={`absolute ${underlineHighlightClasses} -z-10`}
        />
      )}
    </Component>
  );
};

export default HighlightedHeading;
