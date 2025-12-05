const DeadlineBlock = ({
  deadline,
  showDeadLineInput,
  setDeadLine,
  setShowDeadLineInput,
}) => {
  return (
    <>
      {showDeadLineInput && (
        <div className="flex items-center gap-2 text-gray-300  mt-2">
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadLine(e.target.value)}
            className="p-2 border rounded flex-1"
          />
          <button
            type="button"
            onClick={() => {
              setDeadLine("");
              setShowDeadLineInput(false);
            }}
            className="p-2 hover:text-blue-700"
          >
            Cancel
          </button>
        </div>
      )}
      {!showDeadLineInput && (
        <button
          type="button"
          onClick={() => {
            setShowDeadLineInput(true);
          }}
          className="self-start p-2 text-blue-500 hover:text-blue-400"
        >
          + Add deadline
        </button>
      )}
    </>
  );
};

export default DeadlineBlock;
