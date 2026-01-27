"use client";

import type { FC } from "react";
import Link from "next/link";
import NewsletterSubscription from "./NewsletterSubscription";

const navigation = {
  main: [
    { name: "About me", href: "/about" },
    { name: "CV/experience", href: "/experience" },
    { name: "My stack", href: "/my-stack" },
    { name: "My portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  projects: [
    { name: "Project 1", href: "/blog" },
    { name: "WorkLog", href: "/about" },
    { name: "Maelstorm", href: "/maelstorm" },
  ],
  writing: [
    { name: "Blog", href: "/blog" },
    { name: "UX Flow", href: "/book" },
    { name: "UX Codex", href: "/ux-codex" },
    { name: "Videos", href: "/videos" },
  ],
  social: [
    {
      name: "X",
      href: "https://x.com/ericallenux",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ericallen5/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/egallen15",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer: FC = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto mb-6 px-6 xl:px-0 md:pt-8">
        <hr className="mb-6 border-slate-200 dark:border-slate-700 sm:mx-auto lg:my-8" />

        {/* Main Footer Content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-8">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 md:mb-4">
                about
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 md:mb-4">
                writing & more
              </h3>
              <ul className="space-y-3">
                {navigation.writing.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 md:mb-4">
                projects
              </h3>
              <ul className="space-y-3">
                {navigation.projects.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-10 xl:mt-0">
            <NewsletterSubscription />
          </div>
        </div>
        
        {/* Bottom Section - Social Links and Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Social Links */}
            <div className="flex gap-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full bg-slate-300/30 dark:bg-slate-400/30 backdrop-blur-sm hover:bg-gradient-to-tr hover:from-slate-300/30 hover:to-sky-300/30 dark:hover:bg-gradient-to-tr dark:hover:from-slate-400/30 dark:hover:to-sky-700 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Copyright with Lawnmower */}
            <div className="relative group w-full mt-6 md:mt-0 md:w-auto md:order-1">
              <button
                className="inline-block hover:animate-lawnmower active:animate-lawnmower hover:text-green-500 hover:neon text-slate-500 mr-1 absolute transition-transform duration-1000 z-10"
                style={{ left: 0 }}
              >
                \.=.
              </button>
              <span className="inline-block text-sm ml-7 text-slate-500">
                © {new Date().getFullYear()}{" "}
                <Link
                  href="https://ericallenux.com"
                  className="hover:underline"
                >
                  Eric Allen UX
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
