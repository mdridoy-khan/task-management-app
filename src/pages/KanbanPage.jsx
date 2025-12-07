import { useState } from "react";
import { Link } from "react-router-dom";
import KanbanColumn from "../components/KanbanColumn";
import TaskDrawer from "../components/TaskDrawer";
import Toolbar from "../components/Toolbar";
import { tasks } from "../data/mockData";

function KanbanPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const groupedTasks = {
    backlog: tasks.filter((t) => t.status === "backlog"),
    review: tasks.filter((t) => t.status === "review"),
    inprogress: tasks.filter((t) => t.status === "inprogress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="container mx-auto p-4 relative">
      <Toolbar />
      {/* Drawer open button */}
      <div className="flex justify-end items-center mt-2 xl:mt-4 gap-3">
        <div>
          <Link
            to="/list"
            className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded shadow"
          >
            List View
          </Link>
        </div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded shadow"
        >
          Open Drawer
        </button>
      </div>

      <div className="flex overflow-x-auto gap-4 mt-4 pb-4 xl:overflow-x-visible">
        <KanbanColumn name="Backlog" tasks={groupedTasks.backlog} />
        <KanbanColumn name="In Progress" tasks={groupedTasks.inprogress} />
        <KanbanColumn name="Review" tasks={groupedTasks.review} />
        <KanbanColumn name="Done" tasks={groupedTasks.done} />
      </div>

      <TaskDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

export default KanbanPage;
