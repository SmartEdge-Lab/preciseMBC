# seo-and-metadata

## Purpose

Document the current observed SEO, metadata, and structured-discovery behavior for the Precise MBC site so future changes can evolve search and sharing behavior from a known baseline.

## Requirements

### Requirement: The site declares a single canonical production origin

The site SHALL use `https://precisembc.com` as the configured site origin.

#### Scenario: Astro site origin is configured

- **WHEN** production metadata is generated
- **THEN** the configured site origin is `https://precisembc.com`

### Requirement: Localized pages emit shared SEO metadata through the base layout

The site SHALL centralize standard SEO output in the shared base layout.

#### Scenario: Page title and description are emitted through shared SEO handling

- **WHEN** a localized content page is rendered through the base layout
- **THEN** it emits the page title
- **AND** it emits the page description
- **AND** it emits a canonical URL

#### Scenario: Open Graph metadata is emitted

- **WHEN** a localized content page is rendered through the base layout
- **THEN** it emits Open Graph metadata for title, description, canonical URL, and image
- **AND** the Open Graph type is `website`

#### Scenario: Twitter card metadata is emitted

- **WHEN** a localized content page is rendered through the base layout
- **THEN** it emits a `summary_large_image` Twitter card
- **AND** it includes title, description, and image values

### Requirement: Locale-aware metadata is emitted for supported languages

The site SHALL reflect the active language in alternate and locale metadata.

#### Scenario: Active locale metadata is emitted

- **WHEN** an English localized page is rendered
- **THEN** its Open Graph locale is `en_US`

- **WHEN** a Spanish localized page is rendered
- **THEN** its Open Graph locale is `es_MX`

#### Scenario: Alternate locale links are emitted

- **WHEN** a localized page is rendered through the base layout
- **THEN** it emits an alternate link for the current locale
- **AND** it emits an alternate link for the opposite supported locale
- **AND** it emits an `x-default` alternate pointing to `https://precisembc.com/en/`

### Requirement: The site exposes sitemap behavior for localized routes

The site SHALL generate sitemap output with localized awareness.

#### Scenario: Sitemap uses localized configuration

- **WHEN** sitemap output is generated
- **THEN** English is treated as the default sitemap locale
- **AND** English maps to `en-US`
- **AND** Spanish maps to `es-MX`

### Requirement: The layout emits structured business metadata

The site SHALL publish MedicalBusiness structured data in the shared base layout.

#### Scenario: MedicalBusiness JSON-LD is present

- **WHEN** a localized content page is rendered through the base layout
- **THEN** it includes JSON-LD with schema type `MedicalBusiness`
- **AND** it identifies the business as Precise MBC / Precise Medical Billing and Coding
- **AND** it includes contact, address, Florida service area, and medical specialty information

### Requirement: The site emits crawler and browser metadata defaults

The site SHALL expose baseline crawler and browser metadata through shared layout behavior.

#### Scenario: Standard crawler metadata is emitted

- **WHEN** a localized content page is rendered through the base layout
- **THEN** it emits a `robots` directive of `index, follow`
- **AND** it emits a generator meta tag

#### Scenario: Root loading page is not indexed

- **WHEN** the root transition page `/` is rendered
- **THEN** it emits a `robots` directive of `noindex, follow`

### Requirement: The site publishes theme-aware icon and browser-color behavior

The site SHALL expose icon metadata and adjust browser chrome color to the resolved theme.

#### Scenario: Theme-aware favicon links are present

- **WHEN** a page is rendered
- **THEN** it includes light and dark favicon link variants
- **AND** it includes a general icon for broader device support
- **AND** it includes an Apple touch icon

#### Scenario: Theme color responds to the resolved theme

- **WHEN** the current theme resolves to light
- **THEN** the `theme-color` meta value is a blue tone

- **WHEN** the current theme resolves to dark
- **THEN** the `theme-color` meta value is a dark slate tone

### Requirement: The homepage provides a shareable hero image and direct contact pathways

The site SHALL expose visible assets and contact metadata that reinforce discovery and sharing.

#### Scenario: Hero media asset is available on the homepage

- **WHEN** the homepage is rendered
- **THEN** it includes a public hero image asset

#### Scenario: Shareable and contact-oriented metadata is aligned with business identity

- **WHEN** homepage and layout metadata are evaluated together
- **THEN** they align with Precise MBC branding, business contact information, and public-facing medical billing positioning

## Notes

- Current observations are based on `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `src/components/sections/Hero.astro`, and public assets under `public/`.
- This spec documents current observed SEO and metadata behavior only; it does not verify external index coverage or search performance.
