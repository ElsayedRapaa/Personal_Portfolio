import Container from "../components/Container";
import Progress from "../components/Progress";

interface AboutProps {
  darkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <div
      className={`
        min-h-[80vh]
        lg:py-24
        md:py-8
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
          About Me
        </h2>
        <div
          className="
            flex
            lg:flex-row
            flex-col
            items-center
            gap-10
            pt-4
          "
        >
          <div
            className="
              flex-1
              flex
              flex-col
              gap-4
            "
          >
            <h2
              className="
                font-semibold
                text-xl
                sm:text-2xl
                text-rose-600
              "
            >
              DESIGNER & DEVELOPER
            </h2>
            <p
              className="
                text-sm
                sm:text-base
              "
            >
              I Highly Value Quality Over Quantity And I Put Big Effort To
              Create A Truly Qualified Product. I Love Pixel-Perfectness,
              Responsiveness And Enjoy Writing Tests. This Had Been An Important
              Factor Which Made My Previous Projects Successful.
              <br />
              <br />
              Honesty Is An Admirable Human Characteristic And I Always Have
              Been Honest With Clients And Team Members(And In My Personal Life
              Too). I Am Not Pretending To Understand Everything. If I Am Not
              Familiar With Something, I Say 'I Am Not Familiar With It, I Need
              Help' Or 'I Need Some Time To Investigate And Learn'. If I Made A
              Mistake, I Say 'I Am Sorry, I Made A Mistake'.
              <br />
              <br />
              In terms of availability, I am proactive and willing to work 6
              days a week for more than 12 hours a day for communication and
              work. Additionally, I am flexible with time zones and can work in
              any time zone required for the job.
            </p>
          </div>
          <div
            className="
              flex-1
              w-full
              grid
              sm:grid-cols-2
              grid-cols-1
              gap-4
              uppercase
            "
          >
            <Progress title="html & css" count={100} darkMode={darkMode} />
            <Progress title="javascript" count={95} darkMode={darkMode} />
            <Progress title="typescript" count={90} darkMode={darkMode} />
            <Progress title="react.js" count={95} darkMode={darkMode} />
            <Progress title="next.js 13" count={90} darkMode={darkMode} />
            <Progress
              title="tailwind css & material ui"
              count={90}
              darkMode={darkMode}
            />
            <Progress
              title="bootstrap & react bootstrap"
              count={90}
              darkMode={darkMode}
            />
            <Progress title="storybook" count={90} darkMode={darkMode} />
            <Progress
              title="google firebase & mongodb"
              count={80}
              darkMode={darkMode}
            />
            <Progress
              title="redux & redux toolkit"
              count={90}
              darkMode={darkMode}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
