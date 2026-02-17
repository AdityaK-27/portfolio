# Technical Specification - Aditya Kankarwal Portfolio

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Location |
|-----------|---------|----------|
| Button | CTA buttons, social links | Hero, Contact |
| Card | Project cards, certification cards | Projects, Certifications |
| Badge | Tech stack tags, skill tags | Projects, About |
| Separator | Section dividers | Footer |
| Tooltip | Icon hover hints | Navigation |

### Custom Components
| Component | Purpose | Props |
|-----------|---------|-------|
| AnimatedText | Staggered text reveal | text, delay, className |
| FadeInSection | Scroll-triggered fade in | children, delay, direction |
| SkillCard | Animated skill category | title, skills, icon |
| ProjectCard | Project showcase card | project data |
| CertificationCard | Flip certification card | cert data |
| TimelineItem | Experience timeline entry | experience data |
| SocialButton | Animated social link | platform, url, icon |
| GradientText | Animated gradient text | children, className |
| FloatingElement | Ambient float animation | children, amplitude, duration |
| TiltCard | 3D tilt on hover | children, maxTilt |

### Hooks
| Hook | Purpose |
|------|---------|
| useScrollProgress | Track scroll position (0-1) |
| useInView | Intersection observer wrapper |
| useMousePosition | Track mouse for tilt effects |
| useReducedMotion | Respect prefers-reduced-motion |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero shader background | CSS + Canvas | Animated gradient with noise displacement | High |
| Hero text stagger | GSAP | SplitType + stagger from y/rotateX | Medium |
| Profile image 3D entrance | GSAP | scale + rotateY + elastic ease | Medium |
| Profile float | CSS | @keyframes y oscillation | Low |
| Badge clip reveal | GSAP | clip-path inset animation | Low |
| Social links arc stagger | GSAP | stagger with bounce ease | Low |
| Scroll parallax (hero) | GSAP ScrollTrigger | scrubbed y transform | Medium |
| Section title vertical | CSS | rotate(-90deg) + positioning | Low |
| About heading word stagger | GSAP | SplitType words with stagger | Medium |
| Skill cards entrance | GSAP | scale + y + elastic stagger | Medium |
| Skill card hover | CSS | translateY + border-color transition | Low |
| Timeline line grow | GSAP ScrollTrigger | scaleY from origin-top | Low |
| Timeline node pulse | CSS | @keyframes box-shadow pulse | Low |
| Experience card 3D slide | GSAP | x + rotateY based on side | Medium |
| Project cards stagger | GSAP | x + rotateZ alternating pattern | Medium |
| Project card hover overlay | CSS | opacity + translateY transition | Low |
| Certification 3D flip | GSAP | rotateY from -90deg | Medium |
| Contact gradient text | CSS | background-clip + animated position | Low |
| CTA button glow pulse | CSS | @keyframes box-shadow | Low |
| Navigation scroll effect | GSAP ScrollTrigger | background + padding change | Low |
| Footer border grow | GSAP | scaleX from origin-center | Low |

---

## Animation Library Choices

### GSAP (Primary)
**Rationale:** Industry-standard, excellent performance, precise control
**Used for:**
- Scroll-triggered animations (ScrollTrigger)
- Complex choreography (timelines)
- Text splitting animations (SplitType)
- 3D transforms with easing

### CSS Animations (Secondary)
**Rationale:** GPU-accelerated, no JS overhead for simple effects
**Used for:**
- Continuous ambient animations (float, pulse)
- Hover transitions
- Simple keyframe animations

### Intersection Observer (Native)
**Rationale:** Lightweight, native API for triggering
**Used for:**
- Section entrance detection
- Lazy animation initialization

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-nlp.jpg
│   │   ├── project-sign.jpg
│   │   ├── project-churn.jpg
│   │   ├── project-netflix.jpg
│   │   └── project-road.jpg
│   └── resume.pdf
├── src/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── AnimatedText.tsx
│   │   ├── FadeInSection.tsx
│   │   ├── SkillCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CertificationCard.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SocialButton.tsx
│   │   ├── GradientText.tsx
│   │   ├── FloatingElement.tsx
│   │   ├── TiltCard.tsx
│   │   └── Navigation.tsx
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts
│   │   ├── useMousePosition.ts
│   │   └── useReducedMotion.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### Animation
```json
{
  "gsap": "^3.12.0",
  "@gsap/react": "^2.1.0"
}
```

### UI
```json
{
  "@radix-ui/react-tooltip": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0",
  "lucide-react": "^0.300.0"
}
```

### Fonts
- Inter (Google Fonts)
- Inter Tight (Google Fonts)

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #1a1a1a;
  --color-bg-card: #141414;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-accent: #00d4ff;
  --color-border: #333333;
  
  /* Easing */
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expo-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Duration */
  --duration-micro: 150ms;
  --duration-fast: 300ms;
  --duration-medium: 600ms;
  --duration-slow: 1000ms;
  
  /* Spacing */
  --section-padding: 8rem;
  --container-max: 1200px;
}
```

---

## Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |
| Animation Frame Rate | 60fps |
| Total JS Bundle | < 200KB gzipped |

---

## Accessibility Requirements

- Respect `prefers-reduced-motion`
- All interactive elements keyboard accessible
- Focus states visible
- Color contrast WCAG AA compliant
- Semantic HTML structure
- Alt text for all images
- ARIA labels where needed
