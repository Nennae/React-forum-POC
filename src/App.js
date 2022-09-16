import './styles/App.css';
import { Routes, Route } from "react-router-dom";

//Pages
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/postpage/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
