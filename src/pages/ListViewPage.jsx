import ListRow from "../components/ListRow";
import Toolbar from "../components/Toolbar";
import { tasks } from "../data/mockData";

function ListViewPage() {
  return (
    <div className="container mx-auto p-4">
      <Toolbar />
      <div className="mt-4 flex flex-col gap-4">
        {tasks.slice(0, 4).map(
          (
            task // Match wireframe with 4 rows
          ) => (
            <ListRow key={task.id} task={task} />
          )
        )}
      </div>
    </div>
  );
}

export default ListViewPage;
