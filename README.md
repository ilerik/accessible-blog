# Accessible Blog

A simple blog application built with Next.js and a focus on accessibility.

## Features

- Semantic HTML structure
- ARIA attributes for improved screen reader experience
- Keyboard navigation support
- Accessible link text and navigation
- No CSS (pure HTML for now)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home**: Landing page with featured blog posts
- **Posts**: A listing of all blog posts
- **Post Detail**: Individual blog post with full content
- **About**: Information about the blog and accessibility statement

## Accessibility Features

This blog implements numerous accessibility features:

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, etc.)
- ARIA roles, states, and properties
- Skip links for keyboard navigation
- Proper heading hierarchy
- Breadcrumb navigation
- Descriptive link text
- Accessible form labels (for future forms)

## Next Steps

Future enhancements will include:

- Adding CSS with accessibility in mind (proper contrast, focus styles)
- Form controls with proper validation and error messages
- More interactive elements with keyboard support
- Comprehensive testing with screen readers 