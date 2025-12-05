const Checkbox = ({ handleToggle, completed }) => {
  return (
    <button
      onClick={handleToggle}
      className={`p-1 rounded-full border-2 cursor-pointer
                    ${
                      completed
                        ? "border-green-300 bg-green-300"
                        : "border-gray-400 hover:border-gray-400"
                    } 
                    transition-colors duration-100`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-3 w-3 ${completed ? "text-white" : "text-transparent"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>
  );
};

export default Checkbox;
