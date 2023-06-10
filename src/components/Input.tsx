interface InputProps {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  darkMode?: boolean;
  isArea?: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  isArea,
  darkMode,
  name,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-2
      "
    >
      <label
        className="
          text-xl
          font-semibold
          cursor-pointer
          mt-8
        "
        htmlFor={label}
      >
        {label}
      </label>
      {isArea ? (
        <textarea
          rows={7}
          id={id}
          placeholder={placeholder}
          name={name}
          className={`
            px-4
            py-2
            outline-none
            focus:outline-none
            rounded-xl
            focus:placeholder:opacity-0
            border-2
            border-transparent
            focus:border-rose-600
            transition
            resize-none
            ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
            disabled:cursor-not-allowed
          `}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`
          px-4
          py-2
          outline-none
          focus:outline-none
          rounded-xl
          focus:placeholder:opacity-0
          border-2
          border-transparent
          focus:border-rose-600
          transition
          ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}
          disabled:cursor-not-allowed
        `}
        />
      )}
    </div>
  );
};

export default Input;
