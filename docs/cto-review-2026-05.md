# CTO Review: Precise MBC

Fecha: 2026-05-02

## Resumen Ejecutivo

Precise MBC ya tiene una base razonable como landing B2B de healthcare: estructura clara, bilingüe, stack simple, copy centralizado y una narrativa enfocada en OBGYN South Florida. El problema no es falta de material; el problema es **calidad de ejecución inconsistente**. Hoy el sitio comunica una intención correcta, pero no llega todavía al nivel de confianza, precisión visual y credibilidad operativa que debería proyectar un partner serio de medical billing.

Los principales riesgos actuales son:

1. **Diseño inconsistente**. El sistema visual no está completamente unificado. Hay bloques bien resueltos y otros que se sienten genéricos o desalineados entre sí.
2. **Dark mode incompleto**. Existe soporte parcial, pero no está terminado. Esto degrada percepción de calidad y eleva costo de mantenimiento.
3. **Credibilidad frágil en claims y proof**. Varias cifras, testimonios y mensajes de compliance se ven útiles para conversión, pero no están claramente respaldados en la experiencia.
4. **Copy correcto, pero todavía genérico en momentos clave**. El posicionamiento está bien orientado, pero el hero, pricing y trust layer todavía no convierten especialización en una propuesta verdaderamente premium.
5. **Flujo de conversión duplicado y poco jerarquizado**. Hay CTA, quick form, contact form y WhatsApp, pero la arquitectura de decisión todavía no prioriza bien cuál acción debería tomar un visitante según intención.

Conclusión: el proyecto no necesita un rediseño total. Necesita una **iteración de calidad** que cierre diseño, refuerce proof, limpie copy y haga más rigurosa la experiencia.

## Scorecard

| Área | Score | Diagnóstico |
| --- | --- | --- |
| Sistema visual | 6/10 | Buena base cromática y tipográfica, pero inconsistencias de superficies, sombras, densidad y bloques. |
| Jerarquía de información | 7/10 | La secuencia general funciona, aunque varios bloques no empujan suficiente claridad o diferenciación. |
| Conversión / CTA flow | 6/10 | Hay múltiples caminos de contacto, pero falta una estrategia más nítida por intención del usuario. |
| Trust / credibility | 5/10 | La intención está, pero hoy la prueba se siente más declarativa que demostrada. |
| Copy EN/ES | 7/10 | El bilingüismo está bien resuelto en estructura; falta más precisión, tono premium y respaldo factual. |
| Responsive UX | 7/10 | La estructura general responde, pero el header y ciertos bloques están tensos en densidad y decisiones de control. |
| Dark mode | 4/10 | Implementado parcialmente; no debe considerarse feature terminada. |
| Frontend polish | 6/10 | Stack apropiado; faltan rigor visual, validación final y saneamiento de consistencia. |

## Hallazgos Prioritarios

### P0

#### 1. Dark mode no está terminado y no debe tratarse como shipped

El sitio ya tiene selector de tema y parte del sistema responde, pero la implementación actual sigue dependiendo de overrides globales sobre utilidades ya existentes. Eso deja un estado frágil: algunas secciones cambian correctamente y otras siguen con fondos, bordes o contrastes heredados del light mode.

Impacto:
- Da sensación de producto a medio cerrar.
- Hace más costoso mantener cada nueva sección.
- Complica QA porque el comportamiento depende de cascada y no de semántica del componente.

Decisión:
- En la siguiente iteración, **dark mode debe pasar de “override global” a “component-aware theming”** para todos los bloques principales de homepage y layouts.
- Si no se puede cerrar en una sola iteración, es preferible desactivar el toggle temporalmente que mantener un modo incompleto.

#### 2. El sitio todavía no transmite suficiente autoridad especializada

El posicionamiento dice “OBGYN billing partner”, pero la experiencia no lo demuestra con suficiente densidad de proof. Hoy la especialización aparece en copy y en algunos CPT examples, pero no existe un bloque fuerte de evidencia operacional.

Impacto:
- El visitante puede percibir “otro billing service con nicho OBGYN”, no necesariamente “partner claramente superior y especializado”.

Decisión:
- Añadir una capa explícita de evidencia:
  - payer familiarity,
  - workflow ownership,
  - credentialing scope,
  - denial recovery discipline,
  - onboarding expectations,
  - compliance/process safeguards.

#### 3. Algunos claims de métricas y testimonios son agresivos para el nivel actual de proof

