# Component Reference & Customization Guide

## 🎯 Component Overview

All components use Framer Motion for animations and Tailwind CSS for styling. The dark navy and gold color scheme is applied throughout.

---

## 1️⃣ HeroSection

### Features
- Full viewport height hero banner
- Parallax scrolling background
- Animated 3D cross with glow effects
- Floating prayer orb with particle effects
- Glassmorphism quote card with animation
- Responsive layout (left content, right image on desktop)
- Scroll indicator at bottom

### File: `src/app/components/HeroSection.tsx`

### Key Customizations

#### Change Headline Text
```tsx
// Line ~120
<h1 className="text-5xl md:text-7xl font-bold text-[#F8F5EE] mb-6 leading-tight">
  Your Custom Headline Here
  <br />
  <span className="bg-gradient-to-r from-[#D4AF37] to-[#F8F5EE] bg-clip-text text-transparent">
    Highlighted Text
  </span>
</h1>
```

#### Update CTA Button Text
```tsx
// Line ~144
<button>Join Us This Sunday</button>
// Change to:
<button>Your CTA Text</button>
```

#### Modify Contact Information
```tsx
// Lines ~166-175
<div className="flex items-center gap-3 text-[#F8F5EE]/70">
  <MapPin className="w-5 h-5 text-[#D4AF37]" />
  <span>Your Address Here</span>
</div>
```

#### Animation Speed
Change animation `duration` in Framer Motion properties:
```tsx
// FloatingCross animation
transition={{
  duration: 6,  // Change this (in seconds)
  repeat: Infinity,
  ease: "easeInOut",
}}
```

---

## 2️⃣ MissionSection

### Features
- Two-column layout (image + content)
- Left side grotto image placeholder
- Right side mission statement
- Scripture reference with special styling
- Large decorative glowing 3D cross background
- Smooth fade animations on scroll

### File: `src/app/components/MissionSection.tsx`

### Key Customizations

#### Change Mission Statement
```tsx
// Line ~84
<p className="text-xl text-[#F8F5EE]/80 mb-8 leading-relaxed">
  Your mission statement here
</p>
```

#### Update Scripture Reference
```tsx
// Lines ~93-98
<motion.div>
  <p className="text-[#D4AF37] italic text-lg font-light mb-2">
    Your scripture text here
  </p>
  <p className="text-[#F8F5EE]/60 text-sm">Book X:Y</p>
</motion.div>
```

#### Change Button Text
```tsx
// Line ~119
<button>Your Button Text</button>
```

---

## 3️⃣ ParishExperience

### Features
- Four-card grid layout
- Glassmorphic cards with hover effects
- Icon selection (Heart, Users, BookOpen, Handshake)
- Title and description for each card
- Smooth animations on scroll
- Hover lift animations

### File: `src/app/components/ParishExperience.tsx`

### Key Customizations

#### Add/Edit Experience Cards
```tsx
// Line ~18-33
const experiences = [
  {
    icon: Heart,  // Change icon here (import from lucide-react)
    title: "Your Title",
    description: "Your description text",
    color: "from-[#D4AF37] to-[#B8960F]",  // Gradient colors
  },
  // Add more cards...
];
```

#### Import Additional Icons
```tsx
// Top of file
import { 
  Heart, Users, BookOpen, Handshake, 
  // Add more icons:
  Star, Zap, Flame, etc. 
} from "lucide-react";
```

---

## 4️⃣ LiveMassSection

### Features
- Cinematic video player card
- Animated play button with pulse
- Golden glow effects
- Hover animations
- Rounded corners with border
- Responsive sizing

### File: `src/app/components/LiveMassSection.tsx`

### Key Customizations

#### Update Live Mass Info Text
```tsx
// Line ~137
<p className="text-[#F8F5EE]/70 text-lg mb-6">
  Your custom text about live mass streaming
</p>
```

#### Change Watch Now Button
```tsx
// Line ~143
<span className="relative text-[#04142D] flex items-center gap-2">
  <Play className="w-4 h-4" />
  Custom Button Text
</span>
```

#### Add YouTube/Stream Link
```tsx
// Add onClick handler:
<motion.button
  onClick={() => window.open('your-stream-url')}
  className="..."
>
```

---

## 5️⃣ EventsSection

### Features
- Four-card event display
- Date, time, and location details
- Event type badges
- Glassmorphic styling
- Hover animations
- Icons for each detail

### File: `src/app/components/EventsSection.tsx`

### Key Customizations

#### Update Events List
```tsx
// Line ~23-39
const events = [
  {
    title: "Your Event Title",
    date: "June 15, 2026",
    time: "6:00 PM",
    location: "Event Location",
    type: "Weekly",  // or "Monthly", "Special", etc.
  },
  // Add more events...
];
```

#### Change Events Grid Layout
```tsx
// Line ~103 (adjust grid columns)
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Change lg:grid-cols-4 to lg:grid-cols-3 for 3 columns, etc. */}
</div>
```

---

## 6️⃣ StatisticsSection

