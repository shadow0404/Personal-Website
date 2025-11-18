# Anmol Rathi

A minimalist personal website inspired by Apple's design philosophy and Paul Graham's essay style.

## Design Philosophy

- **No shadows** - Clean, flat design
- **Sharp edges** - No border radius, everything is crisp
- **Black and white** - Pure minimalism with black text on white background
- **No borders on images** - Clean, borderless aesthetic
- **Narrative-driven** - Story over resume, ideas over credentials
- **Typography-focused** - Let the words breathe

## Getting Started

### Install Node.js

1. Download from [nodejs.org](https://nodejs.org/) (LTS version)
2. Install the `.pkg` file
3. Close and reopen Terminal

### Run the website

```bash
cd "/Users/anmolrathi/Anmol Website"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
/app
  page.tsx          # Main page
  layout.tsx        # Root layout
  globals.css       # Minimalist styles
/components
  Header.tsx        # Simple navigation
  Hero.tsx          # Opening narrative
  VoiceNote.tsx     # Audio message placeholder
  Gallery.tsx       # Photo gallery
  Work.tsx          # Projects as stories
  Writing.tsx       # Substack integration
  Contact.tsx       # Get in touch
  Footer.tsx        # Minimal footer
  Divider.tsx       # Section separator
/public
  /images
    /gallery        # Place your photos here (1.jpg, 2.jpg, etc.)
  /audio           # Place voice notes here
```

## Customization

The design uses:
- Pure black (#000000) for text
- Pure white (#FFFFFF) for background
- 40% opacity black for secondary text
- No shadows, no borders, no rounded corners
- Inter font family
- Max width: 768px (2xl breakpoint)

Edit content in the component files. The narrative style is intentional—write like you're explaining to a friend, not listing credentials.

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import in Vercel
3. Deploy

## Philosophy

This isn't a resume. It's a story about why the work matters. Every project should answer: "Why does this exist?" not just "What did you do?"

Good design is invisible. Good policy should be too.
