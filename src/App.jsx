import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Play from "./components/Play";
import Topics from "./components/Topics";
import Type from "./components/Type";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-purple-400 overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/letsplay/:category" element={<Play />} />
          <Route path="/letsplay" element={<Play />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/create" element={<Type />} />
          <Route
            path="/letsplay/:amount/:category/:difficulty/:type"
            element={<Play />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
