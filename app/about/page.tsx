import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "about",
  description: "Learn more about Eric Allen, his background, and his design journey.",
};

const About = () => {
  return <AboutPageClient />;
};

export default About;
