interface ErrorProps {
  darkMode?: boolean;
}

const Error: React.FC<ErrorProps> = ({ darkMode }) => {
  return (
    <div
      className={`
        min-h-screen
        min-w-screen
        flex
        items-center
        justify-center
        gap-4
        ${darkMode ? "bg-neutral-900" : "bg-white"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
        ${darkMode ? "border-neutral-700" : "border-neutral-200"}
      `}
    >
      <h2
        className="
          font-semibold
          text-xl
        "
      >
        404
      </h2>
      <div
        className="
          h-12
          border-2
          rounded-xl
        "
      ></div>
      <p
        className="
          font-light
          text-sm
        "
      >
        This page could not be found.
      </p>
    </div>
  );
};

export default Error;
