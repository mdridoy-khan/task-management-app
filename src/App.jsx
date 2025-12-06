import { Link, Route, Routes } from "react-router-dom";
import KanbanPage from "./pages/KanbanPage";
import ListViewPage from "./pages/ListViewPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-center gap-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Kanban View
          </Link>
          <Link to="/list" className="text-blue-500 hover:underline">
            List View
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<KanbanPage />} />
        <Route path="/list" element={<ListViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
