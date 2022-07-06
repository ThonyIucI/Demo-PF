import React from "react";
import Home from "./components/Home/HomeContainer/HomeContainer";

import { Route, Routes } from "react-router-dom";
import USerPanel from "./components/UserPanel/UserPanel";
import EditPanel from "./components/EditPanel/EditPanel";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/user" element={<USerPanel />} />
      <Route path="/edit" element={<EditPanel />} />
    </Routes>
  );
}

export default App;
