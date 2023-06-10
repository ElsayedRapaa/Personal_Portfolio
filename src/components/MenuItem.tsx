import { useCallback } from "react";

import { Link } from "react-router-dom";

import useOpenList from "../hooks/openList";

interface MenuItemProps {
  label?: string;
  href?: string;
  inList?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, inList }) => {
  const openList = useOpenList();

  const handleList = useCallback(() => {
    if (inList) {
      openList.onClose();
    }
  }, [inList, openList]);

  return (
    <Link
      to={`/${href}`}
      onClick={handleList}
      className={`
          font-semibold
          cursor-pointer
          hover:opacity-80
          transition
          ${inList ? "block" : "inline"}
          ${inList ? "py-4" : "py-0"}
        `}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
