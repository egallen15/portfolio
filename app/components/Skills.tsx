"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import HighlightedHeading from "./HighlightedHeading";

type SkillCategory = "design" | "product" | "soft" | "technical";
type ExpertiseLevel = "bronze" | "silver" | "gold" | "diamond";
type ViewMode = "category" | "expertise";

interface Skill {
  name: string;
  category: SkillCategory;
  expertise: ExpertiseLevel;
}

const expertiseOrder: Record<ExpertiseLevel, number> = {
  diamond: 4,
  gold: 3,
  silver: 2,
  bronze: 1,
};

const skills: Skill[] = [
  // Design Skills
  { name: "UX Design", category: "design", expertise: "diamond" },
  { name: "Visual Design (UI)", category: "design", expertise: "gold" },
  { name: "Prototyping", category: "design", expertise: "gold" },
  { name: "Wireframing", category: "design", expertise: "gold" },
  { name: "User journey maps & flows", category: "design", expertise: "gold" },
  { name: "User research", category: "design", expertise: "gold" },
  { name: "Design systems", category: "design", expertise: "gold" },
  { name: "Video editing", category: "design", expertise: "gold" },
  { name: "Photography", category: "design", expertise: "silver" },
  { name: "Video production", category: "design", expertise: "silver" },
  { name: "Accessibility", category: "design", expertise: "gold" },
  { name: "Data visualization", category: "design", expertise: "gold" },
  { name: "Motion design & animation", category: "design", expertise: "gold" },
  { name: "Sketching", category: "design", expertise: "silver" },
  { name: "Information architecture", category: "design", expertise: "gold" },
  { name: "UX Writing", category: "design", expertise: "gold" },
  // Product Skills
  { name: "Product management", category: "product", expertise: "gold" },
  { name: "Strategy", category: "product", expertise: "gold" },
  // Technical Skills
  { name: "Web development", category: "technical", expertise: "gold" },
  { name: "React", category: "technical", expertise: "gold" },
  { name: "TypeScript", category: "technical", expertise: "gold" },
  { name: "HTML/CSS", category: "technical", expertise: "gold" },
  { name: "Next.js", category: "technical", expertise: "gold" },
  { name: "Git", category: "technical", expertise: "gold" },
  { name: "AI", category: "technical", expertise: "gold" },
  { name: "Github Copilot", category: "technical", expertise: "gold" },
  // Soft Skills
  { name: "Listening", category: "soft", expertise: "gold" },
  { name: "Leadership", category: "soft", expertise: "gold" },
  { name: "Writing", category: "soft", expertise: "gold" },
  { name: "Empathy", category: "soft", expertise: "gold" },
];

const categoryStyles = {
  design: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
  product: "bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200",
  soft: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  technical: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
};

