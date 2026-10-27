---
name: Dayver Moreta
description: A personal portfolio grounded in hardware, technical support, infrastructure and local AI projects.
colors:
  dark-bg: "#101923"
  dark-surface: "#192632"
  dark-raised: "#223342"
  dark-ink: "#edf2f6"
  dark-muted: "#afc0d0"
  dark-line: "#3b4e60"
  dark-accent: "#9cb6ff"
  dark-shadow: "#060c12"
  light-bg: "#edf1f5"
  light-surface: "#e2e9f0"
  light-raised: "#d3dfea"
  light-ink: "#172a3b"
  light-muted: "#4e6476"
  light-line: "#b5c3ce"
  light-accent: "#2c4fbd"
  light-shadow: "#a5b6c8"
  solid: "#3f60cc"
  on-solid: "#f6f8ff"
  solid-hover: "#3152bd"
  media-bg: "#111b27"
typography:
  display:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "clamp(48px, 6.3vw, 92px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 60px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  project-title:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "clamp(44px, 5.8vw, 78px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  button:
    fontFamily: "Satoshi, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
rounded:
  control: "8px"
  inset-media: "10px"
  portrait-top: "12px 12px 0 0"
  surface: "16px"
spacing:
  gutter: "clamp(22px, 4.5vw, 76px)"
  compact: "8px"
  small: "12px"
  inset: "16px"
  comfortable: "22px"
  panel: "24px"
  roomy: "32px"
  group: "36px"
  large: "48px"
  section: "94px"
  section-medium: "70px"
  section-small: "58px"
components:
  button-primary:
    backgroundColor: "{colors.solid}"
    textColor: "{colors.on-solid}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.solid-hover}"
    textColor: "{colors.on-solid}"
  button-contact-dark:
    backgroundColor: "{colors.dark-ink}"
    textColor: "{colors.dark-bg}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-contact-light:
    backgroundColor: "{colors.light-ink}"
    textColor: "{colors.light-bg}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-outline:
    backgroundColor: "transparent"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  utility-control:
    backgroundColor: "transparent"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 10px"
  preview-selector-dark:
    backgroundColor: "{colors.dark-raised}"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  preview-selector-light:
    backgroundColor: "{colors.light-raised}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  text-link:
    backgroundColor: "transparent"
    padding: "10px 0"
  navigation:
    backgroundColor: "transparent"
    padding: "16px 0"
  disclosure:
    backgroundColor: "transparent"
    padding: "10px 0"
  gallery-control:
    backgroundColor: "transparent"
    rounded: "{rounded.control}"
  timeline-entry:
    backgroundColor: "transparent"
    padding: "24px 0 0"
---

# Design System: Dayver Moreta

## Overview

**Creative North Star: "The Industrial Design Exhibition"**

This document captures the implemented local proposal, not a user-approved replacement or a published site. Its visual language gives real software screenshots and the owner's portrait room to establish the identity: cool graphite, layered slate, clear Satoshi typography and deliberate changes in scale. The metaphor is descriptive of the existing direction, not a new claim of user approval.

Depth is concentrated around the work. Text remains still and readable, controls remain explicit, and open space separates projects from personal background. The light theme preserves the same structure and hierarchy. Normative primitives above come from `taller.css`; the sidecar adds motion, breakpoint, shadow and component-preview details.

**Key Characteristics:**

- Real project screenshots, the existing portrait and documented credentials.
- Cool neutral surfaces with cobalt actions and theme-specific blue emphasis.
- Large medium-weight headlines, compact labels and generous paragraph leading.
- Varied project scale, restrained perspective and visible keyboard focus.

## Colors

The palette is cool and material: graphite and steel in dark mode, pale blue-grey in light mode.

The sidecar's synthesized OKLCH tonal ramps are swatch aids, not additional application colors.

### Primary

`solid` and `on-solid` define primary actions in both themes; `solid-hover` is their fine-pointer hover state. The theme-specific accent colors mark links, dates, focus outlines and the contact heading. The accent is not a substitute for the solid button fill.

### Neutral

Each theme has `bg`, `surface`, `raised`, `ink`, `muted`, `line` and `shadow` roles, mapped to the matching CSS custom properties. Background is the page canvas; surface contains grouped material; raised frames selected controls and media; ink carries headings and principal copy; muted carries descriptions; line separates content and outlines controls. The media background remains dark to contain source screenshots faithfully.

**The Theme Pairing Rule.** Change neutral and accent roles together. Respect the system preference until a visitor explicitly selects a theme; preserve that selection locally.

## Typography

Display, body and labels use Satoshi with Arial and sans-serif fallbacks. Weights 400, 500 and 700 are self-hosted WOFF2 files with `font-display: swap`; do not synthesize unavailable weights. Source and license are recorded in `assets/fonts/SOURCE.md`.

The frontmatter records the base display, headline, project-title, body, label and button roles. Medium-weight titles and tight tracking supply character; bold is reserved for the name and primary actions. There is no separate monospace face or mathematical type-scale rule.

Hero supporting copy is 17px with a 390px maximum width at the base desktop layout. Section paragraphs are generally 16px and 580–650px wide; project descriptions are 13–15px according to their layout. Project statements use 22–24px with 1.4 leading. Labels and captions use 12–13px. Preserve the explicit responsive overrides below rather than shrinking all type uniformly.

**The Still Copy Rule.** Do not animate reading text during interaction. The initial hero entrance is the only text entrance in this implementation.

## Layout

The header and hero cap at 1600px; main sections and footer cap at 1500px. The fluid gutter token controls their horizontal padding. Body minimum width is 320px. The header is 72px tall, is not sticky, and sits above the page at layer 10. Anchor scrolling has 90px top padding.

Desktop compositions use unequal columns: hero `.9fr / 1.3fr`, featured project `.78fr / 1.22fr`, the second project `1.05fr / 1fr`, and the paired homelab media `1.2fr / 1fr`. Biography uses `.72fr / 1.28fr`; experience is equal-column; academic items use `1.4fr / 1fr / 1fr`. Preserve this visual variety when extending this surface; do not turn every section into the same card grid. Default section vertical padding uses the section token; project groups have distinct 110px desktop gaps.

| Maximum width | Implemented changes |
| --- | --- |
| 1100px | Section vertical padding becomes 70px; hero columns become `1fr / 1.15fr`; display becomes `clamp(50px, 6.3vw, 76px)`; featured project inset becomes 30px; certificates place the image above their copy. |
| 850px | Navigation becomes a disclosure menu; hero and featured project become one column; stage perspective is removed; display becomes `clamp(50px, 8.5vw, 78px)` with inline title spans; sections use 58px vertical padding; contact stacks. |
| 600px | Header becomes 70px and hides its contact action; display becomes `clamp(46px, 10.6vw, 64px)` with 1.08 leading and two block spans; second project, homelab, biography, experience, academics and credentials stack. Portrait remains a compact image/caption row. Section headings are 36px; primary actions become 13px with `14px 20px` padding. |

At the smallest breakpoint, featured-project padding is `26px 22px`, education uses `32px 24px` with 14px outside margins, and gallery shell padding is 14px. Links and selectors wrap where necessary; email text may break anywhere. Screenshot content uses `object-fit: contain`; portrait content uses a square crop. Print removes interactive navigation, stage, gallery, project media and contact, and renders compact light content.

## Elevation & Depth

Tonal layering carries most depth. Shadows are reserved for the project stage, the featured screenshot and the modal gallery; ordinary text sections and controls do not cast shadows. The desktop stage combines perspective (1600px) with `rotateY(-7deg) rotateX(3deg)`, then becomes flat below the navigation breakpoint and for reduced motion.

The sidecar records exact shadows: a broad stage shadow, a smaller featured-media shadow and a modal shadow. The gallery backdrop is an opaque dark veil (`rgb(6 12 18 / .88)`). The header uses layer 10 and the skip link layer 20; the native modal dialog uses the browser top layer.

**The Evidence Depth Rule.** Apply depth to the work being presented, keeping copy and navigation stable.

## Shapes

Use the surface radius for large media frames, the portrait container, the education group and the gallery. Use the control radius for buttons, selectors, utility controls and certificate thumbnails. Inset project images use the inset-media radius; the portrait has rounded top corners only. Borders are thin, solid and drawn from the theme line role. The system has no pill-chip language; technology labels are plain text.

## Components

### Actions and controls

Primary links have a 50px minimum height, centered content, the primary button tokens and a subtle pressed scale of `.98`. The header contact action reverses the active theme's ink/background roles. Secondary text actions use an underline or bottom border rather than a surrounding box. Gallery-entry buttons and utility controls use transparent fills with line-colored outlines; selected preview buttons use the raised surface.

Fine-pointer hover changes primary fills, selected surfaces or link color; image triggers lift their screenshot by 3px. Every link, button and disclosure summary has a visible accent outline (3px, offset 6px). Most compact buttons have a 44px minimum height; header utilities narrow to 40px minimum width below 600px. Disabled gallery controls use `.4` opacity and a default cursor.

### Navigation and state

The header combines a text wordmark, section anchors, theme and language controls, a contact action and the mobile menu. The menu exposes `aria-expanded`, closes on navigation, outside click, Escape or leaving the mobile breakpoint, and returns focus to its trigger on Escape. Spanish and English text, labels and the document title switch together; language and theme preferences persist locally.

### Project preview and gallery

The stage is a group of three explicit pressed-state buttons, followed by one screenshot, caption and destination link. Selection waits for image decoding, reports loading or failure, and ignores stale requests. It does not autoplay. Images in project sections open a native modal dialog with a title, provenance label, caption, previous/next controls, loading status and a close action. Gallery boundaries disable the corresponding control; arrow keys navigate, Escape closes and focus returns to the trigger. Captions distinguish implemented interfaces with demonstration data from real project captures.

### Disclosure and supporting content

Contribution notes and extended project history use native `details`/`summary` controls. Experience entries use a line above the date and title; credentials use genuine document thumbnails and links. No form input is implemented, so this system defines no input or validation component.

### Motion

The shared easing is `cubic-bezier(.23,1,.32,1)`. Initial hero copy enters over 650ms from 18px below and the project stage over 800ms from 28px to the right. Pointer preview selection uses 220ms opacity/6px vertical motion; gallery opening uses 200ms opacity/scale; image hover uses 220ms; button press uses 120ms; color transitions use 180ms `ease`.

Reduced motion removes CSS animations and transitions, perspective, image lift and smooth scrolling; preview selection changes immediately. Keyboard input removes smooth scrolling, button transitions and gallery entrance animation, while keyboard preview selection skips the pointer animation. Avoid loops and invented skill meters. The extension tokens preserve these exact behaviors.

## Do's and Don'ts

### Do:

- **Do** use the paired theme roles and preserve a visitor's chosen theme.
- **Do** present source screenshots with contain sizing and honest provenance captions.
- **Do** keep Spanish and English labels, accessible names and state messages aligned.
- **Do** preserve visible focus, native disclosure behavior and gallery focus restoration.
- **Do** use existing portrait and credential assets with their documented public-data treatment.

### Don't:

- **Don't** replace real project evidence with generated hardware artwork or a synthetic portrait.
- **Don't** add looping motion, animated reading text or unmeasured skill bars.
- **Don't** apply perspective or motion when reduced motion is requested.
- **Don't** invent results, qualifications or numerical claims to fill a visual layout.
- **Don't** treat this local proposal as approved for publication or remove the comparison versions.
