# Portfolio redesign

Mode: Experience. User rejected the prior flat design as too simple. Confirmed full profile: hardware, support, infrastructure and AI projects. Previously chose direct local implementation; current “Sigue” confirms continuation. No publication.

## Direction contract
THESIS: A builder's portfolio with tangible hardware and real software at the same scale. Projects lead, biography supports.
OWN-WORLD: Cool graphite #101923, slate surface #192632, raised slate #223342, silver #edf2f6, muted steel #afc0d0, accent #9cb6ff and solid action #3f60cc. Satoshi display and body, 16px media corners, 8px controls. Light equivalent respects system preference.
STORY: Explore hardware, software and infrastructure in the opening stage, inspect real project galleries, then read the person and qualifications behind them.
FIRST VIEWPORT: Large two-line statement left, large actual Aetherion screenshot right, project selectors above it, two clear actions below the copy. Header 72px on desktop. A coordinated entrance uses 650ms for the text and 800ms for the visual; subsequent transitions respond to selection. User rejected the conceptual PC artwork; it is removed and must not appear. Only the existing portrait and real project screenshots are authorized visual material.
FORM: Seventh grounded direction, an industrial design exhibition. Grounded list: maker monograph, software exhibition, hardware assembly manual, component archive, design-school degree show, homelab atlas, industrial design exhibition. Seed 713a453f. HyperCard declined: disconnected archive navigation; retain explicit selectable destinations. Collider declined: false measurement grammar; retain selective emphasis. Signboard alley declined: unrelated setting; retain varied project scale. Pop sleeve competitive in identity, weaker in technical proof; retain image-led confidence. User chose direct build; no additional approval round.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Audit baseline
Static HTML/CSS/JS, Manrope remote font, navy hero then light sections, portrait card, repeated split projects. Anchors, navigation, document paths and bilingual content preserved. No route or SEO metadata removal. The former version remains version-simple.html; original anterior.html is intact.

## Dials and motion filter
DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4. Native CSS and WAAPI, no library necessary.
Surviving opportunities: hero first entrance (rare, hierarchy, 650ms text / 800ms visual transform/opacity); stage selection (occasional, state indication, 220ms cubic-bezier(.23,1,.32,1)); gallery opening (occasional, spatial continuity, 200ms same curve); button press (frequent, feedback, 120ms scale .98).
Rejected: moving project text (reading), animated keyboard navigation (frequency), perpetual image float (no purpose), animated skill levels (no real measurement). Keyboard-triggered actions are immediate. Reduced motion uses opacity or instant state changes.
Search note: ui-ux-pro-max's design-system query returned FAQ/documentation and retry returned developer tooling, neither fits. Use its general contrast, focus, responsive and performance guidance only; do not persist the mismatched design-system recommendation.
