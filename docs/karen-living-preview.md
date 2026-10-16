# Karen: a living portfolio exhibit

Updated 2026-10-16, America/La_Paz.

The Karen section now leads with the original creature instead of a generic brain orb. A short introduction, clear download/source links and three concise features replace the repeated project narrative. Technical requirements, hosting scope and the distinction between OpenClaw and its visual interface remain available in a native disclosure. The Windows download points to 1.4.2. The gallery preserves the existing actual 1.4.1 playback capture and its separately labeled demonstration views; those images have not been relabeled as 1.4.2 screenshots.

The live exhibit is a **silent visual demonstration**. It does not connect to OpenClaw, generate voice, contact an AI provider, open a microphone or capture a screen. Speaking motion uses procedural energy and is explicitly identified as a demonstration. Real voice and perception remain capabilities of the separately installed application, with their documented external requirements.

## Design decisions

| Before | After | Why |
|---|---|---|
| Generic assistant orb and a static pet screenshot | Original layered creature with independent pupils, fins and facial gestures | Give the project its own visual identity and show its behavior |
| Long introduction before the artifact on phones | Heading, live creature, then explanatory copy | Make the product visible sooner while preserving DOM and keyboard order |
| Repeated capabilities and aspirational goals | Three features and an optional architecture disclosure | Separate the essential product story from supporting detail |
| Passive illustration | Five expression controls, click/keyboard greeting and pause | Let visitors explore the character without requesting device permissions |

The supplied UI/UX design-system query initially returned an unsuitable brutalist treatment. A narrower `style` query, `dark editorial minimalism`, returned `minimalism-and-swiss-style`. Only the verified principles that fit the existing portfolio were used: monochrome structure, clear type hierarchy, deliberate spacing and low-cost effects. The creature retains its ice-blue/lavender artwork. Emil design-engineering guidance informed the motion purpose, damped interruption, 180 ms controls, visible focus and reduced-motion behavior. No new font, UI framework or runtime dependency was added.

## Implementation

- `karen-pet.js`: isolated Canvas 2D renderer and interaction lifecycle. Idle breathing/flotation/blinks, listening, thinking, silent speaking, sleep and temporary happy greeting. The native application still has nine states; this exhibit intentionally exposes five plus greeting.
- `assets/karen/textures.js`: the original MIT artwork from [`src/pet/textures.ts`, v1.4.2](https://github.com/Duvetsillo/karen-desktop-pet/blob/v1.4.2/src/pet/textures.ts), transpiled to JavaScript. `paint` returns its offscreen canvas instead of a Pixi texture; drawing instructions are otherwise retained. The upstream MIT license is included beside it. All layers are generated locally once, with no image CDN.
- `karen.css`: section-scoped styling, mobile layout, touch targets, focus and reduced-motion overrides. Existing page sections and gallery data remain intact.
- The animation uses exponential damping and `requestAnimationFrame`, capped at 60 fps for fine pointers and 30 fps for touch. These are target caps, not measured guarantees. Device pixel ratio is capped at two. Intersection and visibility listeners stop the loop offscreen or when the document is hidden. Resize explicitly redraws even while paused. Reduced motion renders static, selectable expressions and disables the animation toggle.
- A native button provides keyboard/touch greeting. Buttons announce selected state; the status is updated on expression changes, never per animation frame. A local image remains visible if JavaScript or Canvas is unavailable.
- Spanish and English copy use the existing translation mechanism. Dynamic expression/pause text follows the document language.

## Verification

Local Chromium checks passed at 1440×1000, 390×844, 375×812, 768×1024 and landscape 844×390. They checked changing canvas pixels, frozen pixels while paused, static reduced-motion expressions, independent iris movement with the cursor, expression selection, Enter-key greeting, 44 px minimum targets, ES/EN changes, architecture disclosure, four gallery images and Escape/focus restoration. Instrumented draw calls stop offscreen and on a simulated `document.hidden` visibility event. No horizontal overflow or JavaScript page errors were observed.

`node --check` passed for both new JavaScript modules. `git diff --check` passed. This static repository has no package manifest, TypeScript build or package-install step. The desktop application's tests were not rerun for this portfolio-only change. The reference to 42 automated application tests retains the previously verified application evidence.

An additional 375 px check doubled computed text sizes: no horizontal page overflow or clipped text containers were found. Tab moves through the expression controls in their visual order. With JavaScript disabled, the local image stays visible and the inactive animation controls stay hidden. The original dark theme was retained; no alternate light theme was introduced or claimed as tested.

Final publication evidence is recorded in the Obsidian project log after the production deployment is checked.
