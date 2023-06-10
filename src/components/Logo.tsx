import { IconType } from "react-icons";

import { Link } from "react-router-dom";

interface LogoProps {
  logo: IconType;
  darkMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ logo: Icon, darkMode }) => {
  return (
    <>
      <Link
        to="/"
        className={`
            rounded-full
            p-4
            transition
            ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
            ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
            ${darkMode ? "text-neutral-300" : "text-neutral-900"}
            ${darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"}
          `}
      >
        <Icon size={28} />
      </Link>
    </>
  );
};

export default Logo;
