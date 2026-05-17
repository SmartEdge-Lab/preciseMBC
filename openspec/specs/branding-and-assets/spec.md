# branding-and-assets

## Purpose

Document the current observed brand identity, visual tokens, and public asset behavior for the Precise MBC site so future design or content changes can build from a known baseline.

## Requirements

### Requirement: The site uses a consistent business identity across public surfaces

The site SHALL present a consistent public-facing business name and descriptor across shared UI surfaces.

#### Scenario: Shared brand name appears in core shell

- **WHEN** a visitor views the shared header, footer, or root transition page
- **THEN** the brand name shown is `Precise MBC`

#### Scenario: Shared descriptor appears alongside the brand

- **WHEN** the brand lockup is rendered in shared shell surfaces
- **THEN** it is accompanied by the descriptor `Medical Billing & Coding`

### Requirement: The site uses theme-aware logo assets

The site SHALL swap logo variants based on the resolved theme.

#### Scenario: Light theme uses the default logo asset

- **WHEN** the resolved document theme is light
- **THEN** the shared theme logo component displays `/logo.png`

#### Scenario: Dark theme uses the alternate logo asset

- **WHEN** the resolved document theme is dark
- **THEN** the shared theme logo component displays `/logo_white.png`

#### Scenario: Shared header uses the theme-aware logo system

- **WHEN** the header brand lockup is rendered
- **THEN** it uses the shared theme-aware logo component

#### Scenario: Footer uses a dark-surface logo treatment

- **WHEN** the footer brand lockup is rendered
- **THEN** it displays the white logo asset against the dark footer surface

### Requirement: The site uses theme-aware favicon behavior

The site SHALL expose favicon assets that respond to light and dark presentation modes.

#### Scenario: Light and dark favicon variants are available

- **WHEN** page icon metadata is rendered
- **THEN** a light-mode favicon uses `/favicon.png`
- **AND** a dark-mode favicon uses `/favicon-white.png`

#### Scenario: Dynamic favicon swaps with resolved theme

- **WHEN** the resolved document theme changes client-side
- **THEN** the active favicon is updated to match the resolved light or dark theme

### Requirement: The site exposes a small shared public asset set

The site SHALL use a centralized set of public visual assets for identity and hero imagery.

#### Scenario: Public brand assets are available

- **WHEN** the site’s public assets are evaluated
- **THEN** logo, alternate logo, favicon, alternate favicon, and SVG favicon wrapper assets are present

#### Scenario: Hero imagery is part of the public asset set

- **WHEN** the homepage hero is rendered
- **THEN** it uses the shared hero image asset from the public directory

### Requirement: The site uses a centralized visual token system

The site SHALL define shared visual design tokens in global styles.

#### Scenario: Shared color families are defined

- **WHEN** the design token layer is evaluated
- **THEN** it defines brand-oriented color families for burgundy, dusty rose, plum, ivory, and champagne roles

#### Scenario: Shared typography tokens are defined

- **WHEN** the design token layer is evaluated
- **THEN** it defines a display font and a sans-serif body font used across the site

#### Scenario: Shared shadow tokens are defined

- **WHEN** reusable elevation styling is evaluated
- **THEN** shared card-style shadow tokens are available for common surface treatments

### Requirement: The site uses a small shared badge vocabulary for visual emphasis

The site SHALL provide reusable badge treatments aligned with the brand palette.

#### Scenario: Badge variants map to named palette roles

- **WHEN** shared badge components are rendered
- **THEN** they can use predefined variants including burgundy, rose, champagne, plum, and neutral

### Requirement: Brand identity is reflected in metadata and messaging copy

The site SHALL carry the same business identity through metadata and visible messaging.

#### Scenario: Metadata uses the Precise MBC identity

- **WHEN** page metadata or structured business metadata is rendered
- **THEN** it identifies the business as Precise MBC / Precise Medical Billing and Coding

#### Scenario: Marketing copy reinforces the same brand name

- **WHEN** visitors encounter public marketing and legal copy
- **THEN** the copy consistently references Precise MBC as the business identity

## Notes

- Current observations are based on `src/components/ui/ThemeLogo.astro`, `src/components/ui/Badge.astro`, shared shell components, `src/styles/global.css`, layout metadata behavior, and public assets under `public/`.
- This spec documents the current observed brand system and asset behavior only; it does not define a formal external brand guideline or asset governance process.
