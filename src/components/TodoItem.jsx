import { useCallback, useState } from "react";
import Checkbox from "./Checkbox";
import EditForm from "./EditForm";
import TextDisplay from "./TextDisplay";
import DeleteButton from "./DeleteButton";

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
        <Checkbox handleToggle={handleToggle} completed={todo.completed} />
        {isEditing ? (
          <EditForm
            editText={editText}
            editDeadline={editDeadline}
            handleSave={handleSave}
            setEditText={setEditText}
            setEditDeadline={setEditDeadline}
          />
        ) : (
          <TextDisplay todo={todo} setIsEditing={setIsEditing} />
        )}
      </div>
      <DeleteButton onClick={() => onDelete(todo.id)}/>
    </div>
  );
};
