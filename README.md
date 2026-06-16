# Real Estate Admin Dashboard

A responsive admin dashboard built with React, Vite, React Router, and Bootstrap. It provides a sidebar navigation layout for viewing the dashboard, property list, and property details pages.

## Features

- React 19 + Vite application scaffold
- Client-side routing with `react-router-dom`
- Responsive sidebar layout with mobile overlay support
- Bootstrap 5 styling and Bootstrap Icons
- Property list and detail views

## Project Structure

- `src/App.jsx` - route configuration
- `src/main.jsx` - app entry point with `BrowserRouter`
- `src/components/layout` - layout and sidebar components
- `src/pages` - `Dashboard`, `Properties`, and `PropertyDetails` pages
- `src/data` - static app data such as sidebar menu items and properties

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint on the source files:

```bash
npm run lint
```

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `bootstrap`
- `bootstrap-icons`

## Notes

This repository is designed as a small admin dashboard starter for managing real estate properties and navigating app pages with a responsive sidebar layout.
