import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

import AddEdit from './pages/AddEdit';
import { View } from './pages/View';
import { About } from './pages/About';
import DarkLight from "./components/DarkLight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DarkLight />
      <NewPage />
        <Routes>
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter></div>
  );
}

export default App;

export function NewPage() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>|{" "}
        <Link to="add">Add</Link>|{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}
