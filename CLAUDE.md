# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Junaid Abbas Mohammed, a Full Stack / Frontend / AI Engineer. The site is deployed at https://junaid-abbas.netlify.app/

## Development Commands

No build system or package manager is used. To develop locally:
- Open `Index.html` directly in a browser, or
- Use any static file server (e.g., `python -m http.server 8000`, VS Code Live Server)

## Architecture

### File Structure
- `Index.html` - Single-page site with all sections (banner, about, experience timeline, skills, projects, testimonials, footer)
- `css/style.css` - Main stylesheet that imports modular CSS files
- `css/partials/_variables.css` - CSS custom properties for colors, fonts, shadows
- `css/partials/_global.css` - Shared utility classes and button styles
- `css/responsive.css` - Mobile/tablet breakpoint styles
- `js/main.js` - jQuery-based interactivity (project filtering, carousel, sticky nav)

### CSS Architecture
CSS variables are defined in `_variables.css`:
- `--primary-color` / `--secondary-color` - Brand gradient colors (blue to purple)
- `--gradient-color` - Linear gradient used for buttons and accents
- `--box-shadow` / `--shadow-color` - Consistent shadow treatments

### JavaScript Dependencies (loaded via vendor folders)
- **jQuery 3.6.0** - DOM manipulation and event handling
- **Isotope** - Project grid filtering by category (work/academic/practice/ai)
- **Owl Carousel** - Testimonials slider
- **Bootstrap 5.2.3** - Grid system and navbar components

### Key Interactive Features
1. **Project filtering** - Isotope-powered filter buttons (All/Work/Academic/Practice/AI/ML)
2. **Sticky navbar** - Fixed header after scrolling past banner
3. **Typing animation** - CSS keyframe animation in banner section
4. **Testimonials carousel** - Auto-playing Owl Carousel

## Content Sections
- Banner with typing animation effect
- About Me introduction
- Experience Timeline (vertical timeline layout)
- Skills & Technologies (categorized skill badges)
- Projects grid with filtering
- Testimonials carousel
- Footer with social links
