import { useCallback } from "react";

import Container from "./Container";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import SocialItem from "./SocialItem";
import NavbarList from "./NavbarList";
import DarkModeButton from "./DarkModeButton";

import { FaCode, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

import useOpenList from "../hooks/openList";
import useDarkMode from "../hooks/darkMode";

interface NavbarProps {
  darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode }) => {
  const openList = useOpenList();
  const dark = useDarkMode();

  const handleCloseList = useCallback(() => {
    openList.onClose();
  }, [openList]);

  const handleOpenList = useCallback(() => {
    openList.onOpen();
  }, [openList]);

  const handleOpenDarkMode = useCallback(() => {
    dark.onOpen();
  }, [dark]);

  const handleCloseDarkMode = useCallback(() => {
    dark.onClose();
  }, [dark]);

  return (
    <div
      className={`
        sticky
        top-0
        left-0
        w-full
        z-10
        border-b
        py-2
        ${darkMode ? "bg-neutral-900" : "bg-white"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
        ${darkMode ? "border-neutral-700" : "border-neutral-200"}
        ${darkMode ? "shadow-none" : "shadow-sm"}
      `}
    >
      <NavbarList
        title="Navbar List"
        icon={AiOutlineClose}
        darkMode={darkMode}
        onClick={handleCloseList}
        isOpen={openList.isOpen}
      />
      <Container>
        <div
          className="
            grid
            md:grid-cols-5
            grid-cols-3
          "
        >
          <div
            onClick={handleOpenList}
            className={`
            sm:hidden
            flex
            items-center
          `}
          >
            <div
              className={`
                rounded-full
                w-fit
                p-2
                transition
                cursor-pointer
                ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
                ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
                ${darkMode ? "text-neutral-300" : "text-neutral-900"}
                ${
                  darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"
                }
              `}
            >
              <TbMenu2 size={22} />
            </div>
          </div>
          <div
            className="
              md:flex
              flex-row
              items-center
              gap-4
              sm:col-span-2
              hidden
            "
          >
            <MenuItem label="Home" href="" inList />
            <MenuItem label="About" href="about" inList />
            <MenuItem label="Portfolio" href="portfolio" inList />
            <MenuItem label="Contact" href="contact" inList />
          </div>
          <div
            className="
              sm:col-span-1
              sm:flex
              items-center
              md:justify-end
              lg:justify-center
              hidden
              gap-5
            "
          >
            <Logo logo={FaCode} darkMode={darkMode} />
            <div
              onClick={handleOpenList}
              className={`
                md:hidden
                rounded-full
                w-fit
                p-2
                transition
                cursor-pointer
                ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
                ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
                ${darkMode ? "text-neutral-300" : "text-neutral-900"}
                ${
                  darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"
                }
              `}
            >
              <TbMenu2 size={22} />
            </div>
          </div>
          <div
            className="
              flex
              flex-row
              items-center
              gap-4
              col-span-2
              ml-auto
            "
          >
            <SocialItem
              icon={BsTwitter}
              href="https://twitter.com/ElsayedRapaa"
              darkMode={darkMode}
            />
            <SocialItem
              icon={FaGithub}
              href="https://github.com/ElsayedRapaa"
              darkMode={darkMode}
            />
            <SocialItem
              icon={FaLinkedinIn}
              href="https://www.linkedin.com/in/elsayed-rapaa-0758a71a6/"
              darkMode={darkMode}
            />
            <SocialItem
              icon={FaFacebookF}
              href="https://www.facebook.com/elsayed.rapy.7/"
              darkMode={darkMode}
            />
            {darkMode ? (
              <DarkModeButton
                icon={MdLightMode}
                darkMode={darkMode}
                onClick={handleCloseDarkMode}
              />
            ) : (
              <DarkModeButton
                icon={MdDarkMode}
                darkMode={darkMode}
                onClick={handleOpenDarkMode}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
