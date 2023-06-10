import { useRef } from "react";

import emailjs from "@emailjs/browser";

import Container from "../components/Container";
import Input from "../components/Input";

interface ContactProps {
  darkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        "service_mwu43fq",
        "template_976tdpx",
        formRef.current,
        "emYSGza6oL-wtUVki"
      );
    }
    e.currentTarget.reset();
  };

  return (
    <div
      className={`
        min-h-screen
        py-4
        pb-8
        ${darkMode ? "bg-neutral-900" : "bg-white"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
        ${darkMode ? "border-neutral-700" : "border-neutral-200"}
      `}
    >
      <Container>
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Contact Me
        </h2>
        <div
          className="
            flex
            flex-row
            gap-10
            mt-4
          "
        >
          <div
            className={`
              flex-1
              hidden
              md:block
              rounded-xl
              ${darkMode ? "bg-black/90" : "bg-black"}
            `}
          >
            <img
              src="/contactImg.jpg"
              alt="coding"
              className="
                rounded-xl
                h-[500px]
                w-full
                object-contain
              "
            />
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
              flex-1
            "
          >
            <Input
              id="Your Name"
              placeholder="Your Name"
              darkMode={darkMode}
              label="Your Name"
              name="name"
            />
            <Input
              id="Your Email"
              placeholder="Your Email"
              darkMode={darkMode}
              label="Your Email"
              name="email"
            />
            <Input
              id="Your Message"
              placeholder="Your Message"
              darkMode={darkMode}
              label="Your Message"
              name="message"
              isArea
            />
            <button
              className={`
                mt-8
                border-2
                rounded-xl
                sm:w-fit
                w-full
                cursor-pointer
                py-2
                px-4
                ml-auto
                block
                transition
                text-base
                ${darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"}
                ${
                  darkMode ? "hover:text-neutral-900" : "hover:text-neutral-100"
                }
              `}
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
