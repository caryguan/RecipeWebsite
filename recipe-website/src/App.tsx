import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Recipe1 from "./pages/Recipe1";
import Recipe2 from "./pages/Recipe2";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='*' element={<NoPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe2" element={<Recipe2 />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));