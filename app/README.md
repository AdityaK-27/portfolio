# Aditya Kankarwal Portfolio

A modern, animated portfolio website built with React, TypeScript, Tailwind CSS, and GSAP.

## Features

- **Dark Theme** with cyan accent colors
- **GSAP Animations** with scroll-triggered effects
- **3D Tilt Effects** on cards
- **Responsive Design** for all devices
- **Smooth Scroll** navigation
- **Performance Optimized** with reduced motion support

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Project Structure

```
├── public/
│   └── images/           # Profile photo and project images
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── AnimatedText.tsx
│   │   ├── FadeInSection.tsx
│   │   ├── FloatingElement.tsx
│   │   ├── GradientText.tsx
│   │   ├── Navigation.tsx
│   │   ├── SocialButton.tsx
│   │   └── TiltCard.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useInView.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollProgress.ts
│   ├── types/            # TypeScript types
│   ├── lib/              # Utility functions
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or connect GitHub repository:**
   - Push code to GitHub
   - Import repository on [vercel.com](https://vercel.com)
   - Vercel will auto-detect Vite and deploy

### Option 2: Hugging Face Spaces

1. **Create a new Space:**
   - Go to [huggingface.co/spaces](https://huggingface.co/spaces)
   - Click "Create new Space"
   - Select "Static" as the SDK

2. **Upload files:**
   - Build the project: `npm run build`
   - Upload contents of `dist/` folder to your Space

3. **Or use Git:**
   ```bash
   # Build the project
   npm run build
   
   # Clone your Space
   git clone https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME
   
   # Copy build files
   cp -r dist/* YOUR_SPACE_NAME/
   
   # Push to Hugging Face
   cd YOUR_SPACE_NAME
   git add .
   git commit -m "Initial deployment"
   git push
   ```

### Option 3: Netlify

1. **Drag & Drop:**
   - Build: `npm run build`
   - Drag `dist/` folder to [netlify.com](https://netlify.com)

2. **Or use Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   netlify deploy --dir=dist --prod
   ```

### Option 4: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm i -D gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       " predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/repo-name"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Customization

### Update Personal Information

1. **Hero Section:** Edit `src/sections/Hero.tsx`
2. **About Section:** Edit `src/sections/About.tsx`
3. **Experience:** Edit `src/sections/Experience.tsx`
4. **Projects:** Edit `src/sections/Projects.tsx`
5. **Certifications:** Edit `src/sections/Certifications.tsx`
6. **Contact:** Edit `src/sections/Contact.tsx`

### Update Images

Replace images in `public/images/`:
- `profile.jpg` - Your profile photo
- `project-*.jpg` - Project screenshots

### Update Colors

Edit `tailwind.config.js` and `src/index.css` to change the color scheme.

## License

MIT License - feel free to use this template for your own portfolio!
