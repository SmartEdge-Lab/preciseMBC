# Proposal: add-gsap-animations

## Summary

Add tasteful GSAP-driven motion to the Precise MBC marketing experience so the site feels more polished, premium, and intentional without hurting clarity, accessibility, or performance.

## Why

The current site has a strong structure and message, but it is mostly static. Subtle animation can:

- improve perceived quality
- guide attention through the homepage narrative
- make key CTAs feel more responsive
- reinforce the brand’s “modern, specialized, premium” positioning

## Scope

This change proposes motion for the existing Astro marketing site using GSAP, with emphasis on:

- hero entrance motion
- scroll-triggered section reveals
- staggered card/grid entrances
- subtle CTA and trust-building motion accents
- accessible reduced-motion behavior
- performance-safe animation patterns appropriate for a static marketing site

## Non-goals

- Rewriting page structure or copy
- Changing information architecture
- Replacing the current theme system
- Adding decorative motion that distracts from conversion
- Animating every element on the page

## Proposed motion direction

- **Hero:** soft load-in for eyebrow, headline, copy, CTA buttons, image, and stats
- **Trust/Services/Why Us/Testimonials/Pricing:** staggered reveal-on-scroll
- **Process:** sequential step reveal tied to viewport entry
- **Stats:** subtle number/card entrance emphasis, not flashy count-up unless justified
- **FAQ:** minimal open/close enhancement only if it preserves native usability
- **CTA / Contact:** restrained emphasis to support conversion, not aggressive motion

## Constraints

- Motion must feel premium and calm, not gimmicky
- Motion must degrade gracefully when JS is unavailable
- Motion must honor `prefers-reduced-motion`
- Motion should prioritize transforms and opacity over layout-heavy properties
- Motion should be scoped cleanly to existing components and Astro patterns

## Dependencies

- GSAP skill set installed for planning and implementation guidance:
  - `gsap-core`
  - `gsap-timeline`
  - `gsap-scrolltrigger`
  - `gsap-performance`
  - `gsap-utils`

## Outcome

Precise MBC gains a documented animation layer that can be implemented safely and consistently across the current homepage and shared UI surfaces.
