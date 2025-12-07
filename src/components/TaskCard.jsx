function TaskCard({ task }) {
  const priorityColor =
    {
      high: "bg-red-200 text-red-800",
      medium: "bg-yellow-200 text-yellow-800",
      low: "bg-green-200 text-green-800",
    }[task.priority] || "bg-gray-200 text-gray-800";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 hover:shadow-lg active:shadow-xl transition-shadow cursor-grab">
      <p className="font-medium">{task.title}</p>
      <span className={`text-xs px-2 py-1 rounded ${priorityColor}`}>
        {task.priority}
      </span>
      <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
      <div className="flex justify-between items-center">
        <img
          src={`https://ui-avatars.com/api/?name=${task.assignee}&size=32`}
          alt="Assignee"
          className="rounded-full"
        />
        <div className="flex gap-2 text-gray-500 text-sm">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 21l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {task.comments}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            {task.attachments}
          </span>
        </div>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default TaskCard;
