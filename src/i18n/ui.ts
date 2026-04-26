export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Meta
    'meta.title': 'Precise MBC | OBGYN Medical Billing for South Florida Practices',
    'meta.description':
      'Specialized OBGYN medical billing and revenue cycle support for South Florida practices. We work as a monthly billing partner on a percentage-of-collections model.',

    // Nav
    'nav.services': 'Services',
    'nav.specialty': 'OBGYN Expertise',
    'nav.process': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Talk to Our Team',

    // Hero
    'hero.eyebrow': 'OBGYN Medical Billing Partner · South Florida',
    'hero.title': 'Medical Billing Built for OBGYN Practices',
    'hero.subtitle':
      'We partner with South Florida OBGYN clinics to manage billing, follow up on claims, reduce avoidable denials, and improve collections on a percentage-of-collections model.',
    'hero.cta.primary': 'Request Pricing',
    'hero.cta.secondary': 'WhatsApp',
    'hero.stat1.value': '98%',
    'hero.stat1.label': 'Clean Claim Rate',
    'hero.stat2.value': '30%',
    'hero.stat2.label': 'A/R Reduction',
    'hero.stat3.value': '24h',
    'hero.stat3.label': 'Claim Turnaround',
    'hero.stat4.value': '100%',
    'hero.stat4.label': 'HIPAA Compliant',

    // Trust Bar
    'trust.title': 'Trusted by OBGYN Practices Across South Florida',
    'trust.hipaa': 'HIPAA Compliant',
    'trust.aapc': 'AAPC Certified Coders',
    'trust.ahima': 'AHIMA Member',
    'trust.icd10': 'ICD-10 Experts',
    'trust.obgyn': 'OBGYN Specialists',

    // Services
    'services.eyebrow': 'What We Do',
    'services.title': 'Complete OBGYN Billing Solutions',
    'services.subtitle':
      'End-to-end revenue cycle support for OBGYN practices looking for a reliable monthly billing partner.',
    'services.1.title': 'Charge Entry',
    'services.1.desc':
      'Accurate charge entry for OBGYN encounters, procedures, deliveries, and office visits.',
    'services.2.title': 'Claim Submission',
    'services.2.desc':
      'Electronic claim submission and claim flow management designed to reduce preventable denials.',
    'services.3.title': 'Payment Posting',
    'services.3.desc':
      'Timely payment posting and reconciliation so your team has a clear picture of what has been paid, pending, or underpaid.',
    'services.4.title': 'A/R Follow-Up',
    'services.4.desc':
      'Consistent follow-up on unpaid and underpaid claims to keep collections moving and reduce avoidable write-offs.',
    'services.5.title': 'Denial Management',
    'services.5.desc':
      'Denial review, appeals, and root-cause analysis to recover revenue and reduce repeat issues.',
    'services.6.title': 'Credentialing',
    'services.6.desc':
      'Provider enrollment and credentialing support with commercial payers, Medicare, and Florida Medicaid.',

    // OBGYN Specialty
    'obgyn.eyebrow': 'OBGYN Revenue Risk Areas',
    'obgyn.title': 'Where OBGYN Practices Lose Revenue',
    'obgyn.subtitle':
      'Global OB packages, modifiers, ultrasounds, procedure coding, payer rules, and aging claims create revenue leakage when no one owns the details. Our billing work is built around those pressure points.',
    'obgyn.proof.eyebrow': 'Examples we handle',
    'obgyn.codes.title': 'Examples We Handle',
    'obgyn.codes.1': '59400 – Routine OB Care',
    'obgyn.codes.2': '59409 – Vaginal Delivery',
    'obgyn.codes.3': '59510 – Routine C-Section',
    'obgyn.codes.4': '76801 – OB Ultrasound < 14w',
    'obgyn.codes.5': '76805 – OB Ultrasound ≥ 14w',
    'obgyn.codes.6': '58150 – Total Abdominal Hysterectomy',
    'obgyn.codes.7': '57454 – Colposcopy + Biopsy',
    'obgyn.codes.8': 'Z34.xx – Supervision of Normal Pregnancy',
    'obgyn.risk.1.title': 'Global packages billed incorrectly',
    'obgyn.risk.1.desc':
      'Antepartum, delivery, and postpartum services need precise package handling to avoid underbilling, payer pushback, or duplicate work.',
    'obgyn.risk.2.title': 'Modifiers missing or misused',
    'obgyn.risk.2.desc':
      'Incorrect modifiers like 25, 51, 59, or 26/TC can trigger preventable denials or leave legitimate reimbursement uncollected.',
    'obgyn.risk.3.title': 'Denied claims not appealed fast enough',
    'obgyn.risk.3.desc':
      'OBGYN denials require ownership, root-cause review, corrected claims, and appeals before timely filing windows become a problem.',
    'obgyn.risk.4.title': 'Payer-specific rules ignored',
    'obgyn.risk.4.desc':
      'South Florida payer behavior, Medicaid requirements, and plan-specific rules can materially affect how claims should be submitted.',
    'obgyn.risk.5.title': 'Ultrasounds and procedures undercoded',
    'obgyn.risk.5.desc':
      'OB ultrasounds, colposcopies, deliveries, and gynecological procedures need coding attention that generalist workflows often miss.',
    'obgyn.risk.6.title': 'A/R aging without ownership',
    'obgyn.risk.6.desc':
      'Claims sitting unpaid or underpaid need consistent follow-up, clear status tracking, and escalation before they become write-offs.',
    'obgyn.outcome.title': 'Specialization should show up in collections',
    'obgyn.outcome.desc':
      'The goal is not just cleaner coding. It is fewer avoidable denials, better follow-up, and clearer revenue visibility for the practice.',
    'obgyn.outcome.cta': 'Review Your Billing',

    // Why Us
    'whyus.eyebrow': 'Why Precise MBC',
    'whyus.title': 'The Difference Specialization Makes',
    'whyus.1.title': 'Built Around OBGYN',
    'whyus.1.desc':
      'We are not trying to be everything to everyone. Our workflows, coding attention, and payer understanding are shaped around OBGYN practices.',
    'whyus.2.title': 'Operational Visibility',
    'whyus.2.desc':
      'You should know what is being billed, what is aging, and where follow-up stands. We keep reporting and communication clear.',
    'whyus.3.title': 'EHR-Ready Workflows',
    'whyus.3.desc':
      'We work inside the systems practices already use, helping reduce friction during onboarding and day-to-day billing operations across South Florida clinics.',
    'whyus.4.title': 'Hands-On Account Support',
    'whyus.4.desc':
      'Practices need responsiveness, follow-through, and accountability from their billing partner. That matters even more in the fast-moving South Florida market.',

    // Process
    'process.eyebrow': 'How It Works',
    'process.title': 'A Clear Path to Better Billing Support',
    'process.1.step': '01',
    'process.1.title': 'Practice Review',
    'process.1.desc':
      'We review your current billing setup, workflow, payer mix, and practice needs to understand whether we are the right fit.',
    'process.2.step': '02',
    'process.2.title': 'Onboarding & Access',
    'process.2.desc':
      'We coordinate system access, payer details, provider information, and workflow expectations so the transition is organized from the start.',
    'process.3.step': '03',
    'process.3.title': 'Daily Billing Execution',
    'process.3.desc':
      'Our team handles charge flow, claim submission, follow-up, payment posting, and denial work as part of the monthly billing relationship.',
    'process.4.step': '04',
    'process.4.title': 'Reporting & Oversight',
    'process.4.desc':
      'You receive ongoing visibility into billing activity, collections, and issues that need attention as the relationship matures.',

    // Stats
    'stats.title': 'Metrics That Matter to Practices',
    'stats.1.value': '98%',
    'stats.1.label': 'Clean Claim Rate',
    'stats.1.sub': 'Industry avg is 85%',
    'stats.2.value': '30%',
    'stats.2.label': 'A/R Days Reduced',
    'stats.2.sub': 'Reduction targets vary by account',
    'stats.3.value': '24h',
    'stats.3.label': 'Claim Turnaround',
    'stats.3.sub': 'Same-day charge entry',
    'stats.4.value': '100%',
    'stats.4.label': 'HIPAA Compliance',
    'stats.4.sub': 'Processes built around secure handling',

    // Testimonials
    'testimonials.eyebrow': 'Client Stories',
    'testimonials.title': 'What South Florida OBGYN Clients Value Most',
    'testimonials.1.quote':
      '"Since switching to Precise MBC, our clean claim rate went from 79% to 97% in just three months. The OBGYN-specific expertise is evident in every interaction."',
    'testimonials.1.name': 'Dr. Maria C.',
    'testimonials.1.role': 'OB/GYN Physician · Coral Gables, FL',
    'testimonials.2.quote':
      '"We were leaving thousands of dollars on the table with our previous biller. Precise MBC identified and recovered over $45,000 in denied claims within the first quarter."',
    'testimonials.2.name': 'Dr. James P.',
    'testimonials.2.role': 'OBGYN Practice Owner · Doral, FL',
    'testimonials.3.quote':
      '"Bilingual staff, deep knowledge of South Florida payers, and incredible responsiveness. They feel like an extension of our own team."',
    'testimonials.3.name': 'Dr. Sofia R.',
    'testimonials.3.role': 'OB/GYN Specialist · Miami Beach, FL',

    // Pricing
    'pricing.eyebrow': 'Pricing Model',
    'pricing.title': 'Percentage-Based Billing for OBGYN Practices',
    'pricing.subtitle':
      'We work on a monthly percentage-of-collections model. Pricing depends on provider count, claim volume, payer mix, and scope.',
    'pricing.1.name': 'Independent',
    'pricing.1.desc': 'Solo OB/GYN physician or small clinic with straightforward monthly billing needs',
    'pricing.1.feature1': 'Full billing & coding',
    'pricing.1.feature2': 'Claim submission & follow-up',
    'pricing.1.feature3': 'Monthly reporting',
    'pricing.1.feature4': 'EHR integration',
    'pricing.1.cta': 'Request Pricing',
    'pricing.2.name': 'Growing Practice',
    'pricing.2.badge': 'Most Popular',
    'pricing.2.desc': 'OBGYN practice with multiple providers, higher claim volume, and a need for stronger follow-up',
    'pricing.2.feature1': 'Everything in Starter',
    'pricing.2.feature2': 'Dedicated account manager',
    'pricing.2.feature3': 'Denial management',
    'pricing.2.feature4': 'Credentialing support',
    'pricing.2.feature5': 'Quarterly audits',
    'pricing.2.cta': 'Request Pricing',
    'pricing.3.name': 'Group',
    'pricing.3.desc': 'Larger OBGYN groups needing deeper coordination, visibility, and ongoing account support',
    'pricing.3.feature1': 'Everything in Practice',
    'pricing.3.feature2': 'Full credentialing',
    'pricing.3.feature3': 'Custom reporting',
    'pricing.3.feature4': 'Priority support',
    'pricing.3.feature5': 'On-site training',
    'pricing.3.cta': 'Talk to Our Team',
    'pricing.note': '* We price based on a percentage of monthly collections. Final scope and pricing are confirmed after understanding your practice.',

    // FAQ
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.1.q': 'How does your pricing model work?',
    'faq.1.a':
      'We work on a percentage of monthly collections model — typically ranging from 4% to 7% depending on practice size and complexity. There are no setup fees or hidden charges.',
    'faq.2.q': 'What type of practices are the best fit for Precise MBC?',
    'faq.2.a':
      'We are best suited for OBGYN practices that want an ongoing billing partner, value responsiveness, and need dependable follow-up on claims and collections.',
    'faq.3.q': 'Which EHR systems do you work with?',
    'faq.3.a':
      'We work with major EHR platforms including Athena Health, eClinicalWorks, Kareo, Practice Fusion, DrChrono, Modernizing Medicine, and others. We review fit during onboarding.',
    'faq.4.q': 'How long does onboarding take?',
    'faq.4.a':
      'Onboarding timelines depend on access, payer information, and current setup, but most practices can move through onboarding quickly once the required information is available.',
    'faq.5.q': 'Do you handle credentialing?',
    'faq.5.a':
      'Yes. We can support credentialing as part of the relationship or as an added scope depending on the practice and plan.',
    'faq.6.q': 'Are your coders OBGYN specialists?',
    'faq.6.a':
      'Absolutely. All our medical coders hold AAPC or AHIMA certifications with dedicated OBGYN specialization. They have extensive experience with obstetric global packages, gynecological procedures, and South Florida payer requirements.',
    'faq.7.q': 'What happens to my denied claims?',
    'faq.7.a':
      'We review denials, determine root causes, submit corrected claims or appeals when appropriate, and look for patterns that need operational attention.',
    'faq.8.q': 'Is my data secure and HIPAA compliant?',
    'faq.8.a':
      'Yes. We operate with full HIPAA compliance — signed BAAs, encrypted data transmission, role-based access controls, and regular security audits. PHI protection is non-negotiable.',

    // CTA
    'cta.title': 'Looking for a Better Billing Partner?',
    'cta.subtitle':
      'Tell us about your practice and current billing setup. We will let you know whether we are a good fit and how our pricing model works.',
    'cta.cta': 'Start the Conversation',
    'cta.input.placeholder': 'Your clinic email address',
    'cta.clinic.placeholder': 'Practice or clinic name',
    'cta.sent': 'Thank you! We will reach out within 1 business day.',

    // Contact Form
    'contact.eyebrow': 'Get In Touch',
    'contact.title': 'Talk to Us About Your Practice',
    'contact.subtitle':
      'If you are evaluating a new medical billing partner, send us your details and we will follow up to learn more about your clinic.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Work Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.clinic': 'Practice / Clinic Name',
    'contact.form.providers': 'Number of Providers',
    'contact.form.ehr': 'Current EHR System',
    'contact.form.message': 'How can we help you?',
    'contact.form.submit': 'Talk to Our Team',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent! We will be in touch shortly.',
    'contact.form.error': 'Something went wrong. Please try again or email us directly.',
    'contact.quickinfo.title': 'Contact Information',
    'contact.form.ehrPlaceholder': 'Select EHR...',
    'contact.calendly.title': 'Schedule a Practice Call',
    'contact.calendly.blurb': 'Choose a time to discuss your clinic and current billing setup',
    'contact.calendly.cta': 'Open Calendar',
    'contact.info.phone': '+1 (305) 000-0000',
    'contact.info.email': 'info@precisembc.com',
    'contact.info.address': 'Miami, FL 33101',

    // Footer
    'footer.tagline': 'Specialized OBGYN medical billing for South Florida practices that need a dependable long-term revenue cycle partner.',
    'footer.services.title': 'Services',
    'footer.resources.title': 'Resources',
    'footer.legal.title': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.hipaa': 'HIPAA Notice',
    'footer.copyright': '© 2025 Precise Medical Billing and Coding LLC. All rights reserved.',
    'footer.disclaimer':
      'Precise MBC is not a law firm and does not provide legal advice. Medical billing services are provided for informational purposes.',

    // WhatsApp
    'whatsapp.label': 'Chat on WhatsApp',
    'whatsapp.message': 'Hello! I would like to learn more about your OBGYN medical billing services for my practice.',
  },

  es: {
    // Meta
    'meta.title': 'Precise MBC | Facturación Médica OBGYN para Clínicas del Sur de Florida',
    'meta.description':
      'Facturación médica y soporte de revenue cycle para consultorios OBGYN del sur de Florida. Trabajamos como su socio mensual de billing con un modelo basado en porcentaje de cobros.',

    // Nav
    'nav.services': 'Servicios',
    'nav.specialty': 'Experiencia OBGYN',
    'nav.process': 'Cómo Funciona',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hable con Nuestro Equipo',

    // Hero
    'hero.eyebrow': 'Socio de Facturación Médica para OBGYN · Sur de Florida',
    'hero.title': 'Facturación Médica Diseñada para Consultorios OBGYN',
    'hero.subtitle':
      'Nos integramos con clínicas OBGYN del sur de Florida para gestionar su billing, dar seguimiento a reclamaciones, reducir rechazos evitables y mejorar cobranzas con un modelo basado en porcentaje de cobros.',
    'hero.cta.primary': 'Solicitar Precio',
    'hero.cta.secondary': 'WhatsApp',
    'hero.stat1.value': '98%',
    'hero.stat1.label': 'Reclamaciones Limpias',
    'hero.stat2.value': '30%',
    'hero.stat2.label': 'Reducción en A/R',
    'hero.stat3.value': '24h',
    'hero.stat3.label': 'Gestión de Reclamaciones',
    'hero.stat4.value': '100%',
    'hero.stat4.label': 'Cumplimiento HIPAA',

    // Trust Bar
    'trust.title': 'Consultorios OBGYN del Sur de Florida Confían en Precise MBC',
    'trust.hipaa': 'Cumple con HIPAA',
    'trust.aapc': 'Codificadores Certificados AAPC',
    'trust.ahima': 'Miembro AHIMA',
    'trust.icd10': 'Expertos en ICD-10',
    'trust.obgyn': 'Especialistas OBGYN',

    // Services
    'services.eyebrow': 'Nuestros Servicios',
    'services.title': 'Soluciones Completas de Facturación OBGYN',
    'services.subtitle':
      'Soporte integral de billing y revenue cycle para consultorios OBGYN que necesitan un socio mensual confiable.',
    'services.1.title': 'Ingreso de Cargos',
    'services.1.desc':
      'Ingreso preciso de cargos para visitas, procedimientos, partos y servicios propios de OBGYN.',
    'services.2.title': 'Envío de Reclamaciones',
    'services.2.desc':
      'Envío electrónico de reclamaciones y control del flujo de claims para reducir rechazos evitables.',
    'services.3.title': 'Publicación de Pagos',
    'services.3.desc':
      'Publicación y conciliación de pagos para que su clínica tenga claridad sobre lo pagado, lo pendiente y lo subpagado.',
    'services.4.title': 'Seguimiento de A/R',
    'services.4.desc':
      'Seguimiento constante de reclamaciones pendientes o subpagadas para sostener el ritmo de cobranzas.',
    'services.5.title': 'Gestión de Rechazos',
    'services.5.desc':
      'Revisión de rechazos, apelaciones y análisis de causas para recuperar ingresos y reducir recurrencias.',
    'services.6.title': 'Acreditación de Proveedores',
    'services.6.desc':
      'Soporte de inscripción y acreditación con pagadores comerciales, Medicare y Medicaid de Florida.',

    // OBGYN Specialty
    'obgyn.eyebrow': 'Riesgos de Revenue en OBGYN',
    'obgyn.title': 'Dónde Pierden Ingresos las Clínicas OBGYN',
    'obgyn.subtitle':
      'Paquetes globales OB, modificadores, ultrasonidos, procedimientos, reglas de pagadores y claims envejecidos pueden crear fugas de revenue cuando nadie controla los detalles. Nuestro billing está diseñado alrededor de esos puntos críticos.',
    'obgyn.proof.eyebrow': 'Ejemplos que manejamos',
    'obgyn.codes.title': 'Ejemplos que Manejamos',
    'obgyn.codes.1': '59400 – Cuidado OB de Rutina',
    'obgyn.codes.2': '59409 – Parto Vaginal',
    'obgyn.codes.3': '59510 – Cesárea de Rutina',
    'obgyn.codes.4': '76801 – Ultrasonido OB < 14 sem.',
    'obgyn.codes.5': '76805 – Ultrasonido OB ≥ 14 sem.',
    'obgyn.codes.6': '58150 – Histerectomía Abdominal Total',
    'obgyn.codes.7': '57454 – Colposcopía + Biopsia',
    'obgyn.codes.8': 'Z34.xx – Supervisión de Embarazo Normal',
    'obgyn.risk.1.title': 'Paquetes globales mal facturados',
    'obgyn.risk.1.desc':
      'Servicios prenatales, parto y postparto requieren manejo preciso para evitar subfacturación, rechazos o trabajo duplicado.',
    'obgyn.risk.2.title': 'Modificadores ausentes o mal usados',
    'obgyn.risk.2.desc':
      'Errores con modificadores como 25, 51, 59 o 26/TC pueden causar rechazos evitables o dejar reembolsos legítimos sin cobrar.',
    'obgyn.risk.3.title': 'Denials sin apelación rápida',
    'obgyn.risk.3.desc':
      'Los rechazos en OBGYN necesitan dueño, análisis de causa, claims corregidos y apelaciones antes de que venza el tiempo permitido.',
    'obgyn.risk.4.title': 'Reglas de pagadores ignoradas',
    'obgyn.risk.4.desc':
      'El comportamiento de pagadores del sur de Florida, Medicaid y reglas específicas de planes impactan cómo deben enviarse los claims.',
    'obgyn.risk.5.title': 'Ultrasonidos y procedimientos subcodificados',
    'obgyn.risk.5.desc':
      'Ultrasonidos OB, colposcopías, partos y procedimientos ginecológicos requieren atención de coding que un flujo generalista suele perder.',
    'obgyn.risk.6.title': 'A/R envejeciendo sin dueño',
    'obgyn.risk.6.desc':
      'Claims pendientes o subpagados necesitan seguimiento constante, estatus claro y escalación antes de convertirse en write-offs.',
    'obgyn.outcome.title': 'La especialización debe verse en las cobranzas',
    'obgyn.outcome.desc':
      'El objetivo no es solo coding más limpio. Es reducir rechazos evitables, mejorar seguimiento y dar visibilidad real del revenue.',
    'obgyn.outcome.cta': 'Revisar mi Billing',

    // Why Us
    'whyus.eyebrow': 'Por Qué Precise MBC',
    'whyus.title': 'La Diferencia que Hace la Especialización',
    'whyus.1.title': 'Diseñados para OBGYN',
    'whyus.1.desc':
      'No intentamos servir a todas las especialidades. Nuestra forma de trabajar está enfocada en la realidad operativa de consultorios OBGYN.',
    'whyus.2.title': 'Visibilidad Operativa',
    'whyus.2.desc':
      'Su clínica debe saber qué se facturó, qué está envejeciendo y dónde va el seguimiento. Mantenemos esa visibilidad con reportes y comunicación clara.',
    'whyus.3.title': 'Flujos Compatibles con su EHR',
    'whyus.3.desc':
      'Trabajamos dentro de los sistemas que ya usan muchas clínicas y reducimos fricción durante el onboarding y la operación diaria en el sur de Florida.',
    'whyus.4.title': 'Soporte Cercano de Cuenta',
    'whyus.4.desc':
      'Un partner de billing tiene que responder, dar seguimiento y hacerse responsable. Eso es clave en un mercado tan dinámico como el del sur de Florida.',

    // Process
    'process.eyebrow': 'Cómo Funciona',
    'process.title': 'Un Camino Claro hacia un Mejor Billing',
    'process.1.step': '01',
    'process.1.title': 'Revisión de la Clínica',
    'process.1.desc':
      'Revisamos su proceso actual de billing, su operación, pagadores y necesidades para confirmar si somos un buen fit.',
    'process.2.step': '02',
    'process.2.title': 'Onboarding y Accesos',
    'process.2.desc':
      'Coordinamos accesos, datos de proveedores, información de pagadores y expectativas de trabajo para una transición ordenada.',
    'process.3.step': '03',
    'process.3.title': 'Ejecución Diaria del Billing',
    'process.3.desc':
      'Nuestro equipo maneja charge flow, envío de claims, seguimiento, posting y trabajo de rechazos como parte de la relación mensual.',
    'process.4.step': '04',
    'process.4.title': 'Reportes y Supervisión',
    'process.4.desc':
      'Su clínica recibe visibilidad continua sobre actividad de billing, cobranzas y temas que requieren atención.',

    // Stats
    'stats.title': 'Indicadores que Importan a la Clínica',
    'stats.1.value': '98%',
    'stats.1.label': 'Reclamaciones Limpias',
    'stats.1.sub': 'Promedio industria: 85%',
    'stats.2.value': '30%',
    'stats.2.label': 'Días en A/R Reducidos',
    'stats.2.sub': 'Las metas varían según la cuenta',
    'stats.3.value': '24h',
    'stats.3.label': 'Tiempo de Procesamiento',
    'stats.3.sub': 'Ingreso de cargos el mismo día',
    'stats.4.value': '100%',
    'stats.4.label': 'Cumplimiento HIPAA',
    'stats.4.sub': 'Procesos orientados a manejo seguro',

    // Testimonials
    'testimonials.eyebrow': 'Historias de Clientes',
    'testimonials.title': 'Lo que Más Valoran Nuestros Clientes OBGYN del Sur de Florida',
    'testimonials.1.quote':
      '"Desde que cambiamos a Precise MBC, nuestra tasa de reclamaciones limpias pasó del 79% al 97% en solo tres meses. La experiencia especializada en OBGYN es evidente en cada interacción."',
    'testimonials.1.name': 'Dra. Maria C.',
    'testimonials.1.role': 'Médica OB/GYN · Coral Gables, FL',
    'testimonials.2.quote':
      '"Estábamos dejando miles de dólares sobre la mesa con nuestra facturadora anterior. Precise MBC identificó y recuperó más de $45,000 en reclamaciones rechazadas en el primer trimestre."',
    'testimonials.2.name': 'Dr. James P.',
    'testimonials.2.role': 'Dueño de Consultorio OBGYN · Doral, FL',
    'testimonials.3.quote':
      '"Personal bilingüe, profundo conocimiento de los pagadores del sur de Florida y una capacidad de respuesta increíble. Se sienten como una extensión de nuestro propio equipo."',
    'testimonials.3.name': 'Dra. Sofia R.',
    'testimonials.3.role': 'Especialista OB/GYN · Miami Beach, FL',

    // Pricing
    'pricing.eyebrow': 'Modelo de Precios',
    'pricing.title': 'Billing OBGYN con Modelo Basado en Cobros',
    'pricing.subtitle':
      'Trabajamos con un porcentaje mensual sobre cobros. El precio depende del número de proveedores, volumen de claims, mezcla de pagadores y alcance del servicio.',
    'pricing.1.name': 'Independiente',
    'pricing.1.desc': 'Médico OB/GYN o clínica pequeña con necesidades mensuales de billing relativamente directas',
    'pricing.1.feature1': 'Facturación y codificación completa',
    'pricing.1.feature2': 'Envío y seguimiento de reclamaciones',
    'pricing.1.feature3': 'Informes mensuales',
    'pricing.1.feature4': 'Integración con EHR',
    'pricing.1.cta': 'Solicitar Precio',
    'pricing.2.name': 'Clínica en Crecimiento',
    'pricing.2.badge': 'Más Popular',
    'pricing.2.desc': 'Práctica OBGYN con varios proveedores, más volumen y necesidad de seguimiento más fuerte',
    'pricing.2.feature1': 'Todo lo del plan Básico',
    'pricing.2.feature2': 'Gerente de cuenta dedicado',
    'pricing.2.feature3': 'Gestión de rechazos',
    'pricing.2.feature4': 'Soporte de acreditación',
    'pricing.2.feature5': 'Auditorías trimestrales',
    'pricing.2.cta': 'Solicitar Precio',
    'pricing.3.name': 'Grupo',
    'pricing.3.desc': 'Grupos OBGYN más grandes que requieren más coordinación, visibilidad y soporte continuo',
    'pricing.3.feature1': 'Todo lo del plan Consultorio',
    'pricing.3.feature2': 'Acreditación completa',
    'pricing.3.feature3': 'Informes personalizados',
    'pricing.3.feature4': 'Soporte prioritario',
    'pricing.3.feature5': 'Capacitación en sitio',
    'pricing.3.cta': 'Hable con Nuestro Equipo',
    'pricing.note': '* Trabajamos con porcentaje sobre cobros mensuales. El alcance y el precio final se confirman al entender mejor su operación.',

    // FAQ
    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.title': 'Preguntas Frecuentes',
    'faq.1.q': '¿Cómo funciona su modelo de precios?',
    'faq.1.a':
      'Trabajamos con un modelo de porcentaje de cobros mensuales — típicamente entre el 4% y el 7% según el tamaño y complejidad del consultorio. No hay tarifas de configuración ni cargos ocultos.',
    'faq.2.q': '¿Qué tipo de clínicas son el mejor fit para Precise MBC?',
    'faq.2.a':
      'Somos mejor fit para clínicas OBGYN que buscan un partner de billing continuo, valoran la capacidad de respuesta y necesitan seguimiento sólido de claims y cobranzas.',
    'faq.3.q': '¿Con qué sistemas EHR trabajan?',
    'faq.3.a':
      'Trabajamos con EHRs ampliamente usados como Athena Health, eClinicalWorks, Kareo, Practice Fusion, DrChrono, Modernizing Medicine y otros. Revisamos compatibilidad durante onboarding.',
    'faq.4.q': '¿Cuánto tiempo tarda la incorporación?',
    'faq.4.a':
      'El tiempo depende de accesos, datos de pagadores e información de proveedores, pero muchas clínicas pueden avanzar rápido una vez que todo lo necesario está disponible.',
    'faq.5.q': '¿Manejan la acreditación de proveedores?',
    'faq.5.a':
      'Sí. Podemos apoyar procesos de acreditación como parte de la relación o como alcance adicional, según la clínica y el plan.',
    'faq.6.q': '¿Sus codificadores son especialistas en OBGYN?',
    'faq.6.a':
      'Absolutamente. Todos nuestros codificadores médicos tienen certificaciones AAPC o AHIMA con especialización dedicada en OBGYN. Tienen amplia experiencia con paquetes obstétricos globales, procedimientos ginecológicos y requisitos de los pagadores del sur de Florida.',
    'faq.7.q': '¿Qué pasa con mis reclamaciones rechazadas?',
    'faq.7.a':
      'Revisamos los rechazos, identificamos causas, enviamos claims corregidos o apelaciones cuando aplica y buscamos patrones que deben corregirse en la operación.',
    'faq.8.q': '¿Están mis datos seguros y cumplen con HIPAA?',
    'faq.8.a':
      'Sí. Operamos con total cumplimiento de HIPAA — BAAs firmados, transmisión de datos cifrada, controles de acceso basados en roles y auditorías de seguridad regulares. La protección de PHI no es negociable.',

    // CTA
    'cta.title': '¿Buscan un Mejor Partner de Billing?',
    'cta.subtitle':
      'Cuéntenos cómo funciona hoy su clínica y su billing. Le diremos si somos un buen fit y cómo operamos con nuestro modelo de precios.',
    'cta.cta': 'Iniciar la Conversación',
    'cta.input.placeholder': 'Su correo electrónico de trabajo',
    'cta.clinic.placeholder': 'Nombre del consultorio o clínica',
    'cta.sent': '¡Gracias! Nos pondremos en contacto en 1 día hábil.',

    // Contact Form
    'contact.eyebrow': 'Contáctenos',
    'contact.title': 'Hablemos de Su Clínica',
    'contact.subtitle':
      'Si está evaluando cambiar de biller o necesita un partner más sólido para su operación, déjenos sus datos y le escribimos.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo de Trabajo',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.clinic': 'Nombre del Consultorio',
    'contact.form.providers': 'Número de Proveedores',
    'contact.form.ehr': 'Sistema EHR Actual',
    'contact.form.message': '¿Cómo podemos ayudarle?',
    'contact.form.submit': 'Hable con Nuestro Equipo',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Su mensaje ha sido enviado! Nos pondremos en contacto en breve.',
    'contact.form.error': 'Algo salió mal. Por favor intente de nuevo o envíenos un correo directamente.',
    'contact.quickinfo.title': 'Información de Contacto',
    'contact.form.ehrPlaceholder': 'Seleccione su EHR...',
    'contact.calendly.title': 'Agende una Llamada',
    'contact.calendly.blurb': 'Elija un horario para conversar sobre su clínica y su operación actual de billing',
    'contact.calendly.cta': 'Abrir Calendario',
    'contact.info.phone': '+1 (305) 000-0000',
    'contact.info.email': 'info@precisembc.com',
    'contact.info.address': 'Miami, FL 33101',

    // Footer
    'footer.tagline': 'Facturación médica especializada para consultorios OBGYN del sur de Florida que necesitan un socio confiable de revenue cycle.',
    'footer.services.title': 'Servicios',
    'footer.resources.title': 'Recursos',
    'footer.legal.title': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.hipaa': 'Aviso HIPAA',
    'footer.copyright': '© 2025 Precise Medical Billing and Coding LLC. Todos los derechos reservados.',
    'footer.disclaimer':
      'Precise MBC no es un bufete de abogados y no proporciona asesoramiento legal. Los servicios de facturación médica se proporcionan con fines informativos.',

    // WhatsApp
    'whatsapp.label': 'Chatear por WhatsApp',
    'whatsapp.message': 'Hola, quiero más información sobre sus servicios de billing médico para mi clínica OBGYN.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
