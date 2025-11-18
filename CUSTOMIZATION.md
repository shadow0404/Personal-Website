# Customization Guide

## Adding Your Content

### 1. Gallery Images

Place your images in `/public/images/gallery/`:
```
/public/images/gallery/
  1.jpg
  2.jpg
  3.jpg
  4.jpg
  5.jpg
  6.jpg
```

**Tips:**
- Use portrait orientation (4:5 ratio recommended)
- Optimize images for web (under 500KB each)
- Keep consistent editing style
- Update captions in `components/Gallery.tsx`

### 2. Voice Note

**Option A: Simple Audio Tag (Recommended)**

1. Place your audio file in `/public/audio/voice-note.mp3`
2. Update `components/VoiceNote.tsx`:

```tsx
<audio controls className="w-full">
  <source src="/audio/voice-note.mp3" type="audio/mpeg" />
  Your browser does not support audio.
</audio>
```

**Option B: Custom Player**

Install a player library like `react-h5-audio-player`:
```bash
npm install react-h5-audio-player
```

### 3. Substack Integration

Update `components/Writing.tsx`:

**Your Substack URL:**
Replace `https://yoursubstack.substack.com` with your actual Substack URL

**Recent Essays:**
Update the `essays` array with your latest posts:
```tsx
const essays = [
  {
    title: "Your Actual Essay Title",
    date: "Nov 2024",
    description: "Brief description...",
    url: "https://yoursubstack.substack.com/p/essay-slug",
  },
  // Add more essays...
]
```

**Subscribe Form:**

Option 1: Use Substack's embed form
1. Go to your Substack settings
2. Get the embed code
3. Replace the form in `Writing.tsx`

Option 2: Link directly to your Substack
```tsx
<a href="https://yoursubstack.substack.com/subscribe">
  Subscribe on Substack
</a>
```

### 4. Content Updates

**Hero Section** (`components/Hero.tsx`)
- Update the opening narrative
- Change the philosophy/approach

**Work Section** (`components/Work.tsx`)
- Add/remove projects
- Update descriptions
- Keep the narrative style

**Contact** (`components/Contact.tsx`)
- Email, phone, LinkedIn are already set
- Add other links if needed

## Substack Details Needed

Please provide:
1. **Your Substack URL**: `https://[your-name].substack.com`
2. **Recent essay titles and URLs** (3-5 latest posts)
3. **Brief descriptions** for each essay (1-2 sentences)
4. **Embed code** (optional) - Get from Substack settings → Embed

## Voice Note Setup

Provide:
1. **Audio file** (.mp3, .m4a, or .wav)
2. **Duration** (for display)
3. **Title/description** (optional)

## Design Customization

All in the same minimalist aesthetic:

**Colors** (`app/globals.css`):
- Currently: Pure black on white
- To change: Update CSS variables

**Typography** (`app/layout.tsx`):
- Currently: Inter font
- To change: Import different Google Font

**Layout** (`components/*.tsx`):
- Max width: 768px (2xl) for reading
- Max width: 1280px (5xl) for gallery
- Adjust in individual components

## Adding More Sections

Keep the same aesthetic:
```tsx
export default function NewSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Title</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

Import in `app/page.tsx` and add between `<Divider />` components.

