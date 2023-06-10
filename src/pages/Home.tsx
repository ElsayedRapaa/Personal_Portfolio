import Container from "../components/Container";

import Typewriter from "typewriter-effect";

import CV from "../../public/CV.pdf";

interface HomeProps {
  darkMode?: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      className={`
        min-h-screen
        ${darkMode ? "bg-neutral-900" : "bg-white"}
        ${darkMode ? "text-neutral-100" : "text-neutral-900"}
        ${darkMode ? "border-neutral-700" : "border-neutral-200"}
      `}
    >
      <Container>
        <div
          className="
            flex
            md:flex-row
            flex-col
            items-center
            justify-center
            gap-10
            py-10
          "
        >
          <img
            src="/avatar.png"
            alt="avatar"
            className="
              md:flex-1
              lg:h-[60vh]
              md:h-[45vh]
              h-[30vh]
              object-cover
            "
          />
          <div
            className="
              flex-1
              md:text-start
              text-center
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                font-bold
                sm:text-xl
              "
            >
              <h2
                className="
                  font-bold
                  sm:text-3xl
                  text-xl
                  text-rose-600
                "
              >
                Elsayed Rapaa
              </h2>
              <h2
                className="
                  mb-4
                  font-bold
                  sm:text-3xl
                  text-xl
                "
              >
                React.js Front-End Developer & JavaScript & TypeScript Expert
              </h2>
              <Typewriter
                options={{
                  strings: [
                    "HTML & CSS & Sass",
                    "JavaScript & TypeScript",
                    "React.js & Next.js 13",
                    "Git & GitHub",
                    "Tailwind CSS & Material UI",
                    "Bootstrap & React Bootstrap",
                    "StoryBook",
                    "Google Firebase & MongoDB",
                    "Redux & Redux Toolkit & Zustand",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div
                className="
                  pt-4
                  flex
                  flex-col
                  md:items-start
                  items-center
                  justify-center
                "
              >
                <p
                  className="
                    font-light
                  "
                >
                  Welcome To My Portfolio You Can Upload My CV
                </p>
                <a
                  href={CV}
                  download
                  className={`
                    block
                    mt-4
                    border-2
                    rounded-xl
                    w-fit
                    cursor-pointer
                    py-2
                    px-4
                    transition
                    text-base
                    ${
                      darkMode ? "hover:bg-neutral-100" : "hover:bg-neutral-900"
                    }
                    ${
                      darkMode
                        ? "hover:text-neutral-900"
                        : "hover:text-neutral-100"
                    }
                    ${darkMode ? "border-neutral-100" : "border-neutral-900"}
                  `}
                >
                  DOWNLOAD
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
