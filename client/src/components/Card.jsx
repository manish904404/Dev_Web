/**
 * Card Component
 *
 * A reusable card component that accepts props for customization.
 * Perfect for displaying features, services, or any content in a card format.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the card
 * @param {string} props.description - The description text
 * @param {string} props.icon - Emoji or icon to display (optional)
 * @param {Function} props.onClick - Click handler function (optional)
 *
 * @example
 * // Usage:
 * <Card
 *   title="Feature Title"
 *   description="This is a feature description."
 *   icon="🚀"
 *   onClick={() => console.log('Card clicked')}
 * />
 */

function Card({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Icon (optional) */}
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      {/* Card Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Card Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default Card;
