import Container from "../components/Container";
import PortfolioCard from "../components/PortfolioCard";

import { dataPortfolio } from "../data/dataPortfolio";

interface PortfolioProps {
  darkMode?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
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
          Portfolio
        </h2>
        <div
          className="
            grid
            md:grid-cols-3
            sm:grid-cols-2
            grid-cols-1
            gap-4
            pt-4
          "
        >
          {dataPortfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              darkMode={darkMode}
              title={item.title}
              imgUrl={item.imgUrl}
              url={item.url}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
