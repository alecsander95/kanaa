KANAA – Especificaciones Técnicas de Identidad Visual

Front-end / UI · Documento para TRAE

1. Tipografía
Familias tipográficas

Headings / Títulos: Roboto Serif

Body / UI / Labels: Gilroy

Uso obligatorio

H1 – H4: Roboto Serif

Texto base, navegación, formularios, botones, captions: Gilroy

No utilizar tipografías adicionales.

Escala tipográfica (referencia)

text-xxs → microcopy

text-xs → labels secundarios

text-sm → texto auxiliar

text-base → body principal

text-lg → lead text

text-xl → subtítulos

text-2xl a text-7xl → títulos y hero text

2. Paleta de colores (Design Tokens)

Todos los colores deben implementarse como tokens reutilizables.
❌ No usar colores fuera de estas familias.

🎨 Grey (neutrales, texto, bordes)

grey-light

grey-light-hover

grey-light-active

grey-normal

grey-normal-hover

grey-normal-active

grey-dark

grey-dark-hover

grey-dark-active

grey-darker

🟡 Gold (acentos, CTAs secundarios)

gold-light

gold-light-hover

gold-light-active

gold-normal

gold-normal-hover

gold-normal-active

gold-dark

gold-dark-hover

gold-dark-active

gold-darker

🟢 Green (color institucional, fondos fuertes, footer)

green-light

green-light-hover

green-light-active

green-normal

green-normal-hover

green-normal-active

green-dark

green-dark-hover

green-dark-active

green-darker

🟤 Beige (fondo principal, bloques editoriales)

beige-light

beige-light-hover

beige-light-active

beige-normal

beige-normal-hover

beige-normal-active

beige-dark

beige-dark-hover

beige-dark-active

beige-darker

3. Logotipo
Versiones permitidas

Logo principal horizontal (símbolo + KANAA)

Variante clara

Variante oscura

Variante monocromática

Reglas de uso

Mantener proporciones originales

No deformar

No aplicar sombras, gradientes ni efectos

Usar variante clara sobre fondos oscuros o imágenes

Usar variante oscura sobre fondos claros (beige)

4. Estilo visual general

Estilo premium, cálido y minimalista

Sensación de calma, confianza y hospitalidad

Uso amplio de espacios en blanco

Bordes redondeados suaves

Contraste moderado

❌ Evitar colores saturados y efectos agresivos

5. Componentes UI
Botones

Tipografía: Gilroy

Bordes redondeados

Estados: default, hover, active, disabled

CTA principal con ícono de flecha

Formularios

Inputs con bordes suaves

Labels claros y legibles

Estados visuales definidos (focus, error)

Formularios en hero con glassmorphism:

Fondo semitransparente

Blur (backdrop-filter)

Bordes suaves

Sombra ligera

Cards

Bordes redondeados

Imagen protagonista

Hover sutil (elevación o sombra)

Sin animaciones agresivas

6. Responsive Design (obligatorio)

Implementación mobile-first

Breakpoints

sm → mobile

md → tablet

lg → laptop

xl → desktop

2xl → wide screens

Reglas

Grids se apilan en mobile

Carruseles:

1 elemento → mobile

2 elementos → tablet

3–4 elementos → desktop

Tipografía escala correctamente

Botones e inputs ≥ 44px

Evitar overflow horizontal

7. Restricciones clave

❌ No crear nuevos estilos
❌ No modificar la paleta
❌ No alterar jerarquías tipográficas
❌ No cambiar layouts de las pantallas entregadas
✅ Priorizar fidelidad visual sobre creatividad

8. Resultado esperado

Front-end alineado a la identidad KANAA

Código limpio, escalable y reutilizable

Listo para integración con back-end externo