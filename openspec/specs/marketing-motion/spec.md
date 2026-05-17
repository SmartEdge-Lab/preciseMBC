# marketing-motion

## ADDED Requirements

### Requirement: The homepage supports a coordinated motion system

The site SHALL add a restrained motion layer to the marketing homepage that improves clarity and perceived polish without distracting from content or conversion.

#### Scenario: Motion reinforces content hierarchy

- **WHEN** a visitor lands on the homepage
- **THEN** motion helps draw attention to the hero, proof points, and CTAs
- **AND** motion does not compete with reading or form completion

### Requirement: The hero supports entrance animation

The site SHALL animate hero content on initial page load.

#### Scenario: Hero copy enters in sequence

- **WHEN** the localized homepage first renders
- **THEN** the hero eyebrow, heading, supporting copy, and CTA buttons animate into view in a coordinated sequence

#### Scenario: Hero visual block enters with supporting motion

- **WHEN** the localized homepage first renders
- **THEN** the hero image and supporting stat cards animate into view with subtle complementary timing

### Requirement: Key homepage sections support reveal-on-scroll behavior

The site SHALL reveal major marketing sections as they enter the viewport.

#### Scenario: Section groups animate on viewport entry

- **WHEN** a visitor scrolls through the homepage
- **THEN** major section groups can animate from a hidden-to-visible state on entry
- **AND** the reveal timing supports reading flow rather than interrupting it

#### Scenario: Card-based groups support staggered entrance

- **WHEN** card or grid-based groups enter the viewport
- **THEN** sibling items can animate with a staggered reveal pattern

### Requirement: Motion targets are scoped to appropriate homepage elements

The site SHALL animate selected surfaces rather than every visible element.

#### Scenario: High-value sections receive motion priority

- **WHEN** motion is applied to the homepage
- **THEN** priority targets include hero content, trust items, service cards, specialty/risk cards, differentiator cards, process steps, testimonials, pricing cards, CTA content, and selected contact-section surfaces

#### Scenario: Low-value or noise-prone elements avoid unnecessary motion

- **WHEN** motion targets are chosen
- **THEN** purely decorative or dense reading content is left static unless motion clearly improves comprehension

### Requirement: Motion honors reduced-motion accessibility preferences

The site SHALL reduce or disable non-essential animation for visitors who prefer reduced motion.

#### Scenario: Reduced-motion visitors get a calmer experience

- **WHEN** the visitor’s environment indicates `prefers-reduced-motion`
- **THEN** non-essential timeline and scroll-linked motion is reduced, simplified, or disabled
- **AND** content remains fully usable and visible

### Requirement: Motion preserves performance on a static marketing site

The site SHALL use animation patterns appropriate for performance-sensitive marketing pages.

#### Scenario: Animation uses performance-safe properties

- **WHEN** UI elements animate
- **THEN** motion primarily uses transform and opacity-based properties rather than layout-heavy properties

#### Scenario: Scroll-based motion is implemented conservatively

- **WHEN** scroll-triggered motion is applied
- **THEN** it is scoped to meaningful sections
- **AND** it avoids excessive trigger density or over-animated page behavior

### Requirement: Motion integrates cleanly with the existing Astro architecture

The site SHALL fit the motion layer into the current component structure without forcing a page rewrite.

#### Scenario: Existing localized pages keep the same structure

- **WHEN** motion is added
- **THEN** the current route structure, localization model, and shared section composition remain intact

#### Scenario: Motion works across both supported locales

- **WHEN** animated homepage behavior is applied
- **THEN** it works for both English and Spanish localized pages

### Requirement: Conversion surfaces receive restrained emphasis

The site SHALL use subtle motion to support, not pressure, lead-capture actions.

#### Scenario: CTA-related motion stays tasteful

- **WHEN** motion is applied near CTA, pricing, WhatsApp, or contact surfaces
- **THEN** the animation emphasizes clarity and confidence
- **AND** it avoids aggressive looping, bouncing, or attention-hijacking behavior
