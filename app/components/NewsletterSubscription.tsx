'use client';

import React, { useState } from 'react';

interface NewsletterSubscriptionProps {
  onSubscribe?: (email: string) => Promise<void>;
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  onSubscribe,
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage(null);
    
    // Validate email
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }
    
    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }
    
    setIsLoading(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setMessage({ type: 'success', text: 'Successfully subscribed! Check your email for confirmation.' });
      setEmail(''); // Clear form on success
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`max-w-md ${className}`}>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          Subscribe to updates
        </h4>
      </div>
      <p className="prose text-sm dark:prose-invert mb-6 leading-relaxed">
        Get email updates when I publish something. No spam. No nonsense.
      </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              aria-label="Email address"
              required
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {message && (
            <div 
              className={`p-4 rounded-lg text-sm ${
                message.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
              }`}
              role="alert"
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
  );
};

export default NewsletterSubscription;
