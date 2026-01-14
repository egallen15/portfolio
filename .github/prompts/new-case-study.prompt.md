# Case Study Generation Prompt

You are writing a **portfolio case study** for a shipped digital product or system.
The audience is hiring managers, designers, and engineers.
Tone should be **clear, confident, and outcome-focused**, not marketing fluff.

## Pre-Generation Interview

**BEFORE generating the case study, interview the user to gather essential details.**

Ask these questions sequentially, allowing the user to provide context:

### Project Basics
1. **What is the project name/title?** (This will become the slug and page title)
2. **What is a one-sentence description?** (For the portfolio listing page)
3. **What was your role on this project?** (e.g., Lead Developer, Full-Stack Engineer, Solutions Architect)
4. **What was the timeline?** (e.g., "6 months", "Q3 2024 - Q1 2025")

### Problem & Context
5. **What problem were you solving? Who was affected?**
6. **What made this problem hard?** (constraints: time, scale, compliance, legacy systems, team dynamics, etc.)
7. **What was at stake if you didn't solve it?** (business risk, user pain, technical debt, opportunity cost)

### Research & Validation
8. **How did you validate the problem?** (user interviews, analytics, support tickets, stakeholder feedback)
9. **What was the key insight or data point that shaped your approach?**

### Solution & Approach
10. **What did you build? Describe the solution at a high level.**
11. **What were the 3 most important features or capabilities?**
12. **What technology stack did you use and why?** (focus on key architectural decisions)
13. **What tradeoffs did you make?** (what you chose NOT to do and why)

### Impact & Results
14. **What were the measurable outcomes?** (metrics, adoption, performance, time saved, revenue impact)
15. **What qualitative feedback did you receive?** (user reactions, stakeholder responses)
16. **What would you do differently next time?**

### Technical Details
17. **Any standout technical challenges or innovations worth highlighting?**
18. **How did you mitigate risk?** (testing strategy, rollout plan, monitoring, fallbacks)

### Collaboration
19. **Who did you work with?** (PM, designers, other engineers, stakeholders)
20. **How did cross-functional collaboration impact the outcome?**

After gathering responses, confirm the project slug (kebab-case URL-friendly version of the title) before generating files.

## File Structure

Case studies live in the portfolio directory with this structure:

```
app/
  portfolio/
    [project-slug]/
      page.tsx          ← The case study page component
    portfolioData.ts    ← Portfolio listing metadata
```

### Creating the Case Study

1. **Create the directory**: `app/portfolio/[project-slug]/`
2. **Create the page component**: `app/portfolio/[project-slug]/page.tsx`
3. **Update portfolio listing**: Add entry to `app/portfolio/portfolioData.ts`

### Page Component Structure

The `page.tsx` file **MUST** follow this exact pattern:

```tsx
import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { portfolioMetadata } from '../portfolioData'

const projectSlugData: CaseStudyProps = {
  ...portfolioMetadata.projectSlug,
  
  image: {
    src: "/images/project-slug-hero.jpg",
    alt: "Project Name Interface",
    width: 1200,
    height: 675
  },
  
  sections: {
    // ... generated sections here
  }
}

export default function ProjectNamePage() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Project Name", href: "/project-slug", current: true }
      ]} />
      <CaseStudy {...projectSlugData} />
    </main>
  )
}
```

**Critical Requirements:**
- Import `Breadcrumb`, `CaseStudy`, and `CaseStudyProps`
- Create a typed data object with `CaseStudyProps`
- Spread `portfolioMetadata.projectSlug` (use camelCase key)
- Use `image` property (NOT `heroImage`)
- Wrap in `<main>` with exact classes shown
- Include `Breadcrumb` component before `CaseStudy`
- Use straight quotes (`'` and `"`) ONLY - never smart quotes (`'` `"` `"`)

### Portfolio Data Entry

Add TWO entries to `app/portfolio/portfolioData.ts`:

**1. Add to portfolioMetadata object (around line 15-45):**

```typescript
  projectSlug: {
    subtitle: "Company/Product Name",
    title: "Project Name",
    description: "One-sentence description for portfolio listing",
    slug: "project-slug",
  }
```

**2. Add to portfolioProjects array (around line 50-70):**

```typescript
  {
    ...portfolioMetadata.projectSlug,
    route: '/portfolio/project-slug',
    order: 5  // Increment from last entry
  }
```

**Important:**
- Key name must be camelCase (e.g., `projectSlug`, not `project-slug`)
- Include `subtitle` for company/product context
- `slug` should be kebab-case matching the folder name
- Maintain sequential `order` numbers

### Image Assets

Hero images should be:
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Location**: `/public/images/[project-slug]-hero.jpg`
- **Format**: JPG or PNG, optimized for web
- Can use placeholder: `https://placehold.co/1200x675?text=Project+Name`

## Hard Constraints

- **Total length:** 250–400 words across all sections combined
- Write concise, skimmable paragraphs (2–3 sentences max per section)
- Prioritize **impact, decisions, and results**
- Avoid buzzwords unless they add clarity
- No emojis
- **CRITICAL:** Use ONLY straight quotes (`'` and `"`) - smart quotes (`'` `'` `"` `"`) will cause TypeScript parsing errors
- Avoid contractions with apostrophes where possible (use "could not" instead of "couldn't") or ensure straight apostrophes

## UI Fit Constraints (Tailwind + Next.js)

- Each `content` field should be **1 short paragraph**.
  - If you must include a second paragraph, separate it with **one blank line** (`\n\n`) so the UI renders two paragraphs.
