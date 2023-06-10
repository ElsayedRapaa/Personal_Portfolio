import { IconType } from "react-icons";

interface DarkModeButtonProps {
  icon: IconType;
  onClick?: () => void;
  darkMode?: boolean;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({
  icon: Icon,
  onClick,
  darkMode,
}) => {
  return (
    <button
      onClick={onClick}
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
    </button>
  );
};

export default DarkModeButton;
