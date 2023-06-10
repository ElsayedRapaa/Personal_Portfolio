import MenuItem from "./MenuItem";

import { IconType } from "react-icons";

interface NavbarListProps {
  title: string;
  icon: IconType;
  onClick: () => void;
  darkMode?: boolean;
  isOpen: boolean;
}

const NavbarList: React.FC<NavbarListProps> = ({
  title,
  icon: Icon,
  onClick,
  darkMode,
  isOpen,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/75
        flex
        items-center
        justify-center
      "
    >
      <div
        className={`
          sm:w-3/5
          w-4/5
          h-fit
          rounded-xl
          ${darkMode ? "bg-neutral-900" : "bg-white"}
          ${darkMode ? "text-white" : "text-neutral-900"}
        `}
      >
        {/* Start Header */}
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            px-8
            border-b
          "
        >
          <h2
            className="
              text-lg
              font-semibold
            "
          >
            {title}
          </h2>
          <div
            onClick={onClick}
            className={`
              cursor-pointer
              transition
              p-1
              rounded-md
              ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}
            `}
          >
            <Icon size={22} />
          </div>
        </div>
        {/* End Header */}
        {/* Start MenuItem */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-2
            py-8
          "
        >
          <div
            className={`
              w-full
              transition
              text-center
              ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}
            `}
          >
            <MenuItem label="Home" href="" inList />
          </div>
          <div
            className={`
              w-full
              transition
              text-center
              ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}
            `}
          >
            <MenuItem label="About" href="about" inList />
          </div>
          <div
            className={`
              w-full
              transition
              text-center
              ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}
            `}
          >
            <MenuItem label="Portfolio" href="portfolio" inList />
          </div>
          <div
            className={`
              w-full
              transition
              text-center
              ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}
            `}
          >
            <MenuItem label="Contact" href="contact" inList />
          </div>
        </div>
        {/* End MenuItem */}
      </div>
    </div>
  );
};

export default NavbarList;
