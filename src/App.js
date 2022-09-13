import './styles/App.css';
import { Routes, Route } from "react-router-dom";

// // Components
// import PostList from "./components/PostList";
// import Post from "./components/Post";
//Pages
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postpage/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
