import ProjectGrid, { ProjectGridItem } from "../components/ProjectGrid";
import HighlightedHeading from "../components/HighlightedHeading";
import Breadcrumb from "../components/Breadcrumb";

export default function StackPage() {
  const designTools: ProjectGridItem[] = [
    {
      id: "figma",
      href: "https://figma.com",
      title: "Figma",
      description:
        "My primary design tool for UI/UX design, prototyping, and collaboration.",
      image: "/images/logo.png", // Replace with actual logo path
    },
    {
      id: "sketch",
      href: "https://sketch.com",
      title: "Sketch",
      description:
        "Vector design tool for creating interfaces and digital products.",
      image: "/images/logo.png", // Replace with actual logo path
    },
  ];

  const codingTools: ProjectGridItem[] = [
    {
      id: "vscode",
      href: "https://code.visualstudio.com",
      title: "VS Code",
      description:
        "My code editor of choice with powerful extensions and customization.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
    {
      id: "nextjs",
      href: "https://nextjs.org",
      title: "Next.js",
      description:
        "React framework for building fast, scalable web applications.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
    {
      id: "typescript",
      href: "https://typescriptlang.org",
      title: "TypeScript",
      description:
        "Strongly typed programming language that builds on JavaScript.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
  ];

  const productivityTools: ProjectGridItem[] = [
    {
      id: "notion",
      href: "https://notion.so",
      title: "Notion",
      description:
        "All-in-one workspace for notes, docs, and project management.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
    {
      id: "linear",
      href: "https://linear.app",
      title: "Linear",
      description: "Issue tracking tool built for high-performance teams.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
  ];

  const workstationTools: ProjectGridItem[] = [
    {
      id: "macbook",
      href: "https://apple.com",
      title: "MacBook Pro",
      description: "M2 Max, 32GB RAM - My primary development machine.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
    {
      id: "monitor",
      href: "https://example.com",
      title: "Studio Display",
      description:
        "5K Retina display for crisp visuals and extra screen real estate.",
      logo: "/images/logo.png", // Replace with actual logo path
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="w-full max-w-7xl mx-6 xl:mx-0">
              <Breadcrumb
                pages={[{ name: "My stack", href: "/my-stack", current: true }]}
              />
            </div>
      <div className="max-w-7xl mx-6 xl:mx-0">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white mb-4">
            My stack
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tools and technologies I use to build amazing things.
          </p>
        </div>

        {/* Design Section */}
        <section className="mb-8">
          <div className="mb-8">
            <HighlightedHeading
              highlightColor="pink"
              highlightStyle="underline"
              skewAngle="medium"
              as="h3"
            >
              Design
            </HighlightedHeading>
          </div>
          <ProjectGrid items={designTools} columns={3} />
        </section>

        {/* Coding Section */}
        <section className="mb-8">
          <div className="mb-8">
            <HighlightedHeading
              highlightColor="cyan"
              highlightStyle="underline"
              skewAngle="heavy"
              as="h3"
            >
              Coding
            </HighlightedHeading>
          </div>
          <ProjectGrid items={codingTools} columns={3} />
        </section>

        {/* Productivity Section */}
        <section className="mb-8">
          <div className="mb-8">
            <HighlightedHeading
              highlightColor="green"
              highlightStyle="underline"
              skewAngle="light"
              as="h3"
            >
              Productivity
            </HighlightedHeading>
          </div>
          <ProjectGrid items={productivityTools} columns={3} />
        </section>

        {/* Workstation Section */}
        <section className="mb-8">
          <div className="mb-8">
            <HighlightedHeading
              highlightColor="purple"
              highlightStyle="underline"
              skewAngle="medium"
              as="h3"
            >
              Workstation
            </HighlightedHeading>
          </div>
          <ProjectGrid items={workstationTools} columns={3} />
        </section>
      </div>
    </div>
  );
}
