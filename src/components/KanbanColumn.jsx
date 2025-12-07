import TaskCard from "./TaskCard";

function KanbanColumn({ name, tasks }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 min-w-[300px] flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">
          {name} ({tasks.length})
        </h2>
        <button className="text-gray-500 hover:text-gray-700">+</button>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
