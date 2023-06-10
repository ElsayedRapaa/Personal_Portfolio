import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressProps {
  title: string;
  count: number;
  darkMode?: boolean;
}

const Progress: React.FC<ProgressProps> = ({ title, count, darkMode }) => {
  return (
    <div
      className="
        col-span-1
      "
    >
      <h4
        className="
          text-sm
          font-semibold
        "
      >
        {title}
      </h4>
      <ProgressBar
        completed={count}
        maxCompleted={100}
        bgColor="#E11D48"
        borderRadius="5px"
        labelColor="white"
        baseBgColor={`
          ${darkMode ? "#FFF" : "#171717"}
        `}
      />
    </div>
  );
};

export default Progress;
