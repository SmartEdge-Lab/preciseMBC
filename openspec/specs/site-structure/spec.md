# site-structure

## Purpose

Document the current observed site structure for the Precise MBC brownfield Astro site so future OpenSpec changes can reference an agreed baseline.

## Requirements

### Requirement: Root entrypoint redirects visitors to the default localized site

The site SHALL treat the root path `/` as a transition entrypoint rather than the primary marketing page.

#### Scenario: Root path sends visitors to English

- **WHEN** a visitor requests `/`
- **THEN** the page renders a temporary loading experience
- **AND** the page indicates that the visitor is being taken to the English version
- **AND** the page redirects to `/en/`

### Requirement: The site exposes localized route groups for English and Spanish

The site SHALL organize public pages under locale-prefixed paths.

#### Scenario: English route group exists

- **WHEN** a visitor browses the English site
- **THEN** the primary homepage is available at `/en/`
- **AND** legal pages are available under `/en/privacy` and `/en/terms`

#### Scenario: Spanish route group exists

- **WHEN** a visitor browses the Spanish site
- **THEN** the primary homepage is available at `/es/`
- **AND** legal pages are available under `/es/privacy` and `/es/terms`

### Requirement: Localized homepages share a common marketing page structure

The site SHALL compose each localized homepage from shared layout and reusable section components.

#### Scenario: Localized homepage uses shared shell

- **WHEN** a localized homepage is rendered
- **THEN** it uses the shared base layout
- **AND** it includes the shared header and footer
- **AND** it includes the shared WhatsApp floating widget

#### Scenario: Localized homepage renders the core section sequence

- **WHEN** a localized homepage is rendered
- **THEN** it includes the core marketing sections for hero, trust, services, specialty, differentiators, process, stats, testimonials, pricing teaser, call to action, FAQ, and contact

### Requirement: Shared navigation targets localized anchors and legal pages

The site SHALL keep navigation within the active locale.

#### Scenario: Header links stay within the current locale

- **WHEN** a visitor uses primary navigation from a localized page
- **THEN** section links resolve to anchors under the current locale base path
- **AND** the main call to action resolves to the localized contact section

#### Scenario: Footer links stay within the current locale

- **WHEN** a visitor uses footer navigation from a localized page
- **THEN** marketing resource links resolve to localized anchors
- **AND** legal links resolve to localized privacy and terms pages

### Requirement: The layout publishes locale-aware metadata relationships

The site SHALL emit SEO relationships that connect localized equivalents.

#### Scenario: Alternate locale metadata is present

- **WHEN** a localized page is rendered through the shared layout
- **THEN** it publishes an alternate link for the active locale
- **AND** it publishes an alternate link for the opposite supported locale
- **AND** it publishes an `x-default` alternate pointing to the English homepage

## Notes

- Current observations are based on `src/pages/`, `src/layouts/BaseLayout.astro`, `src/components/layout/`, `src/i18n/utils.ts`, and current localized page composition.
- This spec captures current behavior only and does not imply that the current information architecture is final or ideal.
