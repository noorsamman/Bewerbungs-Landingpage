# Bewerbung Landing Page - AI Coding Guide

## Project Overview
A single-page application landing page for recruitment/application purposes. Uses vanilla HTML/CSS for lightweight performance and ease of deployment.

## File Structure & Architecture
- **index.html** - Single entry point; contains all semantic structure (no component files)
- **style.css** - Global stylesheet; no preprocessors (CSS variables for theming only)

## Key Patterns & Conventions

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<section>`, `<footer>`, `<nav>`)
- Single-page layout: header → hero section → features → CTA → footer
- Mobile-first viewport: always include `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Language attribute: use `lang="de"` for German content or `lang="en"` as needed

### CSS Approach
- **No CSS frameworks** - Bootstrap/Tailwind not used; custom CSS only
- **CSS Variables** for theme colors/spacing - define in `:root` selector
- **Mobile-first**: write mobile styles first, add media queries for larger screens
- **BEM naming** (Block Element Modifier) where applicable for clarity: `.btn--primary`, `.card__header`
- No JavaScript by default - keep interactions CSS-only (`:hover`, `:focus` states)

### Responsive Design
Breakpoints (if needed):
- Mobile: < 768px (default mobile-first)
- Tablet: ≥ 768px (`@media (min-width: 768px)`)
- Desktop: ≥ 1024px (`@media (min-width: 1024px)`)

## Common Tasks

### Adding a New Section
1. Add `<section class="section-name">` to HTML with semantic content
2. Style with class `.section-name` in CSS, using predefined variables
3. Use relative sizing (`em`, `%`) for flexibility

### Adding Links/Buttons
- Use `<a>` for navigation, `<button>` for actions
- Style both with `.btn` base class + modifier (`.btn--primary`, `.btn--secondary`)
- Ensure visible `:focus` states for accessibility

### Testing Locally
- Open `index.html` directly in browser (no server required)
- Test across mobile, tablet, desktop viewports (DevTools device toolbar)
- Validate HTML: https://validator.w3.org/
- Test CSS browser compatibility for older IE if needed (or document support cutoff)

## External Dependencies
None - this is a zero-dependency project. All functionality must be HTML/CSS.

## Accessibility Considerations
- Use semantic HTML to improve screen reader navigation
- Ensure color contrast meets WCAG AA standard (4.5:1 for text)
- Include `alt` text on all images
- Test keyboard navigation (Tab through interactive elements)
