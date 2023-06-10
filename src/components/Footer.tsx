import SocialItem from "./SocialItem";

import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import Container from "./Container";

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <div
      className={`
        border-t
        pt-2
        pb-6
        text-center
        ${darkMode ? "bg-neutral-900" : "bg-white"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
        ${darkMode ? "border-neutral-700" : "border-neutral-200"}
      `}
    >
      <Container>
        <div
          className="
          flex
          items-center
          justify-center
          gap-4
          py-4
        "
        >
          <SocialItem
            darkMode={darkMode}
            href="https://api.whatsapp.com/send?phone=+201271356094"
            icon={BsWhatsapp}
          />
          <SocialItem
            darkMode={darkMode}
            href="https://t.me/ElsayedRapaa"
            icon={FaTelegramPlane}
          />
          <SocialItem
            darkMode={darkMode}
            href="mailto:erapaa10@gmail.com"
            icon={AiOutlineGoogle}
          />
        </div>
        <div
          className="
            border-2
            w-64
            my-4
            mx-auto
            rounded-xl
          "
        ></div>
        <div>
          Create By{" "}
          <span className="text-rose-600 font-semibold">Elsayed Rapaa ❤</span>{" "}
          Developer
        </div>
      </Container>
    </div>
  );
};

export default Footer;