- Keep each feature `description` **tight** (ideally 12–20 words).
- Prefer **exactly 3 features** in `tools`, `solution`, and `impactAndResults` when features are present.

## Output Format

Return the case study content as structured data matching this model:

sections: {
  tools: {
    title: "Technology Stack",
    content: string,
    features: [
      { icon: string, title: string, description: string }
    ]
  },

  problemStatement: {
    title: "Problem",
    content: string
  },

  researchAndFeedback: {
    title: "Research & User Feedback",
    content: string
  },

  solution: {
    title: "Solution",
    content: string,
    features: [
      { icon: string, title: string, description: string }
    ]
  },

  impactAndResults: {
    title: "Impact & Results",
    content: string,
    features: [
      { icon: string, title: string, description: string }
    ]
  }
}

## Writing Guidelines by Section
**CRITICAL: Use kebab-case string names, NOT PascalCase component names**

- Icons must be **kebab-case strings** like `'check-circle'`, `'user-plus'`, `'chart-bar'`
- **NEVER** use PascalCase like `'CheckCircleIcon'` or `'UserPlusIcon'`
- Icons are mapped to **@heroicons/react/20/solid** components internally
- Common valid icons: `'check-circle'`, `'users'`, `'user-plus'`, `'chart-bar'`, `'calendar'`, `'qr-code'`, `'shield-check'`
- 1–2 sentences describing the architectural or technical approach
- 3 concise features explaining *why* each technology mattered
- Focus on tradeoffs, scalability, performance, security, reliability, or maintainability

### Problem

- Clearly describe the user or business pain
- Emphasize friction, inefficiency, risk, or missed opportunity
- Avoid describing the solution here

### Research & User Feedback

- Mention research methods (interviews, analytics, observation, support tickets, etc.)
- Include **one concrete insight or metric** when possible
- Tie findings directly to the problem

### Solution

- Describe what changed and how the system works at a high level
- Focus on user experience improvements and key decisions
- 3 features that map directly to the earlier problems

### Impact & Results

- Lead with outcomes, not features
- Use metrics where possible (time saved, adoption, reliability, scale)
- Emphasize business or user value

## Icons (Heroicons v2)

- Icons must be compatible with **@heroicons/react/20/solid**
- Assume icons will be rendered at **size 20** (Tailwind `size-5`)
- Use clear, generic icon keys that map cleanly to your icon system
- Avoid obscure or overly specific icon names

## Senior-Level Signal Checklist

Work these in naturally (without adding extra sections):

- **Constraints:** what made the problem hard (time, scale, compliance, devices, connectivity, stakeholders)
- **Tradeoffs:** what you chose *not* to do and why
- **Risk reduction:** how you prevented failures (testing, rollout, monitoring, fallbacks)
- **Cross-functional work:** collaboration with PM, design, ops, support, leadership
- **Measurement:** what you tracked and how you knew it worked

## Final Check (Self-Lint)

Before responding, verify:

- Total word count is **250–400**
- All reqre **kebab-case strings** (e.g., `'check-circle'`, NOT `'CheckCircleIcon'`)
- **ONLY straight quotes** used (`'` and `"`), NO smart quotes (`'` `"` `"`)
- Proper TypeScript structure with `CaseStudyProps` type
- Correct imports: `Breadcrumb`, `CaseStudy`, `CaseStudyProps`, `portfolioMetadata`
- `image` property (NOT `heroImage`)
- Breadcrumb and main wrapper included
- Any section that includes `features` includes **3 items**, each with `icon`, `title`, `description`
- Feature titles are short (1–4 words), descriptions are concise
- Icons align with Heroicons conventions and your icon map
- Content reads like a real shipped project, not a concept

---

## Optional Local Validator (copy/paste)

If you want a quick sanity check in Node/TS, you can adapt this:

```ts
// Minimal runtime checks for generated case studies
export function validateCaseStudy(sections: any) {
  const errors: string[] = []

  // Required sections
  const required = [
    'problemStatement',
    'researchAndFeedback',
    'solution',
    'impactAndResults',
  ]
  for (const key of required) {
    if (!sections?.[key]?.content) errors.push(`Missing sections.${key}.content`)
  }

  // Word count across all content fields
  const text = [
    sections?.tools?.content,
    sections?.problemStatement?.content,
    sections?.researchAndFeedback?.content,
    sections?.solution?.content,
    sections?.impactAndResults?.content,
  ].filter(Boolean).join(' ')

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  if (wordCount < 250 || wordCount > 400) {
    errors.push(`Word count ${wordCount} outside 250–400`)
  }

  // Features checks (when present)
  const featureParents = ['tools', 'solution', 'impactAndResults'] as const
  for (const parent of featureParents) {
    const features = sections?.[parent]?.features
    if (features) {
      if (!Array.isArray(features)) errors.push(`sections.${parent}.features must be an array`)
      if (Array.isArray(features) && features.length !== 3) {
        errors.push(`sections.${parent}.features should have exactly 3 items`)
      }
      for (const [i, f] of (features || []).entries()) {
        if (!f?.icon) errors.push(`Missing sections.${parent}.features[${i}].icon`)
        if (!f?.title) errors.push(`Missing sections.${parent}.features[${i}].title`)
        if (!f?.description) errors.push(`Missing sections.${parent}.features[${i}].description`)
      }
    }
  }

  return { ok: errors.length === 0, errors, wordCount }
}
