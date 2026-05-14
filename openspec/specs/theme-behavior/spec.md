# theme-behavior

## Purpose

Document the current observed theme-selection and theme-response behavior for the Precise MBC site so future appearance or accessibility changes can build from a known baseline.

## Requirements

### Requirement: The site supports light, dark, and system-resolved theme preference handling

The site SHALL maintain a theme preference model that can resolve into a concrete visual theme.

#### Scenario: Theme preference values are normalized

- **WHEN** a theme preference is applied
- **THEN** only `light`, `dark`, or `system` are considered valid preference values
- **AND** any other value resolves to `system`

#### Scenario: System preference resolves to a concrete theme

- **WHEN** the active preference is `system`
- **THEN** the site resolves the effective theme from the browser color-scheme media query

### Requirement: The site persists theme preference in browser storage

The site SHALL remember the visitor’s theme preference between page loads.

#### Scenario: Theme preference is stored

- **WHEN** a visitor selects a theme preference
- **THEN** the preference is stored in browser local storage using the shared theme storage key

#### Scenario: Stored preference is restored on load

- **WHEN** a page initializes theme behavior
- **THEN** it reads the stored preference from local storage
- **AND** it applies that preference before rendering shared theme-dependent behavior

### Requirement: The document reflects both preference and resolved theme state

The site SHALL expose theme state through document-level attributes and browser color-scheme hints.

#### Scenario: Document data attributes are updated

- **WHEN** a theme preference is applied
- **THEN** the document root stores the chosen preference in `data-theme-preference`
- **AND** it stores the resolved theme in `data-theme`

#### Scenario: Browser color scheme is updated

- **WHEN** a theme preference is applied
- **THEN** the document root `color-scheme` style is set to the resolved theme

### Requirement: The site reacts to operating-system theme changes when using system preference

The site SHALL re-resolve the theme if the OS/browser color-scheme changes while the user is following system preference.

#### Scenario: System-mode theme updates on media-query change

- **WHEN** the browser color-scheme media query changes
- **AND** the active preference is `system`
- **THEN** the site reapplies the system-based preference
- **AND** the resolved theme updates accordingly

### Requirement: The shared theme toggle exposes explicit light and dark controls

The site SHALL provide a localized control for directly choosing light or dark mode.

#### Scenario: Theme toggle labels are localized

- **WHEN** the theme toggle is rendered in English
- **THEN** it uses English labels for the control and options

- **WHEN** the theme toggle is rendered in Spanish
- **THEN** it uses Spanish labels for the control and options

#### Scenario: Theme toggle selection updates preference

- **WHEN** a visitor activates the light or dark toggle option
- **THEN** the corresponding theme preference is applied through the shared theme setter

#### Scenario: Theme toggle reflects the active resolved choice

- **WHEN** the toggle syncs to current theme state
- **THEN** the active option is marked with `aria-pressed`
- **AND** the active visual state matches the resolved theme

### Requirement: Theme changes emit a shared event for dependent UI

The site SHALL publish a shared browser event when the resolved theme changes.

#### Scenario: Theme change event is dispatched

- **WHEN** a theme preference is applied
- **THEN** a `themechange` event is dispatched on `window`
- **AND** the event includes both the chosen preference and resolved theme in its detail payload

### Requirement: Theme-aware brand assets switch with resolved theme

The site SHALL adapt brand imagery and browser icon treatment to the resolved theme.

#### Scenario: Theme logo switches asset variants

- **WHEN** the resolved theme is light
- **THEN** the shared theme logo shows the light logo asset

- **WHEN** the resolved theme is dark
- **THEN** the shared theme logo shows the dark logo asset

#### Scenario: Dynamic favicon switches with theme

- **WHEN** the resolved theme changes
- **THEN** the active favicon swaps to the light or dark favicon asset that matches the resolved theme

#### Scenario: Browser theme-color metadata updates

- **WHEN** the resolved theme is light
- **THEN** the `theme-color` meta value uses the light-theme blue value

- **WHEN** the resolved theme is dark
- **THEN** the `theme-color` meta value uses the dark-theme slate value

### Requirement: Shared visual tokens adapt under dark mode

The site SHALL use document-level dark-mode overrides to restyle shared surfaces and text.

#### Scenario: Dark mode changes shared semantic surface variables

- **WHEN** the document root is in dark mode
- **THEN** background, surface, border, heading, and body-text variables resolve to dark-theme values

#### Scenario: Dark mode overrides utility-driven surfaces and text

- **WHEN** shared UI uses standard surface, border, text, hover, or shadow utility classes
- **THEN** dark-mode overrides restyle those elements to match the dark theme

#### Scenario: Dark mode adapts form controls and placeholders

- **WHEN** form inputs, textareas, or selects are shown in dark mode
- **THEN** their text, border, and placeholder presentation adapt to the dark theme

### Requirement: The root transition page also participates in theme behavior

The site SHALL apply the shared theme model to the non-indexed root transition page.

#### Scenario: Root transition page resolves and applies theme

- **WHEN** the root loading page initializes
- **THEN** it reads and applies the shared theme preference model
- **AND** its theme-aware favicon and logo treatment respond to the resolved theme

## Notes

- Current observations are based on `src/pages/index.astro`, `src/layouts/BaseLayout.astro`, `src/components/layout/ThemeToggle.astro`, `src/components/ui/ThemeLogo.astro`, and `src/styles/global.css`.
- This spec documents current observed theming behavior only; it does not define future accessibility targets, expanded preference models, or design-system governance.
