/**
 * App Component
 *
 * This is the main component of the React application.
 * It serves as the entry point and renders the demo homepage.
 *
 * The app includes:
 * - A responsive navigation bar
 * - A hero section with welcome message
 * - Feature cards showcasing the tech stack
 * - A footer with links and copyright
 */

import { Navbar, Hero, Card, Footer } from "./components";

function App() {
  // Sample feature data for the cards
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Vite provides instant server start and lightning-fast Hot Module Replacement (HMR) for a smooth development experience.",
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description:
        "Tailwind CSS offers utility-first CSS framework for rapidly building custom, responsive user interfaces.",
    },
    {
      icon: "🔄",
      title: "Full-Stack Ready",
      description:
        "Node.js and Express backend ready to handle your API requests, authentication, and database operations.",
    },
    {
      icon: "📦",
      title: "Modular Structure",
      description:
        "Well-organized folder structure with separate client and server directories for clean, maintainable code.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description:
        "CORS configured for secure cross-origin requests and environment variables for sensitive data protection.",
    },
    {
      icon: "📚",
      title: "Well Documented",
      description:
        "Comprehensive README files and code comments to help beginners understand and extend the project.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section id="services" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to start building modern full-stack web
                applications.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About This Template
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dev_Web is a beginner-friendly full-stack template designed to
                help developers get started quickly with modern web development.
                It combines the power of React for the frontend, Tailwind CSS
                for styling, and Node.js with Express for the backend. The
                project structure is clean, well-documented, and follows best
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Have questions or want to contribute? Feel free to reach out or
                open an issue on GitHub!
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