Hay cifras como `98% Clean Claim Rate`, `30% A/R Reduction`, `24h Claim Turnaround` y testimonials con montos concretos. En ausencia de source attribution o case-study framing, eso puede ayudar a captar atención, pero también puede bajar confianza en buyers sofisticados.

Impacto:
- Riesgo reputacional.
- Riesgo legal/comercial si no existe respaldo.
- Reduce la percepción premium si suena “marketing-heavy”.

Decisión:
- Mantener solo claims verificables.
- Convertir métricas no verificadas en lenguaje de outcome más prudente.
- Si existen datos reales, moverlos a formato “case-study” o “representative outcomes” con contexto.

#### 4. La arquitectura de conversión está demasiado repartida

Hero CTA, WhatsApp, quick form, pricing CTA y full contact form compiten entre sí. El visitante tiene opciones, pero no una guía clara de cuál camino tomar según nivel de intención.

Impacto:
- Más opciones no equivalen a mejor conversión.
- El sitio todavía no diferencia bien discovery intent vs high-intent lead.

Decisión:
- Definir una jerarquía:
  - primaria: `Request Pricing` / `Talk to Our Team`
  - secundaria: WhatsApp
  - terciaria: quick form
- El quick form debe existir solo si captura usuarios de baja fricción mejor que el form principal. Si no, debe simplificarse o removerse.

### P1

#### 5. El sistema visual se siente correcto, pero no completamente intencional

La marca usa bien la base de Figtree + Noto Sans y una paleta trust-first, pero algunos módulos siguen pareciendo plantillas Tailwind adaptadas, no un sistema premium cerrado.

Síntomas:
- sombras con criterios distintos,
- tarjetas muy similares entre secciones,
- niveles de contraste desparejos,
- gradientes correctos pero poco memorables,
- badges, icons y cards sin una gramática visual suficientemente estricta.

Decisión:
- Consolidar un sistema de superficies:
  - `surface-primary`
  - `surface-secondary`
  - `surface-emphasis`
  - `surface-inverse`
- Reducir variedad ornamental.
- Hacer más nítido el contraste entre bloques informativos, proof blocks y CTA blocks.

#### 6. El hero está bien orientado, pero todavía no cierra suficiente tensión comercial

El hero comunica nicho, geografía y servicio. Eso está bien. Lo que falta es convertir esa claridad en una propuesta de valor con más borde.

Hoy:
- headline correcto,
- subtitle descriptivo,
- stats útiles,
- imagen adecuada pero genérica.

Falta:
- una razón concreta para elegir Precise MBC ahora,
- una formulación más fuerte del pain,
- una señal más específica del buyer fit.

Decisión:
- Reescribir el hero para que combine:
  - especialización,
  - ownership operativo,
  - impacto esperado,
  - fit claro del cliente.

#### 7. Pricing explica el modelo, pero no lo hace deseable

El bloque actual ordena la oferta, pero parece más una tabla de paquetes SaaS que una conversación seria de servicio profesional especializado.

Problema:
- El negocio dice percentage-of-collections.
- La UI sugiere tiers muy cerrados, casi productizados.

Decisión:
- Mantener la estructura comparativa si ayuda a escanear.
- Reposicionar visual y verbalmente el bloque como “engagement fit bands”, no como pricing cards tipo SaaS.
- Agregar lenguaje de scope calibration y onboarding review.

### P2

#### 8. README y documentación operativa están desactualizados respecto al estado real

La documentación menciona `favicon.ico` y no refleja cambios recientes en branding/theme behavior. No bloquea negocio, pero sí refleja menor disciplina operativa.

#### 9. Footer, trust bar y algunos módulos de support content necesitan unificación fina

Son detalles de polish, no de estrategia:
- alineación,
- ritmo de spacing,
- comportamiento de badges,
- semántica de iconos,
- composición de la columna de marca.

## Revisión por Subsystem

### 1. Brand y sistema visual

#### Qué funciona

- Paleta base sobria y adecuada para healthcare B2B.
- Tipografía alineada con claridad y confianza.
- El logo nuevo mejora la identidad frente al icon placeholder anterior.
- La estructura modular facilita consolidar un design system real.

#### Qué falla

- El sistema aún no tiene reglas suficientemente estrictas para superficies, acentos y elevation.
- Muchas tarjetas comparten casi el mismo patrón visual y reducen memorabilidad.
- El dark mode se añadió tarde sobre una base pensada para light mode.

#### Dirección correcta

