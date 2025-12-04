import { useCallback, useState } from "react";

export const TodoItem = ({ todo, onDelete, onToggleComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDeadline, setEditDeadline] = useState(todo.deadline || "");

  const handleToggle = () => {
    onToggleComplete(todo.id);
  };

  const handleSave = useCallback(() => {
    if (editText.trim()) {
      onUpdate(todo.id, editText, editDeadline);
    }
    setIsEditing(false);
  }, [editText, editDeadline, todo.id, onUpdate]);

  return (
    <div
      className="group flex items-center justify-between p-4 gap-3 bg-white dark:bg-page-dark
        rounded-lg shadow-sm hover:shadow-md border border-gray-200"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className={`p-1 rounded-full border-2 cursor-pointer
                    ${
                      todo.completed
                        ? "border-green-300 bg-green-300"
                        : "border-gray-400 hover:border-gray-400"
                    } 
                    transition-colors duration-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 ${
              todo.completed ? "text-white" : "text-transparent"
            }`}
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
        {isEditing ? (
          <div className="flex flex-col w-full gap-1 items-stretch">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              className="w-full px-2 py-1 border-2 border-blue-300 rounded text-sm text-gray700 dark:text-gray-300"
            />

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="datetime-local"
                value={editDeadline}
                onChange={(e) => setEditDeadline(e.target.value)}
                className="w-full sm:flex-1 px-2 py-1 border-2 border-blue-300 rounded text-sm text-gray700 dark:text-gray-300"
              />
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-1 text-green-500 hover:text-green-600 cursor-pointer border rounded hover:bg-green-50 transition-colors text-sm"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 
            text-gray-400 hover:text-red-500 dark:text-white cursor-pointer
            transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};
