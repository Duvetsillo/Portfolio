# Motion decisions

The user requested a more distinctive portfolio, then rejected generated PC artwork. Only existing portrait and real screenshots remain. Native CSS and WAAPI implement the redesign; the find-animation-opportunities pass itself was read-only.

| Location | Before | After | Purpose / frequency |
| --- | --- | --- | --- |
| `taller.css`, hero | Static text and portrait | 650ms text and 800ms visual entrance; transform and opacity, cubic-bezier(.23,1,.32,1) | Hierarchy; one page entrance |
| `perfil.js`, preview selection | No preview selector | 220ms opacity .45 to 1 and translateY(6px) to 0 | State indication; occasional |
| `taller.css`, buttons | Uneven press feedback | scale(.98), 120ms, same ease-out | Feedback; frequent but subtle |
| `taller.css`, dialog | Immediate appearance | scale(.97) and opacity .3 to 1, 200ms, same ease-out | Spatial continuity; occasional |

Reduced motion removes transforms and transitions. Keyboard actions are immediate. Hover movement only runs with a fine pointer and hover support. No loop or timer runs at rest; the preview transition is cancelled before replacement and also when reduced-motion preference changes.

Rejected candidates: animated biography text (reading burden), keyboard navigation (frequency), perpetual screenshot float (no purpose), numeric skill meters (no measurement evidence). The highest-value change is the project selector because it lets the visitor sample real work without leaving the opening.

The recipe is already implemented under the user's redesign request, so no separate handoff or approval is needed.
