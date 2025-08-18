import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import * as motion from "motion/react-client";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Eric Allen",
};

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <main className="mx-6 max-w-7xl flex flex-col backdrop-blur-sm rounded-md">
        <Breadcrumb pages={[{ name: "Contact", href: "/contact", current: true }]} />
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Let&apos;s connect!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="py-6 md:py-8"
        >
          <p className="text-md max-w-3xl mb-6">
            I&#39;d love to hear from you! Whether you have a project in mind, want to collaborate, 
            or just want to say hello, feel free to reach out.
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="font-medium text-gray-900 dark:text-gray-100">Email:</span>
              <a 
                href="mailto:eric@ericallen.me" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                eric@ericallen.me
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="font-medium text-gray-900 dark:text-gray-100">LinkedIn:</span>
              <a 
                href="https://linkedin.com/in/ericallentx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/ericallentx
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
