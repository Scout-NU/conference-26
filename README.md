# Conference-26

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Next.js 16

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Design System](#design-system)
3. [How to Customize](#how-to-customize)
4. [Responsive Design](#responsive-design)

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd conference-26

# Install dependencies
npm install

# Add fonts (required)
# Download Clash Display from https://www.fontshare.com/fonts/clash-display
# Place ClashDisplay-Variable.woff2 in public/fonts/

# Run development server
npm run dev

# Open browser to http://localhost:3000

```

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run code linting
```

---

## Design System

### Color Palette

Our brand colors are configured in `app/globals.css` using Tailwind v4's `@theme` directive.

| Color     | Hex       | Tailwind Class     | Usage                        |
|-----------|-----------|--------------------|-----------------------------|
| Magenta   | `#FF00B2` | `bg-magenta`, `text-magenta` | TBD        |
| Lime      | `#F3FF85` | `bg-lime`, `text-lime`       | TBD         |
| Sky       | `#C4E8FF` | `bg-sky`, `text-sky`         | TBD    |
| Violet    | `#9E66FF` | `bg-violet`, `text-violet`   | TBD             |
| Indigo    | `#3D46FF` | `bg-indigo`, `text-indigo`   | TBD    |
| Charcoal  | `#272727` | `bg-charcoal`, `text-charcoal` | TBD    |
| Cream     | `#FFFCEC` | `bg-cream`, `text-cream`     | TBD           |

**Usage Examples:**

```tsx
// Primary button
<button className="bg-magenta text-cream px-6 py-3 rounded-lg">
  Register Now
</button>

// Card with accent border
<div className="bg-cream border-2 border-violet p-6 rounded-xl">
  Content here
</div>

// Highlighted text
<span className="text-indigo font-semibold">Important info</span>
```

### Typography

**Primary Font:** Clash Display (weights 200-700)

```tsx
// Headings
<h1 className="font-clash text-5xl font-bold">Conference 2026</h1>
<h2 className="font-clash text-3xl font-semibold">Sessions</h2>

// Body text inherits Clash Display from body element
<p className="text-lg">Welcome to conference...</p>

// Monospace for code
<code className="font-mono text-sm">npm install</code>
```

**Font Sizes (Tailwind Scale):**

| Class      | Size   | Usage              |
|------------|--------|--------------------|
| `text-xs`  | 12px   | Labels, captions   |
| `text-sm`  | 14px   | Secondary text     |
| `text-base`| 16px   | Body text          |
| `text-lg`  | 18px   | Lead paragraphs    |
| `text-xl`  | 20px   | Subheadings        |
| `text-2xl` | 24px   | Section titles     |
| `text-3xl` | 30px   | Page headings      |
| `text-4xl` | 36px   | Hero subheadings   |
| `text-5xl` | 48px   | Hero headings      |
| `text-6xl` | 60px   | Display text       |

### Spacing Scale

We use Tailwind's default 4px-based spacing scale. Common values:

```
gap-2  = 0.5rem (8px)
gap-4  = 1rem   (16px)
gap-6  = 1.5rem (24px)
gap-8  = 2rem   (32px)
gap-12 = 3rem   (48px)
gap-16 = 4rem   (64px)
gap-20 = 5rem   (80px)
gap-24 = 6rem   (96px)
```

**Spacing Guidelines:**

- Use `gap-4` to `gap-6` between related elements (form fields, list items)
- Use `gap-8` to `gap-12` between sections
- Use `py-16` to `py-24` for section padding
- Use `px-4` on mobile, `px-8` or `px-16` on desktop

---

## How to Customize

### Changing Colors

Colors are defined in `app/globals.css` using Tailwind v4's `@theme` directive:

```css
/* app/globals.css */
@theme inline {
  --color-magenta: #FF00B2;    /* Change this hex value */
  --color-lime: #F3FF85;
  --color-sky: #C4E8FF;
  --color-violet: #9E66FF;
  --color-indigo: #3D46FF;
  --color-charcoal: #272727;
  --color-cream: #FFFCEC;
}
```

After changing colors, restart your dev server:

```bash
npm run dev
```

### Adding New Colors

Add a new color variable in the `@theme` block:

```css
@theme inline {
  /* ... existing colors ... */
  --color-coral: #FF6B6B;      /* New color */
}
```

Use it in components:

```tsx
<div className="bg-coral text-cream">New accent color</div>
```

### Changing Fonts

To use a different font:

1. Download font files to `public/fonts/`
2. Update the `@font-face` rule in `globals.css`:

```css
@font-face {
  font-family: 'Your Font Name';
  src: url('/fonts/YourFont.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

3. Update the `@theme` block:

```css
@theme inline {
  --font-clash: 'Your Font Name', system-ui, sans-serif;
}
```

### Component-Level Styling

Override colors directly in components when needed:

```tsx
// Using Tailwind classes
<button className="bg-indigo hover:bg-violet text-cream">
  Click me
</button>

// Using arbitrary values (when brand colors don't apply)
<div className="bg-[#custom-hex]">Custom background</div>
```

### Changing Spacing

Adjust spacing using Tailwind utility classes:

```tsx
// Current spacing
<section className="py-20 px-8">

// More spacing
<section className="py-32 px-12">

// Less spacing
<section className="py-12 px-4">
```

---

## Responsive Design

### Approach: Mobile-First

We build mobile layouts first, then enhance for larger screens. Always start with the mobile view and add breakpoint prefixes for larger screens.

### Breakpoints

| Prefix | Min Width | Typical Devices         |
|--------|-----------|-------------------------|
| (none) | 0px       | Mobile phones           |
| `sm:`  | 640px     | Large phones, small tablets |
| `md:`  | 768px     | Tablets                 |
| `lg:`  | 1024px    | Laptops (primary breakpoint) |
| `xl:`  | 1280px    | Desktops                |
| `2xl:` | 1536px    | Large displays          |

### Common Patterns

#### Stack on Mobile, Side-by-Side on Desktop

```tsx
<div className="flex flex-col lg:flex-row gap-8">
  <div className="w-full lg:w-1/2">Left content</div>
  <div className="w-full lg:w-1/2">Right content</div>
</div>
```

#### Responsive Grid

```tsx
// 1 column mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>
```

#### Hide on Mobile, Show on Desktop

```tsx
<nav className="hidden lg:flex">
  {/* Desktop navigation */}
</nav>

<button className="lg:hidden">
  {/* Mobile menu button */}
</button>
```

#### Responsive Text Sizes

```tsx
<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
  Conference 2026
</h1>

<p className="text-base lg:text-lg">
  Body text that's larger on desktop
</p>
```

#### Responsive Spacing

```tsx
<section className="py-12 px-4 md:py-16 md:px-8 lg:py-24 lg:px-16">
  {/* Less padding on mobile, more on larger screens */}
</section>
```

#### Responsive Images

```tsx
<img 
  className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto"
  src="/image.jpg"
  alt="Description"
/>
```

### Testing Responsive Design

**In Chrome DevTools:**

1. Open DevTools (F12 or Cmd+Option+I)
2. Click the device toolbar icon (Cmd+Shift+M)
3. Test at these widths:
   - **375px** - iPhone SE (mobile)
   - **768px** - iPad (tablet)
   - **1024px** - Laptop
   - **1440px** - Desktop

**Common Issues & Fixes:**

| Issue                    | Solution                                      |
|--------------------------|-----------------------------------------------|
| Text too small on mobile | Add responsive text classes: `text-sm lg:text-base` |
| Elements overlapping     | Check for negative margins, use flex/grid instead of absolute positioning |
| Horizontal scroll        | Add `overflow-hidden` to container, check for fixed widths |
| Images too large         | Add `max-w-full` or responsive max-width classes |

---

### Useful Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Clash Display on Fontshare](https://www.fontshare.com/fonts/clash-display)
