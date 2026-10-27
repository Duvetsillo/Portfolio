# Motion audit — 17 October 2026
Baseline: 0dba23e. Scope: existing static portfolio; CSS, vanilla JavaScript, Canvas mascot. Read-only audit under improve-animations; no changes to baseline motion sources.

| Severity | Location | Before | Proposed after | Why |
| --- | --- | --- | --- | --- |
| Medium | script.js:31-63 | Typewriter removes and retypes project copy forever | Keep project copy static; reserve motion for state feedback | Repeated text removal interrupts reading |
| Low | portfolio-visual.js:9 | Uptime timer writes every second even in a hidden tab | Pause timer when hidden; use an explicit observation timestamp | Redundant background work; elapsed time is not live monitoring |

Karen already suspends rendering offscreen and when the document is hidden; reduced motion and touch frame limits are present (karen-pet.js:140-161). Do not report these as missing.

Opportunities: short press feedback on document controls; immediate keyboard gallery navigation; optional project image hover on fine pointers. No standalone implementation plans selected. Audit recommendations remain proposals; the preserved old page and its motion sources are unchanged.
