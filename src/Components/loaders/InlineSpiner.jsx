// InlineSpinner.jsx

const InlineSpinner = ({ size = 24, className = "text-red-600" }) => {
  const px = size;
  return (
    <svg
      role="status"
      className={`animate-spin inline-block ${className}`}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
};

export default InlineSpinner;
