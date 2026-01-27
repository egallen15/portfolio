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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, allTags, posts]);

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
      className=""
    >
      <div className="flex flex-wrap items-center gap-2">
        {allTags.map((tag, index) => (
          <span key={tag} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                •
              </span>
            )}
            <button
              onClick={() => toggleTag(tag)}
              className={`text-xs uppercase tracking-widest transition-all ${
                isTagSelected(tag)
                  ? "font-bold text-gray-900 dark:text-gray-100 underline"
                  : "text-slate-500 dark:text-slate-400 hover:underline"
              }`}
              aria-label={`Toggle ${tag} posts`}
            >
              {tag}
            </button>
          </span>
        ))}
        
        <motion.button
          initial={false}
          animate={{ 
            opacity: selectedTags.size > 0 ? 1 : 0,
            scale: selectedTags.size > 0 ? 1 : 0.95
          }}
          onClick={resetTags}
          className={`ml-auto text-sm px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            selectedTags.size === 0 ? 'invisible pointer-events-none' : ''
          }`}
          aria-label="Reset tag filters"
          aria-hidden={selectedTags.size === 0}
        >
          <ArrowPathIcon className="w-4 h-4" />
          Reset
        </motion.button>
      </div>
    </motion.div>
  );
}
