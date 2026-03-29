# Visuals — UI Enhancement Guide

## Design Direction

**From:** Neumorphic / vibe-coded (heavy box shadows, dual-light illusion, layered gradients everywhere)  
**To:** Minimalist soft UI — clean, airy, intentional. Think Notion meets Linear.

---

## Core Principles

- **Whitespace is the hero.** Let sections breathe. No cramped cards.
- **One accent color.** Orange (`hsl(25 95% 53%)`) as the single brand color. Teal accent used sparingly.
- **Flat-ish cards.** Subtle single-direction shadow only. No inset/outset neumorphic double shadows.
- **Typography does the heavy lifting.** Size contrast and weight contrast replace decorative elements.
- **Borders over shadows.** Thin `1px` borders on cards instead of layered box-shadows.
- **No mesh gradients per section.** One unified light background across the page. Sections differentiated by subtle `bg-muted/30` alternating fills.

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--background` | `hsl(0 0% 99%)` | Page base — near white |
| `--foreground` | `hsl(220 20% 12%)` | Primary text |
| `--muted` | `hsl(220 10% 96%)` | Section alternates, card fills |
| `--muted-foreground` | `hsl(220 10% 50%)` | Secondary text |
| `--primary` | `hsl(25 95% 53%)` | Brand orange — CTAs, accents |
| `--border` | `hsl(220 13% 91%)` | Card borders, dividers |
| `--accent` | `hsl(195 70% 42%)` | Teal — used only for communication skill bar |

---

## Typography

- Font: **Poppins** (keep)
- `h1`: `4xl–6xl`, `font-bold`, tight leading
- `h2` (section titles): `2xl`, `font-semibold`, left-aligned or centered, no gradient clip
- `h3`: `sm`, `font-semibold`
- Body: `sm`, `text-muted-foreground`, `leading-relaxed`
- Labels/badges: `xs`, `font-medium`

---

## Removed Patterns

- ❌ `neu-card` / `neu-card-sm` — dual box-shadow neumorphism
- ❌ `neu-inset` — inset shadow
- ❌ `avatar-glow` — multi-layer glow
- ❌ `gradient-hero`, `gradient-section-*` — per-section mesh radial gradients
- ❌ `gradient-btn-primary` — gradient button with glow shadow
- ❌ `section-title` gradient text clip

---

## New Patterns

### Cards
```css
.soft-card {
  background: white;
  border: 1px solid hsl(220 13% 91%);
  border-radius: 12px;
  box-shadow: 0 1px 4px hsl(220 15% 88% / 0.5);
}
```

### Section alternating backgrounds
- Odd sections: `bg-background` (white)
- Even sections: `bg-muted/40` (very light gray)

### Primary button
```css
background: hsl(25 95% 53%);
color: white;
border-radius: 8px;
/* No gradient, no glow shadow */
```

### Section titles
- Plain `text-foreground`, `font-semibold`, `text-2xl`
- Optional: small orange underline accent `w-8 h-0.5 bg-primary mx-auto mt-2`

### Avatar
- Clean `ring-2 ring-border` instead of glow
- Simple `shadow-md`

### Skill bars
- Track: `bg-muted`
- Fill: `bg-primary` (solid, no gradient)

### Badges / tags
- `bg-muted text-muted-foreground border border-border` — neutral
- `bg-primary/10 text-primary` — for highlighted/active state

---

## Section-by-Section Changes

### Navbar
- Keep frosted glass (`bg-background/80 backdrop-blur`)
- Remove any shadow, keep `border-b border-border`

### Hero
- Remove mesh gradient background → plain `bg-background`
- Avatar: remove glow, use `ring-2 ring-border shadow-sm`
- Role badge: `bg-muted border border-border text-muted-foreground` (neutral, not orange)
- CTA button: solid orange, no gradient
- Secondary button: `border border-border bg-white text-foreground`
- Info chips (location, email, status): `bg-muted border border-border`

### Video Intro
- Section bg: `bg-muted/40`
- Card: `soft-card` with `p-2`
- Video placeholder: `bg-muted rounded-lg`
- Play button: solid orange circle, no gradient

### Skills
- Section bg: `bg-background`
- Skill cards: `soft-card p-4`
- Skill icon bg: `bg-muted`
- Progress bars: solid `bg-primary`

### Tools
- Section bg: `bg-muted/40`
- Tool cards: `soft-card p-4`
- Category badge: `bg-muted text-muted-foreground`

### Experience
- Section bg: `bg-background`
- Experience cards: `soft-card p-6`
- Date badge: `bg-muted text-muted-foreground border border-border`
- Highlight tags: `bg-muted border border-border`

### Education
- Section bg: `bg-muted/40`
- Cards: `soft-card`
- Section icon bg: `bg-muted`
- Cert list: simple dot list, no card wrapper needed

### Contact
- Section bg: `bg-background`
- Contact cards: `soft-card` — icon in `bg-muted` circle

### Footer
- `border-t border-border bg-background`
- Plain muted text, no gradient

---

## Spacing

- Section padding: `py-20` (keep)
- Container: `max-w-5xl mx-auto px-6` (keep)
- Card gap: `gap-4` (tighten from `gap-5/gap-10`)
- Internal card padding: `p-5` standard, `p-4` for small cards

---

## Hover States

- Cards: `hover:shadow-md transition-shadow duration-200` (shadow lift only, no scale)
- Buttons: `hover:opacity-90` or `hover:bg-primary/90`
- Nav links: `hover:text-foreground` (darken, not color shift)

---

## What This Achieves

The result is a portfolio that feels professional and trustworthy — not trendy or over-designed. Clean enough to let the content (Marlon's skills and experience) be the focus, with just enough visual structure to guide the eye.
