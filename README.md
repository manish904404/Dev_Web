# Dev_Web - Full-Stack Template

A modern, beginner-friendly full-stack web development template built with **React**, **Vite**, **Tailwind CSS**, **Node.js**, and **Express**.

This project provides a clean, well-documented starting point for building full-stack web applications.

## ✨ Features

- **Frontend (Client)**
  - ⚛️ React 18 with functional components and hooks
  - ⚡ Vite for lightning-fast development
  - 🎨 Tailwind CSS for utility-first styling
  - 📱 Responsive design out of the box
  - 🧩 Reusable component library

- **Backend (Server)**
  - 🟢 Node.js runtime
  - 🚀 Express.js framework
  - 🔒 CORS configured for secure cross-origin requests
  - 📝 Environment variable support with dotenv
  - 📁 Modular folder structure (routes, controllers, middleware)

## 📁 Project Structure

```
Dev_Web/
├── client/                 # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── App.jsx         # Main application component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md           # Client documentation
│
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── routes/         # API route definitions
│   │   └── index.js        # Server entry point
│   ├── .env.example        # Example environment variables
│   ├── package.json
│   └── README.md           # Server documentation
│
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Dev_Web.git
   cd Dev_Web
   ```

2. **Install client dependencies:**

   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies:**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**

   ```bash
   # In the server folder
   cp .env.example .env
   ```

### Running the Application

**Start the backend server:**

```bash
# In the server folder
npm run dev
```

The server will start at `http://localhost:5000`

**Start the frontend client (in a new terminal):**

```bash
# In the client folder
npm run dev
```

The client will start at `http://localhost:5173`

## 📜 Available Commands

### Client Commands

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload   |
| `npm run build`   | Build the app for production                   |
| `npm run preview` | Preview the production build                   |
| `npm run lint`    | Run ESLint                                     |

### Server Commands

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Start with nodemon (auto-restart on changes)     |
| `npm start`     | Start in production mode                         |

## 🌐 API Endpoints

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| GET    | `/`                   | Welcome message          |
| GET    | `/api`                | API documentation        |
| GET    | `/api/users`          | Get all users            |
| GET    | `/api/users/:id`      | Get user by ID           |
| POST   | `/api/users`          | Create a new user        |
| PUT    | `/api/users/:id`      | Update a user            |
| DELETE | `/api/users/:id`      | Delete a user            |
| GET    | `/api/health`         | Health check             |
| GET    | `/api/health/details` | Detailed health check    |

## 🧩 Client Components

The template includes pre-built, reusable components:

- **Navbar** - Responsive navigation bar
- **Hero** - Hero section with call-to-action
- **Card** - Reusable card component
- **Footer** - Footer with links

```jsx
import { Navbar, Hero, Card, Footer } from './components';
```

## 🔧 Configuration

### Environment Variables

**Server (.env):**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Client (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com)
- [Node.js Documentation](https://nodejs.org/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

Built with ❤️ for learning and development
