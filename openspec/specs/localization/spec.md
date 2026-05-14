# localization

## Purpose

Document the current observed localization model for the Precise MBC site so future changes can extend or revise internationalized behavior from a known baseline.

## Requirements

### Requirement: The site supports English and Spanish as the only current locales

The site SHALL recognize exactly two public locales in the current implementation.

#### Scenario: Supported locales are configured centrally

- **WHEN** localization is evaluated
- **THEN** the supported locales are `en` and `es`
- **AND** English is the default locale

### Requirement: Localized paths are derived from a shared path-localization utility

The site SHALL construct locale-specific paths by prefixing supported locale segments to public routes.

#### Scenario: Localized path generation keeps route shape

- **WHEN** a non-localized route shape is converted to a locale-specific path
- **THEN** the result is prefixed with `/en` or `/es`
- **AND** the homepage resolves to `/en/` or `/es/`
- **AND** non-home routes preserve their remaining path after the locale prefix

#### Scenario: Existing locale prefixes can be normalized away

- **WHEN** a localized path is analyzed for alternate-locale generation
- **THEN** the active locale prefix can be removed
- **AND** the remaining route shape can be reused for the other supported locale

### Requirement: Localized pages consume shared translation keys

The site SHALL source translatable marketing copy from a centralized translation dictionary.

#### Scenario: Localized homepage metadata is translated

- **WHEN** the English homepage is rendered
- **THEN** it uses English metadata values from the translation source

- **WHEN** the Spanish homepage is rendered
- **THEN** it uses Spanish metadata values from the translation source

#### Scenario: Shared homepage sections receive locale context

- **WHEN** a localized homepage renders shared section components
- **THEN** each shared section receives the active locale
- **AND** visible copy is resolved through the shared translation utility

### Requirement: Missing locale-specific copy falls back to English

The site SHALL provide a fallback behavior for translation lookups.

#### Scenario: Missing key resolves through fallback

- **WHEN** a translation key is requested for the active locale
- **AND** that locale does not define the key
- **THEN** the site falls back to the English value
- **AND** if no English value exists, the raw key may be returned

### Requirement: Visitors can switch between localized equivalents

The site SHALL provide a locale-switch control that links to the same route in the alternate supported locale.

#### Scenario: Language switcher targets the alternate locale

- **WHEN** a visitor views an English page
- **THEN** the language switcher links to the Spanish version of the current route

- **WHEN** a visitor views a Spanish page
- **THEN** the language switcher links to the English version of the current route

#### Scenario: Query string is preserved when switching languages

- **WHEN** a visitor activates the language switcher from a route with query parameters
- **THEN** the alternate-locale link preserves the same query string

### Requirement: Legal pages are localized by route and page content

The site SHALL publish separate localized legal pages for each supported locale.

#### Scenario: Privacy and terms pages exist in both locales

- **WHEN** a visitor browses legal content in English
- **THEN** English privacy and terms pages are available

- **WHEN** a visitor browses legal content in Spanish
- **THEN** Spanish privacy and terms pages are available

#### Scenario: Legal pages set locale-specific document language

- **WHEN** a localized legal page is rendered
- **THEN** it uses the shared base layout with the matching locale
- **AND** the document language reflects the selected locale

## Notes

- Current observations are based on `astro.config.mjs`, `src/i18n/ui.ts`, `src/i18n/utils.ts`, localized pages under `src/pages/en` and `src/pages/es`, and `src/components/layout/LanguageSwitcher.astro`.
- This spec documents current behavior only; it does not require translation completeness auditing beyond the currently observed fallback behavior.
