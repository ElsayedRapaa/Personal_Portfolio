import { IconType } from "react-icons";

interface SocialItemProps {
  icon: IconType;
  href?: string;
  darkMode?: boolean;
}

const SocialItem: React.FC<SocialItemProps> = ({
  icon: Icon,
  href,
  darkMode,
}) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          rounded-full
          p-2
          transition
          ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
          ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
          ${darkMode ? "text-neutral-300" : "text-neutral-900"}
          ${darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"}
        `}
      >
        <Icon size={18} />
      </a>
    </>
  );
};

export default SocialItem;
