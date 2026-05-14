# layout-and-navigation

## Purpose

Document the current observed shared layout, navigation, and theme-control behavior for the Precise MBC site so future UX changes can build from a known baseline.

## Requirements

### Requirement: Localized content pages use a shared page shell

The site SHALL render localized content pages through a shared base layout.

#### Scenario: Shared base layout wraps localized content pages

- **WHEN** a localized marketing or legal page is rendered
- **THEN** it uses the shared base layout
- **AND** the document root reflects the active locale
- **AND** the page content is rendered inside the shared layout slot

#### Scenario: Shared layout provides a skip link

- **WHEN** a page is rendered through the shared layout
- **THEN** a skip link targeting `#main-content` is present for keyboard users

### Requirement: The site uses shared structural primitives for spacing and section rhythm

The site SHALL rely on common container and section primitives to keep layouts consistent.

#### Scenario: Shared container constrains page width

- **WHEN** core page content is rendered
- **THEN** containerized content uses a shared maximum width
- **AND** shared horizontal padding is applied responsively

#### Scenario: Shared section wrapper provides consistent vertical rhythm

- **WHEN** a major section uses the shared section primitive
- **THEN** it receives consistent responsive vertical spacing
- **AND** it may opt into a small set of predefined background styles

### Requirement: The header stays fixed and provides localized navigation

The site SHALL expose a persistent top navigation bar for localized pages.

#### Scenario: Header remains fixed at the top

- **WHEN** a localized page is rendered
- **THEN** the header is fixed to the top of the viewport

#### Scenario: Desktop navigation targets in-page sections

- **WHEN** a visitor uses header navigation on a localized homepage
- **THEN** links target localized anchors for services, specialty, process, FAQ, and contact
- **AND** the primary header CTA points to the localized contact section

#### Scenario: Header branding returns to the locale homepage

- **WHEN** a visitor activates the header logo
- **THEN** it navigates to the homepage for the active locale

### Requirement: The header changes presentation on scroll

The site SHALL visually adapt the header after the page is scrolled.

#### Scenario: Header receives scrolled styling

- **WHEN** the page scroll position moves beyond the initial threshold
- **THEN** the header shell receives a scrolled state
- **AND** the scrolled state adds a surfaced background, border, and shadow treatment

### Requirement: Mobile navigation is toggleable

The site SHALL provide a dedicated mobile navigation experience.

#### Scenario: Mobile menu can be opened and closed

- **WHEN** a visitor activates the mobile menu button
- **THEN** the mobile navigation panel toggles between hidden and visible
- **AND** the button updates its expanded state
- **AND** the menu/close icon state changes accordingly

#### Scenario: Mobile navigation closes after link selection

- **WHEN** a visitor selects a link inside the mobile navigation panel
- **THEN** the mobile menu closes
- **AND** the toggle button returns to the collapsed state

### Requirement: The footer provides localized secondary navigation and business contact details

The site SHALL expose a shared footer across localized pages.

#### Scenario: Footer includes localized navigation groups

- **WHEN** a localized page is rendered
- **THEN** the footer includes grouped links for services, resources, and legal destinations
- **AND** those links remain within the active locale

#### Scenario: Footer includes business contact information

- **WHEN** a localized page is rendered
- **THEN** the footer displays phone, email, fax, and address details
- **AND** the logo and brand identity link back to the locale homepage

### Requirement: Visitors can control the visual theme

The site SHALL provide a light/dark theme toggle in the shared header area.

#### Scenario: Theme toggle exposes light and dark choices

- **WHEN** the theme control is rendered
- **THEN** it shows explicit light and dark options
- **AND** its accessible labels are localized to the active language

#### Scenario: Theme toggle reflects the active theme

- **WHEN** the active theme changes
- **THEN** the current option is marked as pressed
- **AND** the visual active state updates to match the resolved theme

### Requirement: Theme state affects shared presentation tokens

The site SHALL adapt shared colors and surfaces based on the resolved theme.

#### Scenario: Dark theme updates shared surface and text tokens

- **WHEN** the document theme resolves to dark
- **THEN** shared background, border, text, hover, and shadow styles adapt to dark-mode values

#### Scenario: Light theme uses the default presentation tokens

- **WHEN** the document theme resolves to light
- **THEN** shared layout and component styling uses the default light-theme values

### Requirement: Shared interactive controls use a common button system

The site SHALL provide consistent button styling through a shared primitive.

#### Scenario: Shared button variants exist

- **WHEN** a call-to-action is rendered with the shared button primitive
- **THEN** it can use predefined variants for primary, secondary, outline, or ghost styling
- **AND** it can be rendered as either a link or button element

#### Scenario: Shared button sizes exist

- **WHEN** a call-to-action is rendered with the shared button primitive
- **THEN** it can use predefined small, medium, or large sizing

## Notes

- Current observations are based on `src/layouts/BaseLayout.astro`, `src/components/layout/`, `src/components/ui/Container.astro`, `src/components/ui/Section.astro`, `src/components/ui/Button.astro`, and `src/styles/global.css`.
- This spec documents current structural and navigational behavior only; it does not define future information architecture or branding changes.
