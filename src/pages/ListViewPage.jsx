import { useState } from "react";
import { Link } from "react-router-dom";
import ListRow from "../components/ListRow";
import TaskDrawer from "../components/TaskDrawer";
import Toolbar from "../components/Toolbar";
import { tasks } from "../data/mockData";

function ListViewPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <Toolbar />
      {/* Drawer open button */}
      <div className="flex justify-end items-center mt-2 xl:mt-4 gap-3">
        <div>
          <Link
            to="/"
            className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded shadow"
          >
            Kanban View
          </Link>
        </div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded shadow"
        >
          Open Drawer
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {tasks.slice(0, 4).map((task) => (
          <ListRow key={task.id} task={task} />
        ))}
      </div>
      <TaskDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

export default ListViewPage;
