interface PortfolioCardProps {
  darkMode?: boolean;
  title: string;
  imgUrl: string;
  url: string;
  type: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  darkMode,
  title,
  imgUrl,
  url,
  type,
}) => {
  return (
    <div
      className={`
        p-4
        rounded-xl
        shadow-md
        group
        ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
      `}
    >
      <div
        className="
          w-full
          h-64
          overflow-hidden
        "
      >
        <img
          src={imgUrl}
          alt={title}
          className="
            object-contain
            w-full
            h-full
            rounded-xl
            group-hover:scale-110
            duration-300
          "
        />
      </div>
      <div
        className="
          pt-4
          grid
          grid-cols-3
          gap-3
        "
      >
        {type.map((item, index) => (
          <span
            key={index}
            className={`
              ${darkMode ? "bg-neutral-900/70" : "bg-neutral-200"}
              text-center
              rounded-md
              text-sm
              font-semibold
              p-1
              h-fit
            `}
          >
            # {item.toUpperCase()}
          </span>
        ))}
      </div>
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
          pt-4
        "
      >
        <h2
          className="
            font-semibold
            uppercase
          "
        >
          {title}
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            cursor-pointer
            py-1
            px-4
            rounded-xl
            border-2
            transition
            ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
            ${darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"}
            ${darkMode ? "border-neutral-100" : "border-neutral-900"}
          `}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