const expertiseStyles = {
  diamond: "bg-gradient-to-br from-cyan-200 via-blue-300 to-cyan-200 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 text-cyan-900 dark:text-cyan-950 ring-2 ring-inset ring-cyan-400 dark:ring-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.6)] dark:shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse",
  gold: "bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-300 dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-400 text-amber-900 dark:text-amber-950 ring-2 ring-inset ring-amber-500 dark:ring-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] dark:shadow-[0_0_18px_rgba(251,191,36,0.8)]",
  silver: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 dark:from-slate-300 dark:via-slate-400 dark:to-slate-300 text-slate-900 dark:text-slate-950 ring-2 ring-inset ring-slate-400 dark:ring-slate-300 shadow-[0_0_10px_rgba(148,163,184,0.5)] dark:shadow-[0_0_15px_rgba(148,163,184,0.7)]",
  bronze: "bg-gradient-to-br from-orange-300 to-orange-400 dark:from-orange-600 dark:to-orange-700 text-orange-950 dark:text-orange-100 ring-2 ring-inset ring-orange-500 dark:ring-orange-600 opacity-80",
};

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<SkillCategory>>(
    new Set()
  );
  const [visibleExpertise, setVisibleExpertise] = useState<Set<ExpertiseLevel>>(
    new Set()
  );
  const [viewMode, setViewMode] = useState<ViewMode>("category");

  const toggleCategory = (category: SkillCategory) => {
    setVisibleCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        // If clicking the only selected category, clear all (show all)
        if (newSet.size === 1) {
          return new Set();
        }
        newSet.delete(category);
      } else {
        // If nothing selected, just add this one
        if (prev.size === 0) {
          return new Set([category]);
        }
        // Otherwise just add it (allow all 4 to be selected)
        newSet.add(category);
      }
      return newSet;
    });
  };

  const toggleExpertise = (expertise: ExpertiseLevel) => {
    setVisibleExpertise((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(expertise)) {
        // If clicking the only selected expertise, clear all (show all)
        if (newSet.size === 1) {
          return new Set();
        }
        newSet.delete(expertise);
      } else {
        // If nothing selected, just add this one
        if (prev.size === 0) {
          return new Set([expertise]);
        }
        // Otherwise just add it (allow all to be selected)
        newSet.add(expertise);
      }
      return newSet;
    });
  };

  const resetCategories = () => {
    setVisibleCategories(new Set());
  };

  const resetExpertise = () => {
    setVisibleExpertise(new Set());
  };

  // Show all if nothing selected, otherwise show only selected
  const isCategoryVisible = (category: SkillCategory) => {
    if (visibleCategories.size === 0) return true;
    return visibleCategories.has(category);
  };

  const isExpertiseVisible = (expertise: ExpertiseLevel) => {
    if (visibleExpertise.size === 0) return true;
    return visibleExpertise.has(expertise);
  };

  // Category is "selected" (bolded) only if it's in the set and not all are selected
  const isCategorySelected = (category: SkillCategory) => {
    return visibleCategories.size > 0 && visibleCategories.has(category);
  };

  const isExpertiseSelected = (expertise: ExpertiseLevel) => {
    return visibleExpertise.size > 0 && visibleExpertise.has(expertise);
  };

  return (
    <motion.section className="w-full lg:w-1/2 mt-12 lg:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <HighlightedHeading
            highlightColor="pink"
            highlightStyle="underline"
            skewAngle="light"
            as="h3"
            className="mb-0"
          >
            Skills
          </HighlightedHeading>
          
          {/* View Mode Toggle */}
          <button
            onClick={() => setViewMode(viewMode === "category" ? "expertise" : "category")}
            className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            View by {viewMode === "category" ? "expertise" : "category"}
          </button>
        </div>
        
        {/* Legend */}
        <div className="mb-6 flex flex-wrap gap-4 text-sm items-center">
          {viewMode === "category" ? (
            <>
              <button
                onClick={() => toggleCategory("design")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle design skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-indigo-200 dark:bg-indigo-400 transition-all ${
                    isCategorySelected("design") ? "opacity-100 scale-110" : "opacity-100"
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isCategorySelected("design") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Design
                </span>
              </button>
              <button
                onClick={() => toggleCategory("product")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle product skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-yellow-200 dark:bg-yellow-400 transition-all ${
                    isCategorySelected("product") ? "opacity-100 scale-110" : "opacity-100"
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isCategorySelected("product") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Product
                </span>
              </button>
              <button
                onClick={() => toggleCategory("technical")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle technical skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-emerald-200 dark:bg-emerald-400 transition-all ${
                    isCategorySelected("technical") ? "opacity-100 scale-110" : "opacity-100"
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isCategorySelected("technical") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Technical
                </span>
              </button>
              <button
                onClick={() => toggleCategory("soft")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle soft skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-pink-200 dark:bg-pink-400 transition-all ${
                    isCategorySelected("soft") ? "opacity-100 scale-110" : "opacity-100"
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isCategorySelected("soft") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Soft skills
                </span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => toggleExpertise("diamond")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle diamond expertise skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-cyan-400 border border-cyan-500 transition-all ${
                    isExpertiseSelected("diamond") ? "scale-110" : ""
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isExpertiseSelected("diamond") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Diamond
                </span>
              </button>
              <button
                onClick={() => toggleExpertise("gold")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle gold expertise skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-amber-400 border border-amber-500 transition-all ${
                    isExpertiseSelected("gold") ? "scale-110" : ""
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isExpertiseSelected("gold") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Gold
                </span>
              </button>
              <button
                onClick={() => toggleExpertise("silver")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle silver expertise skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-gray-400 border border-gray-500 transition-all ${
                    isExpertiseSelected("silver") ? "scale-110" : ""
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isExpertiseSelected("silver") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Silver
                </span>
              </button>
              <button
                onClick={() => toggleExpertise("bronze")}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Toggle bronze expertise skills"
              >
                <div 
                  className={`w-3 h-3 rounded-full bg-orange-400 border border-orange-500 transition-all ${
                    isExpertiseSelected("bronze") ? "scale-110" : ""
                  }`}
                ></div>
                <span 
                  className={` dark:text-gray-400 transition-all ${
                    isExpertiseSelected("bronze") ? "font-bold text-gray-900 dark:text-gray-100" : ""
                  }`}
                >
                  Bronze
                </span>
              </button>
            </>
          )}
          
          {/* Reset Button - appears when filters are active */}
          {((viewMode === "category" && visibleCategories.size > 0) || 
            (viewMode === "expertise" && visibleExpertise.size > 0)) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={viewMode === "category" ? resetCategories : resetExpertise}
              className="ml-auto pl-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 underline transition-colors"
              aria-label="Reset skill filters"
            >
              Reset
            </motion.button>
          )}
        </div>

        {/* All Skills */}
        <div className="flex flex-wrap gap-3">
          <AnimatePresence mode="sync">
            {skills
              .filter((skill) => {
                // Filter based on current view mode
                if (viewMode === "category") {
                  return isCategoryVisible(skill.category);
                } else {
                  return isExpertiseVisible(skill.expertise);
                }
              })
              .sort((a, b) => {
                if (viewMode === "expertise") {
                  // Sort by expertise level (highest first)
                  return expertiseOrder[b.expertise] - expertiseOrder[a.expertise];
                }
                // Keep original order for category view
                return 0;
              })
              .map((skill) => (
                <motion.span
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.15,
                    layout: { duration: 0.2 }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    viewMode === "expertise" 
                      ? expertiseStyles[skill.expertise]
                      : categoryStyles[skill.category]
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}
