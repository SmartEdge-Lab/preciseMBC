# marketing-homepage

## Purpose

Document the current observed homepage composition and messaging structure for the Precise MBC marketing site so future content or conversion changes can build from a known baseline.

## Requirements

### Requirement: The localized homepage follows a fixed section sequence

The site SHALL render the homepage as a consistent ordered set of shared sections for each supported locale.

#### Scenario: Homepage section order is consistent

- **WHEN** a localized homepage is rendered
- **THEN** it presents the following section flow:
  1. hero
  2. trust bar
  3. services
  4. OBGYN specialty / revenue risk
  5. why us
  6. process
  7. stats
  8. testimonials
  9. pricing teaser
  10. CTA lead block
  11. FAQ
  12. contact form

### Requirement: The hero section establishes positioning and immediate contact options

The site SHALL use the hero section to communicate audience fit, value proposition, and immediate action paths.

#### Scenario: Hero presents positioning copy and proof metrics

- **WHEN** the homepage hero is rendered
- **THEN** it shows localized eyebrow, title, and subtitle messaging
- **AND** it includes a set of four supporting metrics with icons

#### Scenario: Hero offers two primary action paths

- **WHEN** the homepage hero is rendered
- **THEN** it includes a primary CTA to the localized contact section
- **AND** it includes a WhatsApp outbound CTA for direct messaging

#### Scenario: Hero includes a public-facing visual

- **WHEN** the homepage hero is rendered
- **THEN** it displays the shared hero image asset with descriptive alternative text

### Requirement: The trust bar communicates credibility themes

The site SHALL use the trust bar to reinforce core credibility signals.

#### Scenario: Trust bar displays four proof themes

- **WHEN** the trust bar is rendered
- **THEN** it presents four short credibility items
- **AND** those items cover privacy-minded workflows, coding background, OBGYN focus, and claims follow-up discipline

### Requirement: The services section summarizes the operating scope

The site SHALL use the services section to present the primary billing service categories.

#### Scenario: Services grid presents six service cards

- **WHEN** the services section is rendered
- **THEN** it shows six service entries
- **AND** the entries cover charge entry, claim submission, payment posting, A/R follow-up, denial management, and credentialing

### Requirement: The specialty section frames OBGYN-specific revenue risk

The site SHALL use the specialty section to explain why OBGYN specialization matters.

#### Scenario: Specialty section highlights coding and procedure examples

- **WHEN** the specialty section is rendered
- **THEN** it includes a set of example codes or procedure references relevant to OBGYN billing

#### Scenario: Specialty section presents risk categories

- **WHEN** the specialty section is rendered
- **THEN** it presents multiple revenue-risk cards describing common OBGYN billing failure points
- **AND** it ends with a CTA back to the localized contact section

### Requirement: The why-us section states differentiators

The site SHALL use the why-us section to describe core differentiators in a concise card-based format.

#### Scenario: Why-us section presents four differentiators

- **WHEN** the section is rendered
- **THEN** it shows four concise differentiator cards
- **AND** those cards explain specialization, operational visibility, EHR-ready workflows, and hands-on support

### Requirement: The process section explains onboarding and service flow

The site SHALL use the process section to describe the working relationship as a four-step sequence.

#### Scenario: Process section presents four steps

- **WHEN** the process section is rendered
- **THEN** it shows four ordered steps
- **AND** those steps cover practice review, onboarding and access, daily billing execution, and reporting and oversight

### Requirement: The stats section emphasizes performance-oriented proof points

The site SHALL use the stats section to foreground four headline metrics.

#### Scenario: Stats section displays four metrics

- **WHEN** the stats section is rendered
- **THEN** it shows four localized metric blocks with values, labels, and supporting subtext

### Requirement: The testimonials section provides social proof

The site SHALL use the testimonials section to present client-style endorsements.

#### Scenario: Testimonials section displays three quotes

- **WHEN** the testimonials section is rendered
- **THEN** it shows three testimonial cards
- **AND** each card includes a quote, an attributed name, and a role/location line

### Requirement: The pricing teaser section frames service packaging without final quoting

The site SHALL use the pricing section to orient visitors around pricing structure rather than finalize pricing online.

#### Scenario: Pricing teaser presents three plan tiers

- **WHEN** the pricing section is rendered
- **THEN** it shows three pricing-tier cards
- **AND** one card is visually emphasized as featured

#### Scenario: Pricing teaser directs visitors to contact

- **WHEN** a visitor interacts with a pricing-tier CTA
- **THEN** the CTA routes to the localized contact section
- **AND** the section includes a note explaining that final scope and pricing are confirmed after practice review

### Requirement: The homepage includes two conversion-focused follow-up sections

The site SHALL use the CTA and contact sections as distinct conversion surfaces near the end of the homepage.

#### Scenario: CTA block provides a short lead form

- **WHEN** the CTA block is rendered
- **THEN** it presents localized conversion messaging and the short quick-lead form

#### Scenario: Contact section provides the fuller inquiry path

- **WHEN** the contact section is rendered
- **THEN** it presents the full inquiry form and business contact details

### Requirement: The FAQ section addresses common objections and fit questions

The site SHALL use the FAQ section to handle recurring prospect questions in expandable form.

#### Scenario: FAQ section displays expandable items

- **WHEN** the FAQ section is rendered
- **THEN** it shows eight expandable question-and-answer items
- **AND** the topics include pricing, fit, EHR compatibility, onboarding, credentialing, specialization, denied claims, and HIPAA/data security

## Notes

- Current observations are based on `src/pages/en/index.astro`, `src/pages/es/index.astro`, and section components under `src/components/sections/`.
- This spec documents current homepage composition and messaging structure only; it does not judge factual claims, legal sufficiency, or conversion effectiveness.
