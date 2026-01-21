# AGENTS.md

This file provides guidance for AI agents working in this repository.

## Project Overview

Static personal portfolio website for Junaid Abbas Mohammed (Full Stack / Frontend / AI Engineer). No build system or package manager - this is a pure HTML/CSS/JavaScript static site.

## Development Commands

**Local Development:**
- Open `Index.html` directly in browser
- Or serve with any static file server:
  ```bash
  python -m http.server 8000
  npx serve .
  # or any other static server
  ```

**No build/lint/test commands exist.** This is a static site with no build tooling.

## File Structure

- `Index.html` - Single-page site structure
- `css/style.css` - Main stylesheet importing partials
- `css/partials/_variables.css` - CSS custom properties (colors, fonts, shadows)
- `css/partials/_global.css` - Shared utility classes and button styles
- `css/responsive.css` - Mobile/tablet breakpoint styles
- `js/main.js` - jQuery-based interactivity (project filtering, carousel, sticky nav)

## Code Style Guidelines

### CSS Conventions

**CSS Variables:**
- Define all colors, fonts, and shadows in `css/partials/_variables.css` under `:root`
- Use `--primary-color` / `--secondary-color` for brand gradient (blue #4458dc to purple #854fee)
- Use `--gradient-color` for linear gradient applications
- Use `--box-shadow` and `--shadow-color` consistently
- Group related variables (colors, typography, spacing)

**Class Naming:**
- Use BEM-style naming: `.block__element--modifier` (e.g., `.button.primary-button`, `.site-main .project-area`)
- Component classes should be descriptive and lowercase with hyphens
- Avoid over-specific selectors; prefer composition

**Formatting:**
- Use 2-space indentation
- Put opening brace on same line as selector
- Use shorthand properties where appropriate
- Group related selectors and properties

**Structure:**
- Import partials at top of `style.css` using `@import url()`
- Keep component styles in `style.css` unless they grow large enough to warrant a separate file
- Use `[data-theme="dark"]` attribute selector for dark mode overrides

### JavaScript Conventions

**jQuery Usage:**
- Wrap code in `$(function(){ ... })` for document-ready execution
- Use jQuery for DOM manipulation and event handling (per existing codebase)
- Use vanilla JS for new utilities (modal, theme toggle, scroll animations follow this pattern)

**Code Organization:**
- Use IIFE pattern for standalone modules: `(function() { ... })();`
- Define data objects (like `projectData`) for configuration/data
- Use `const` for all declarations (avoid `var`, use `let` sparingly)
- Separate concerns into distinct functions

**Naming:**
- camelCase for variables and functions
- `$` prefix for jQuery objects (e.g., `$btns`, `$navbar`)
- Descriptive names: avoid single-letter variables except in loops

**Formatting:**
- 2-space indentation
- Semicolons required
- Space after keywords: `if (condition) {`
- No comments unless explaining complex logic (existing codebase has minimal comments)

### HTML Conventions

**Structure:**
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Use Bootstrap classes for grid and components where applicable
- Data attributes for JavaScript hooks: `data-filter`, `data-project`

### Color & Theming

**CSS Variables for Colors:**
- `--primary-color`: #4458dc
- `--secondary-color`: #854fee
- `--gradient-color`: linear-gradient(90deg, #4458dc 0%, #854fee 100%)
- `--title-color`: Primary text color
- `--text-color`: Secondary text color
- `--text-muted`: Muted/lighter text
- `--bg-color`: Page background
- `--card-bg`: Card/component background
- `--surface-border`: Border colors

**Dark Mode:**
- Dark mode uses `[data-theme="dark"]` attribute on `<html>`
- Define overrides using `[data-theme="dark"]` prefix selectors
- Maintain color consistency: adjust shadows and borders for dark backgrounds

## Interactive Features

The site implements:
1. **Project Filtering** - Isotope-powered filter buttons (All/Work/Academic/Practice/AI)
2. **Sticky Navbar** - Fixed header after scrolling past banner
3. **Typing Animation** - CSS keyframe animation in banner section
4. **Testimonials Carousel** - Owl Carousel slider
5. **Project Modals** - Click cards to view details
6. **Dark Mode Toggle** - Persists to localStorage
7. **Scroll Animations** - IntersectionObserver for fade-in effects

## Dependencies (loaded via vendor folders)

- jQuery 3.6.0
- Isotope (project filtering)
- Owl Carousel (testimonials)
- Bootstrap 5.2.3 (grid, navbar)
- Font Awesome (icons)

## General Principles

- Prefer CSS animations over JavaScript animations
- Keep JavaScript minimal; use CSS where possible
- Maintain accessibility (focus states, semantic HTML)
- No external CDN links - all vendor files should be local
- Test changes in both light and dark modes
