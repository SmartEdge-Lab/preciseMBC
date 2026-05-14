# forms-and-lead-capture

## Purpose

Document the current observed lead-capture behavior for the Precise MBC site so future OpenSpec changes can evolve inquiry flows from a known baseline.

## Requirements

### Requirement: The site exposes two primary web lead forms

The site SHALL provide a short CTA lead form and a longer practice inquiry form.

#### Scenario: CTA quick lead form is present

- **WHEN** a visitor reaches the CTA section on a localized homepage
- **THEN** a form named `quick-lead` is available
- **AND** it captures clinic name and email address
- **AND** it includes hidden metadata for `form-name`, `source`, and `language`

#### Scenario: Contact practice inquiry form is present

- **WHEN** a visitor reaches the contact section on a localized homepage
- **THEN** a form named `practice-inquiry` is available
- **AND** it captures name, email, and optional practice details
- **AND** it includes hidden metadata for `form-name`, `source`, and `language`

### Requirement: Form submissions target the site root using URL-encoded POST requests

The site SHALL submit visible form data to the root path using client-side fetch behavior.

#### Scenario: CTA form submits asynchronously

- **WHEN** a visitor submits the `quick-lead` form with valid input
- **THEN** the browser sends a `POST` request to `/`
- **AND** the payload is encoded as `application/x-www-form-urlencoded`

#### Scenario: Contact form submits asynchronously

- **WHEN** a visitor submits the `practice-inquiry` form
- **THEN** the browser sends a `POST` request to `/`
- **AND** the payload is encoded as `application/x-www-form-urlencoded`

### Requirement: Netlify form registration is preserved through hidden root-page definitions

The site SHALL include hidden root-page form definitions that mirror the visible forms.

#### Scenario: Hidden form definitions exist for backend registration

- **WHEN** the root entry page is rendered
- **THEN** hidden forms for `quick-lead` and `practice-inquiry` are present
- **AND** each hidden form includes the fields needed to preserve backend form registration

### Requirement: Form submissions include spam mitigation and source context

The site SHALL include anti-spam and attribution fields on lead submissions.

#### Scenario: Honeypot field is present

- **WHEN** either visible lead form is rendered
- **THEN** it includes a `bot-field` honeypot input
- **AND** the form is marked with Netlify honeypot metadata

#### Scenario: Submission context is tagged

- **WHEN** either visible lead form is submitted
- **THEN** the submission includes a `source` field indicating the entrypoint
- **AND** the submission includes a `language` field representing the active locale

### Requirement: The CTA form performs client-side validation before submission

The site SHALL validate required quick-lead inputs before posting.

#### Scenario: Invalid CTA input is blocked

- **WHEN** the clinic field is empty or the email is invalid
- **THEN** submission is prevented
- **AND** field-level error feedback is shown

#### Scenario: CTA success hides the form

- **WHEN** the `quick-lead` submission succeeds
- **THEN** the visible CTA form is hidden
- **AND** a success message is shown

#### Scenario: CTA failure shows an error state

- **WHEN** the `quick-lead` submission fails
- **THEN** an error message is shown

### Requirement: The contact form provides asynchronous status feedback

The site SHALL communicate submission outcome for the longer inquiry form.

#### Scenario: Contact form success resets the form

- **WHEN** the `practice-inquiry` submission succeeds
- **THEN** the form is reset
- **AND** a success message is shown

#### Scenario: Contact form failure shows an error state

- **WHEN** the `practice-inquiry` submission fails
- **THEN** an error message is shown

### Requirement: The site provides a WhatsApp-based conversational lead path

The site SHALL provide a floating WhatsApp-oriented assistant widget as an alternate lead-capture path.

#### Scenario: Localized chat assistant is available

- **WHEN** a localized homepage is rendered
- **THEN** a floating chat widget is available
- **AND** its prompts and labels are localized to the active language

#### Scenario: Chat assistant collects structured lead context

- **WHEN** a visitor completes the assistant flow
- **THEN** the flow collects responses about fit, clinic, provider count, EHR, billing challenge, and contact information

#### Scenario: Chat assistant hands off to WhatsApp

- **WHEN** the visitor completes the assistant flow
- **THEN** the widget builds a summary of responses
- **AND** it provides a WhatsApp link containing the localized opening message and captured summary

## Notes

- Current observations are based on `src/components/sections/Cta.astro`, `src/components/sections/ContactForm.astro`, `src/components/widgets/WhatsAppFloat.astro`, and hidden form definitions in `src/pages/index.astro`.
- This spec documents current observed lead-capture behavior only; it does not claim delivery guarantees beyond the client-side flows presently implemented.
