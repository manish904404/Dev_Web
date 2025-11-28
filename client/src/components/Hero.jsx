/**
 * Hero Component
 *
 * A hero section component that displays a welcome message and call-to-action buttons.
 * Great for landing pages and homepages.
 *
 * @component
 * @example
 * // Usage in App.jsx:
 * import Hero from './components/Hero'
 * <Hero />
 */

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Dev_Web
        </h1>

        {/* Subheading / Description */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          A full-stack template built with React, Vite, Tailwind CSS, Node.js,
          and Express. Start building your next amazing project today!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button */}
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
            Get Started
          </button>

          {/* Secondary Button */}
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
            Learn More
          </button>
        </div>

        {/* Tech Stack Icons/Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            ⚛️ React
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            ⚡ Vite
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            🎨 Tailwind CSS
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            🟢 Node.js
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Express
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