### Features
- Four animated counters
- Numbers animate in on scroll
- Decorative gold lines
- Large typography
- Box styling with hover effects

### File: `src/app/components/StatisticsSection.tsx`

### Key Customizations

#### Update Statistics
```tsx
// Line ~63-68
const stats = [
  { end: 10000, suffix: "+", label: "Your Label" },
  { end: 75, suffix: "+", label: "Another Label" },
  // Add more stats...
];
```

#### Change Counter Animation Duration
```tsx
// Line ~29-37 (AnimatedCounter component)
const interval = setInterval(() => {
  current += increment;
  // Adjust the 30ms delay for slower/faster counting
}, 30);
```

---

## 7️⃣ PriestMessage

### Features
- Three-column layout (photo + message + signature)
- Priest photo placeholder
- Welcome message
- Signature styling
- Glassmorphic card
- Border glow on hover

### File: `src/app/components/PriestMessage.tsx`

### Key Customizations

#### Update Priest Information
```tsx
// Line ~118
<span className="text-[#D4AF37] font-semibold">Your Priest Name</span>
<span className="text-[#F8F5EE]/50 text-sm">Your Title</span>
```

#### Change Message Text
```tsx
// Lines ~123-131
<p className="text-lg text-[#F8F5EE]/80 leading-relaxed mb-4">
  Your custom message here
</p>
<p className="text-lg text-[#F8F5EE]/80 leading-relaxed mb-6">
  More message text here
</p>
```

#### Update Signature
```tsx
// Lines ~134-139
<motion.div className="text-[#D4AF37] font-semibold text-lg">
  In Christ's Love,
  <br />
  Your Name Here
</motion.div>
```

---

## 8️⃣ GallerySection

### Features
- Masonry layout with 6 items
- Variable sizes for different items
- Hover zoom and overlay effects
- Glassmorphic styling
- Title display on hover

### File: `src/app/components/GallerySection.tsx`

### Key Customizations

#### Update Gallery Items
```tsx
// Line ~50-55
const galleryItems = [
  { id: 1, title: "Your Photo Title", size: "col-span-2 row-span-2" },
  { id: 2, title: "Another Photo", size: "col-span-1 row-span-1" },
  // Add more items...
];
```

#### Change Grid Layout
Adjust the `size` property for each item:
- `col-span-2 row-span-2` = Large (2x2)
- `col-span-1 row-span-1` = Small (1x1)
- `col-span-2 row-span-1` = Wide (2x1)

#### Replace Placeholder Images
```tsx
// Current: SVG placeholder
// Replace with: <img src="url" alt="title" className="w-full h-full object-cover" />
```

---

## 9️⃣ TestimonialsSection

### Features
- Two-column testimonial cards
- Five-star ratings
- Floating quotation marks
- Author credentials
- Glassmorphic styling
- Smooth animations

### File: `src/app/components/TestimonialsSection.tsx`

### Key Customizations

#### Update Testimonials
```tsx
// Line ~25-44
const testimonials = [
  {
    name: "Person Name",
    role: "Their Role",
    content: "Their testimonial text here",
    rating: 5,
  },
  // Add more testimonials...
];
```

#### Change Grid Layout
```tsx
// Line ~95 (adjust for different layouts)
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
  {/* Change to grid-cols-1 for single column, etc. */}
</div>
```

---

## 🎨 Color System

### Primary Colors (Accessible via Tailwind)
```css
/* Navy Blues */
#04142D - text-[#04142D]
#081A38 - text-[#081A38]

/* Golds */
#D4AF37 - text-[#D4AF37]
#B8960F - text-[#B8960F]

/* Off-white */
#F8F5EE - text-[#F8F5EE]

/* With Opacity */
text-[#D4AF37]/50  /* 50% opacity */
text-[#F8F5EE]/80  /* 80% opacity */
```

---

## ✨ Animation Patterns

### Fade Up on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  Content
</motion.div>
```

### Floating Animation
```tsx
<motion.div
  animate={{
    y: [0, -20, 0],
    x: [0, 10, -10, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Floating Content
</motion.div>
```

### Hover Lift Effect
```tsx
<motion.div
  whileHover={{ y: -10 }}
  className="..."
>
  Hoverable Content
</motion.div>
```

---

## 📝 Best Practices

1. **Keep animations smooth** - Use 300-800ms for most transitions
2. **Use semantic HTML** - h1, h2, h3 for proper hierarchy
3. **Maintain accessibility** - Include alt text and ARIA labels
4. **Test on mobile** - All components should be responsive
5. **Follow color scheme** - Stick to the navy and gold palette
6. **Use consistent spacing** - Stick to Tailwind's spacing scale
7. **Comment complex code** - Especially animation logic

---

## 🔧 Common Edits Checklist

- [ ] Update church name and location
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Modify event list
- [ ] Update priest information
- [ ] Add actual testimonials
- [ ] Update gallery titles
- [ ] Change social media links
- [ ] Update statistics
- [ ] Customize mission statement

---

**Component Architecture**: All sections use React functional components with hooks and Framer Motion animations for maximum performance and smooth UX.
