import { Route, Routes } from "react-router-dom";
import KanbanPage from "./pages/KanbanPage";
import ListViewPage from "./pages/ListViewPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<KanbanPage />} />
        <Route path="/list" element={<ListViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
