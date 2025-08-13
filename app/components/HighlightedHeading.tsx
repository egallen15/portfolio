'use client';

import React from 'react';

export type HighlightColor = 'cyan' | 'pink' | 'green' | 'yellow' | 'purple';
export type HighlightStyle = 'full' | 'underline';
export type SkewAngle = 'light' | 'medium' | 'heavy';

interface HighlightedHeadingProps {
  children: React.ReactNode;
  highlightColor?: HighlightColor;
  highlightStyle?: HighlightStyle;
  skewAngle?: SkewAngle;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const colorMap: Record<HighlightColor, string> = {
  cyan: 'from-cyan-300/60 to-cyan-200/50',
  pink: 'from-pink-300/60 to-pink-200/50', 
  green: 'from-green-300/60 to-green-200/50',
  yellow: 'from-yellow-300/60 to-yellow-200/50',
  purple: 'from-purple-300/60 to-purple-200/50',
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
}) => {
  const gradientClass = colorMap[highlightColor];
  const skewClass = skewMap[skewAngle];
  
  const baseHighlightClasses = `
    bg-gradient-to-r ${gradientClass}
    ${skewClass}
  `;

  const fullHighlightClasses = `
    ${baseHighlightClasses}
    px-2 mx-1 py-1 rounded-lg
    backdrop-blur-sm h-6 -left-2 top-1 right-0
  `;

  const underlineHighlightClasses = `
    ${baseHighlightClasses}
    h-3 -mx-1 top-5 left-0 right-0
    rounded-full
  `;

  return (
    <Component className={`text-2xl font-bold relative inline-block ${className}`}>
      <span className="relative z-10">
        {children}
      </span>
      {highlightStyle === 'full' ? (
        <span 
          className={`absolute inset-0 ${fullHighlightClasses} -z-10`}
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
