# Client - React + Vite + Tailwind CSS

This is the frontend client application built with **React**, **Vite**, and **Tailwind CSS**.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Styling with Tailwind CSS](#styling-with-tailwind-css)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Getting Started

1. **Navigate to the client folder:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Visit `http://localhost:5173` to see the app running.

## 📜 Available Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload   |
| `npm run build`   | Build the app for production                   |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint to check for code issues            |

## 📁 Folder Structure

```
client/
├── public/              # Static assets (favicon, etc.)
│   └── vite.svg
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   │   └── react.svg
│   ├── components/      # Reusable UI components
│   │   ├── index.js     # Export all components
│   │   ├── Navbar.jsx   # Navigation bar component
│   │   ├── Hero.jsx     # Hero section component
│   │   ├── Card.jsx     # Reusable card component
│   │   └── Footer.jsx   # Footer component
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🧩 Components

The template includes the following pre-built components:

### Navbar

A responsive navigation bar with mobile hamburger menu.

```jsx
import { Navbar } from "./components";

<Navbar />;
```

### Hero

A hero section with welcome message and call-to-action buttons.

```jsx
import { Hero } from "./components";

<Hero />;
```

### Card

A reusable card component that accepts props.

```jsx
import { Card } from "./components";

<Card icon="🚀" title="Feature Title" description="Feature description here." />;
```

### Footer

A footer with links and copyright information.

```jsx
import { Footer } from "./components";

<Footer />;
```

## 🎨 Styling with Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind is a utility-first CSS framework that allows you to build custom designs without leaving your HTML/JSX.

### Example Usage

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Hello, Tailwind!
</div>
```

### Useful Tailwind Classes

- **Layout:** `flex`, `grid`, `container`, `mx-auto`
- **Spacing:** `p-4`, `m-2`, `px-6`, `py-3`
- **Colors:** `bg-blue-500`, `text-gray-800`, `border-red-500`
- **Typography:** `text-xl`, `font-bold`, `leading-relaxed`
- **Responsive:** `md:flex`, `lg:grid-cols-3`, `sm:hidden`

### Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## 🔐 Environment Variables

Create a `.env` file in the client folder for environment variables:

```env
# API URL for backend
VITE_API_URL=http://localhost:5000/api

# Other environment variables
VITE_APP_NAME=Dev_Web
```

Access them in your code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

> **Note:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client.

## 📦 Building for Production

1. **Build the application:**

   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist/` folder.

2. **Preview the build:**

   ```bash
   npm run preview
   ```

3. **Deploy:**

   Upload the contents of the `dist/` folder to your hosting provider (Netlify, Vercel, etc.).

## 🔗 Connecting to the Backend

To connect the frontend to the backend API:

1. Start the backend server (see `server/README.md`)
2. Update the API URL in your environment variables
3. Use `fetch` or a library like `axios` to make API calls:

```javascript
const response = await fetch("http://localhost:5000/api/users");
const data = await response.json();
```

---

Happy coding! 🎉
