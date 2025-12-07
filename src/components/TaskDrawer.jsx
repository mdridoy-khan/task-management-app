import { assignees, priorities, statuses } from "../data/mockData";

function TaskDrawer() {
  return (
    <div className="bg-white shadow-lg p-6 flex flex-col gap-4 fixed bottom-0 left-0 w-full h-1/2 overflow-y-auto rounded-t-lg xl:fixed xl:right-0 xl:top-0 xl:bottom-auto xl:h-full xl:w-96 xl:rounded-none">
      <h2 className="text-lg font-bold">Task Title</h2>
      <select className="border rounded px-2 py-1">
        {statuses.map((status) => (
          <option key={status} className="capitalize">
            {status}
          </option>
        ))}
      </select>
      <select className="border rounded px-2 py-1">
        {priorities.map((prio) => (
          <option key={prio}>{prio}</option>
        ))}
      </select>
      <select className="border rounded px-2 py-1">
        {assignees.map((ass) => (
          <option key={ass}>{ass}</option>
        ))}
      </select>
      <input
        type="date"
        className="border rounded px-2 py-1"
        defaultValue="2025-12-10"
      />
      <textarea
        placeholder="Description..."
        className="border rounded p-2 h-24"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Comments</h3>
        <p className="text-sm text-gray-600">Comment 1</p>
        <p className="text-sm text-gray-600">Comment 2</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Activity Log</h3>
        <p className="text-sm text-gray-600">Created on 2025-12-01</p>
        <p className="text-sm text-gray-600">Status changed to In Progress</p>
      </div>
    </div>
  );
}

export default TaskDrawer;
