// FullScreenLoader.jsx
import InlineSpinner from "./InlineSpiner";

const FullScreenLoader = ({ message = "Loading..." }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <InlineSpinner size={48} className="text-gray-700" />
        <p className="text-white text-sm opacity-90">{message}</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
