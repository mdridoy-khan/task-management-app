import { projects } from "../data/mockData";

function Toolbar() {
  return (
    <div className="bg-white p-4 shadow-md flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-xl font-bold">Task Board</h1>
      <div className="flex flex-wrap items-center gap-4">
        <select className="border rounded px-2 py-1 text-sm">
          {projects.map((proj) => (
            <option key={proj} value={proj}>
              {proj}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1 text-sm flex-1 max-w-xs"
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded">
          Filter
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
          New Task
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
