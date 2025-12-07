import KanbanColumn from "../components/KanbanColumn";
import TaskDrawer from "../components/TaskDrawer";
import Toolbar from "../components/Toolbar";
import { tasks } from "../data/mockData";

function KanbanPage() {
  const groupedTasks = {
    backlog: tasks.filter((t) => t.status === "backlog"),
    todo: tasks.filter((t) => t.status === "todo"),
    inprogress: tasks.filter((t) => t.status === "inprogress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="container mx-auto p-4 relative">
      <Toolbar />
      <div className="flex overflow-x-auto gap-4 mt-4 pb-4 xl:overflow-x-visible">
        <KanbanColumn name="Backlog" tasks={groupedTasks.backlog} />
        <KanbanColumn name="To Do" tasks={groupedTasks.todo} />
        <KanbanColumn name="In Progress" tasks={groupedTasks.inprogress} />
        <KanbanColumn name="Done" tasks={groupedTasks.done} />
      </div>
      <TaskDrawer />
    </div>
  );
}

export default KanbanPage;