- Mantener el lenguaje “clean clinical premium”.
- Evitar efectos adicionales o estilo startup genérico.
- Establecer una gramática visual más cerrada:
  - cards informativas con surface suave,
  - cards de proof con mayor contraste,
  - CTA blocks con inverse treatment,
  - badges menos decorativos y más funcionales.

### 2. Homepage UX y orden de secciones

Orden actual:
Hero → Trust bar → Services → OBGYN specialty → Why Us → Process → Stats → Testimonials → Pricing → CTA → FAQ → Contact

#### Evaluación

El orden es **razonablemente bueno** y no requiere reestructuración completa. La principal mejora no es mover todo, sino reforzar la intención de cada bloque.

#### Cambios de intención recomendados

- **Hero**: pasar de “descripción del servicio” a “specialist billing partner with clear fit and outcome”.
- **Trust bar**: convertirlo en proof strip más contundente, menos decorativo.
- **Services**: reducir percepción de lista genérica y enfatizar ownership operativo.
- **OBGYN specialty**: mantenerlo; es uno de los bloques con mayor valor estratégico.
- **Why Us**: hoy se superpone con specialty y process. Debe volverse más diferenciador y menos abstracto.
- **Process**: correcto, pero debe enfatizar onboarding clarity y reporting discipline.
- **Stats**: solo mantener cifras verificables.
- **Testimonials**: si no se validan, suavizar o convertir a anonymized composite language.
- **Pricing**: reformular como fit bands / engagement model.
- **CTA + Contact**: revisar si ambos están justificadamente separados.

### 3. Copy y contenido

#### Estado actual

El copy está mejor que el promedio de una landing pequeña. Es claro, ordenado y mayormente comprensible. El problema no es mala redacción; el problema es que en varios puntos sigue sonando “correcto” en lugar de “convincente y premium”.

#### Problemas principales

- Hero demasiado explicativo.
- `Why Us` todavía abstracto.
- `Pricing` demasiado parecido a paquetes de software.
- `FAQ` mezcla buenas respuestas con afirmaciones fuertes no siempre respaldadas.
- Algunos textos de trust/compliance son demasiado declarativos.

#### Decisiones de copy

- **Hero**
  - Mantener foco en OBGYN + South Florida.
  - Reemplazar lenguaje genérico por una promesa más operativa.
  - Incluir fit statement explícito para el buyer correcto.

- **Trust / proof**
  - Priorizar evidencia observable, no adjetivos.
  - Añadir wording como:
    - “claims follow-up ownership”
    - “payer-specific billing discipline”
    - “visibility for practice leadership”

- **Services**
  - Reescribir descriptions para mostrar accountability, no solo tasks.

- **Pricing**
  - Cambiar naming visual y verbal para evitar lectura “SaaS tiers”.
  - Explicar claramente qué determina el percentage range.

- **FAQ**
  - Revisar claims de HIPAA, audits, coder specialization y performance ranges.
  - Donde no haya proof explícito, mover a lenguaje prudente.

#### EN / ES

La estructura bilingüe está bien planteada, pero el output final debe revisarse con este criterio:
- el español no debe sentirse traducido del inglés,
- el inglés debe sonar como professional services healthcare copy,
- ambos idiomas deben mantener la misma jerarquía de claims y prudencia.

### 4. Conversión y trust

#### Estado actual

La intención de conversión existe, pero la estrategia todavía es más acumulativa que orquestada.

#### Decisiones

- CTA principal del hero:
  - mantener una acción de consultative intent.
  - preferencia: `Request Pricing` o `Talk to Our Team`, pero usar una sola convención dominante.

- CTA secundaria:
  - WhatsApp como canal de convenience, no como CTA dominante.

- Quick form:
  - mantenerlo solo si el objetivo es capturar visitantes de baja fricción antes del full form.
  - si permanece, debe ser tratado como micro-conversion y no competir visualmente con la acción principal.

- Contact form:
  - conservarlo como destino principal de alta intención.
  - revisar longitud, visual density y proof around the form.

#### Trust assets a añadir

Se recomienda agregar al menos 2 de estos 5 en la siguiente iteración:
- “Who we work with” proof strip
- payer familiarity references
- anonymized case study block
- onboarding expectations block
- credentials / workflow / compliance evidence block

### 5. Dark mode y frontend rigor

#### Estado actual

Dark mode existe, pero la arquitectura es transicional. El sistema depende demasiado de overrides generales para utilidades preexistentes.

#### Decisión técnica

La siguiente iteración debe usar esta política:

