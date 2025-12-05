const TextDisplay = ({ todo, setIsEditing }) => {
  return (
    <div
      className="flex flex-col gap-1 cursor-pointer"
      onDoubleClick={() => setIsEditing(true)}
    >
      <span
        className={`text-1 ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-700 dark:text-gray-300"
        }  `}
      >
        {todo.text}
      </span>
      {todo.deadline && (
        <span
          className={`text-xs ${
            todo.completed
              ? "text-green-300"
              : new Date(todo.deadline) < new Date()
              ? "text-red-500"
              : "text-blue-300"
          }`}
        >
          {new Date(todo.deadline).toLocaleString("en-US")}
        </span>
      )}
    </div>
  );
};

export default TextDisplay;
