const EditForm = ({
  editText,
  editDeadline,
  handleSave,
  setEditText,
  setEditDeadline,
}) => {
  return (
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
  );
};

export default EditForm;