1. Mantener `system` como default y persistencia en `localStorage`.
2. Mantener el toggle actual como patrón de producto.
3. Migrar bloques principales a theming explícito por componente:
   - Header
   - Footer
   - Hero
   - Services
   - Why Us
   - Testimonials
   - Pricing
   - FAQ
   - Contact
4. Dejar los overrides globales solo como red de seguridad, no como mecanismo principal.
5. Ajustar favicon según tema efectivo del usuario, no solo media query.

#### Hallazgos de ingeniería

- El proyecto no pudo validarse con build desde este entorno porque el repo requiere Node `>=22.12.0` y el entorno observado sigue en `v20.19.4`.
- La documentación operativa del repo no está alineada con el estado visual actual.

## Roadmap Priorizado

### P0: release de credibilidad y consistencia

- Cerrar dark mode en homepage y layouts principales.
- Auditar y depurar claims no respaldados.
- Reescribir hero, trust layer y pricing language.
- Unificar estrategia CTA primaria/secundaria.
- Añadir 1 bloque real de evidencia operativa.

### P1: iteración premium del sistema visual

- Consolidar tokens y reglas de superficies.
- Diferenciar visualmente cards informativas, proof cards y CTA blocks.
- Reducir aspecto “template Tailwind”.
- Ajustar spacing, shadow policy y icon grammar.
- Mejorar visual hierarchy de footer, FAQ y pricing.

### P2: endurecimiento operacional

- Actualizar README y docs de mantenimiento.
- Añadir checklist de QA para light/dark, EN/ES y mobile.
- Revisar accesibilidad y contrastes finales.

## Especificación Cerrada para la Siguiente Iteración

### Objetivo

Convertir Precise MBC de una landing funcional a una landing **trust-first, specialist-grade, conversion-ready**, sin cambiar stack ni arquitectura general del sitio.

### Alcance

- Mantener Astro + Tailwind + i18n actual.
- Mantener estructura de homepage.
- No introducir CMS ni backend nuevo.
- No rediseñar marca desde cero.

### Cambios requeridos

#### Diseño

- Establecer 4 tipos de superficie:
  - base light
  - muted light
  - base dark
  - emphasis/inverse
- Reducir variedad de sombras a 2 niveles.
- Usar el color azul como acento funcional, no decorativo.
- Reservar el dorado/champagne solo para señales premium o featured emphasis.

#### Hero

- Nuevo headline orientado a specialist ownership.
- Nuevo subtitle con mayor tensión comercial.
- Mantener 2 CTAs máximo.
- Sustituir o complementar imagen con visual más propio del domain si es posible.

#### Trust / Proof

- Convertir trust bar en proof-driven strip.
- Añadir evidence module debajo o integrado antes de pricing.

#### Pricing

- Reposicionar cards como fit bands, no packages cerrados.
- Añadir copy de “scope depends on provider count, payer mix, claim complexity, and support needs”.

#### Contact / conversion

- Definir primary conversion path:
  - Hero CTA
  - Contact form
- Definir secondary:
  - WhatsApp
- Definir tertiary:
  - quick form

#### Theme system

- Mantener toggle actual.
- Refactorizar componentes críticos para theming explícito.
- QA visual completo en:
  - hero
  - trust bar
  - services
  - specialty
  - why us
  - testimonials
  - pricing
  - CTA
  - FAQ
  - contact
  - footer

## Casos de Prueba

- Desktop light mode: homepage completa sin superficies blancas rotas ni contrastes débiles.
- Desktop dark mode: homepage completa visualmente coherente, sin cards heredadas del light mode.
- Mobile light/dark: header, theme toggle, language switcher, CTA y forms sin colisiones.
- EN/ES parity: misma jerarquía, mismo nivel de prudencia en claims, misma calidad de tono.
- Conversion flow:
  - hero CTA visible y claro,
  - pricing no confunde,
  - contact form no genera fricción innecesaria,
  - WhatsApp actúa como canal secundario.
- Credibility review:
  - no numeric claim sin respaldo,
  - no testimonial demasiado específico sin validación,
  - compliance wording prudente y profesional.

## Aprobación de Calidad

La siguiente versión debe considerarse lista solo si:

- Se percibe como un specialist healthcare partner y no como un billing vendor genérico.
- Light y dark mode se sienten ambos intencionales.
- El hero deja claro quién es el buyer correcto y por qué Precise MBC es distinta.
- Las pruebas de trust se sienten observables y no solo declarativas.
- La experiencia móvil conserva claridad y jerarquía.
