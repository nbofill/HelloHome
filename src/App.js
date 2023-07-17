import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedHomes from "./pages/SavedHomes"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/saved" Component={SavedHomes}></Route>
      </Routes>
    </div>
  )
}
export default App