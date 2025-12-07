function ListRow({ task }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-4 xl:justify-between">
      <p className="font-medium flex-1">{task.title}</p>
      <span className="text-sm capitalize flex-1">{task.status}</span>
      <span className="text-sm flex-1">{task.assignee}</span>
      <span className="text-sm capitalize flex-1">{task.priority}</span>
      <span className="text-sm flex-1">{task.dueDate}</span>
      <span className="text-sm flex-1">{task.comments}</span>
      <button className="text-gray-500 hover:text-gray-700 flex-1 text-right xl:text-left">
        ...
      </button>
    </div>
  );
}

export default ListRow;
