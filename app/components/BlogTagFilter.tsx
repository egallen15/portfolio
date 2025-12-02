"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as motion from "motion/react-client";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import type { BlogPost } from "../types/blog";

interface BlogTagFilterProps {
  posts: BlogPost[];
  onFilterChange: (filteredPosts: BlogPost[]) => void;
}

const tagDotColors: Record<string, string> = {
  AI: "bg-purple-400 dark:bg-purple-500",
  Productivity: "bg-blue-400 dark:bg-blue-500",
  Guides: "bg-emerald-400 dark:bg-emerald-500",
  Guide: "bg-emerald-400 dark:bg-emerald-500",
  Games: "bg-orange-400 dark:bg-orange-500",
  Design: "bg-pink-400 dark:bg-pink-500",
  Example: "bg-gray-400 dark:bg-gray-500",
};

export default function BlogTagFilter({ posts, onFilterChange }: BlogTagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Initialize selected tags from URL on mount
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam && allTags.includes(tagParam)) {
      setSelectedTags(new Set([tagParam]));
      const filtered = posts.filter(post => 
        post.tags?.includes(tagParam)
      );
      onFilterChange(filtered);
    }
  }, [searchParams, allTags, posts, onFilterChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        // If clicking the only selected tag, clear all (show all)
        if (newSet.size === 1) {
          onFilterChange(posts);
          router.push('/blog');
          return new Set();
        }
        newSet.delete(tag);
      } else {
        // If nothing selected, just add this one
        if (prev.size === 0) {
          newSet.add(tag);
        } else {
          // Otherwise just add it
          newSet.add(tag);
        }
      }
      
      // Update URL with selected tags
      if (newSet.size === 0) {
        router.push('/blog');
        onFilterChange(posts);
      } else if (newSet.size === 1) {
        // For single tag, use cleaner URL format
        const singleTag = Array.from(newSet)[0];
        router.push(`/blog?tag=${encodeURIComponent(singleTag)}`);
        const filtered = posts.filter(post => 
          post.tags?.includes(singleTag)
        );
        onFilterChange(filtered);
      } else {
        // For multiple tags
        const filtered = posts.filter(post => 
          post.tags?.some(postTag => newSet.has(postTag))
        );
        onFilterChange(filtered);
      }
      
      return newSet;
    });
  };

  const resetTags = () => {
    setSelectedTags(new Set());
    onFilterChange(posts);
    router.push('/blog');
  };

  const isTagSelected = (tag: string) => {
    return selectedTags.size > 0 && selectedTags.has(tag);
  };

  if (allTags.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          Tags
        </h2> */}
        
        {selectedTags.size > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            onClick={resetTags}
            className="text-sm px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap flex items-center gap-1.5"
            aria-label="Reset tag filters"
          >
            <ArrowPathIcon className="w-4 h-4" />
            Reset
          </motion.button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            aria-label={`Toggle ${tag} posts`}
          >
            <div 
              className={`w-3 h-3 rounded-full transition-all ${
                tagDotColors[tag] || "bg-gray-400 dark:bg-gray-500"
              } ${
                isTagSelected(tag) ? "scale-110 ring-1 ring-offset-2 ring-current" : ""
              }`}
            ></div>
            <span 
              className={`text-sm transition-all ${
                isTagSelected(tag) 
                  ? "font-bold text-gray-900 dark:text-gray-100" 
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {tag}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
