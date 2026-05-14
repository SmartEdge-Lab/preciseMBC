# legal-pages

## Purpose

Document the current observed legal-page behavior for the Precise MBC site so future policy or compliance updates can build from a known baseline.

## Requirements

### Requirement: The site publishes dedicated privacy and terms pages in both supported locales

The site SHALL expose standalone legal pages for privacy and terms content in English and Spanish.

#### Scenario: English legal routes exist

- **WHEN** a visitor browses English legal content
- **THEN** privacy content is available at `/en/privacy`
- **AND** terms content is available at `/en/terms`

#### Scenario: Spanish legal routes exist

- **WHEN** a visitor browses Spanish legal content
- **THEN** privacy content is available at `/es/privacy`
- **AND** terms content is available at `/es/terms`

### Requirement: Legal pages use the shared site shell

The site SHALL render legal pages through the same shared layout and navigation shell as other localized pages.

#### Scenario: Legal pages use shared layout structure

- **WHEN** any legal page is rendered
- **THEN** it uses the shared base layout
- **AND** it includes the shared header
- **AND** it includes the shared footer
- **AND** its main content is anchored at `#main-content`

### Requirement: Legal pages present a simple document-style reading layout

The site SHALL display legal content in a constrained long-form reading format.

#### Scenario: Legal content uses a narrow reading container

- **WHEN** a legal page is rendered
- **THEN** the primary content is constrained to a narrower reading width than the homepage
- **AND** the page uses document-style heading and paragraph structure

#### Scenario: Legal pages use prominent page titles

- **WHEN** a legal page is rendered
- **THEN** it displays a large top-level page heading for the legal document title

### Requirement: Privacy pages disclose data-handling topics in the current template

The site SHALL present privacy content using a stable topic structure in each locale.

#### Scenario: Privacy template includes core policy sections

- **WHEN** a privacy page is rendered
- **THEN** it includes sections covering information collection, HIPAA compliance, information use, data security, and contact

#### Scenario: Privacy page provides an email contact

- **WHEN** a privacy page is rendered
- **THEN** it provides an email contact path for privacy questions

### Requirement: Terms pages disclose service relationship topics in the current template

The site SHALL present terms content using a stable topic structure in each locale.

#### Scenario: Terms template includes core agreement sections

- **WHEN** a terms page is rendered
- **THEN** it includes sections covering services, HIPAA business associate context, client responsibilities, limitation of liability, and contact

#### Scenario: Terms page provides an email contact

- **WHEN** a terms page is rendered
- **THEN** it provides an email contact path for general legal or service questions

### Requirement: Legal pages are explicitly presented as templates

The site SHALL indicate that the current legal content is not yet final published legal advice.

#### Scenario: Template disclaimer is shown

- **WHEN** a legal page is rendered
- **THEN** it displays a last-updated line
- **AND** it states that the content is a template
- **AND** it advises consulting a healthcare attorney before publishing

### Requirement: Legal pages are localized by route, metadata, and visible copy

The site SHALL localize legal pages as full-page variants rather than as a single mixed-language document.

#### Scenario: English legal page metadata and copy are in English

- **WHEN** an English legal page is rendered
- **THEN** its page title and description metadata are English
- **AND** its visible headings and body copy are English

#### Scenario: Spanish legal page metadata and copy are in Spanish

- **WHEN** a Spanish legal page is rendered
- **THEN** its page title and description metadata are Spanish
- **AND** its visible headings and body copy are Spanish

## Notes

- Current observations are based on `src/pages/en/privacy.astro`, `src/pages/es/privacy.astro`, `src/pages/en/terms.astro`, and `src/pages/es/terms.astro`.
- This spec documents the current observed legal-page implementation only; it does not assert legal sufficiency, regulatory completeness, or production readiness of the policy text.
