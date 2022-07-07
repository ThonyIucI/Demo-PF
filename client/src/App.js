import React, { useState } from "react";
import Home from "./components/Home/HomeContainer/HomeContainer";

import { Route, Routes } from "react-router-dom";
import UserPanel from "./components/UserPanel/UserPanel";
import EditPanel from "./components/EditPanel/EditPanel";
import NotFound from "./components/NotFound/NotFound";
import Demo from "./components/Demo";
function App() {
  let [color, setColor] = useState("dark");
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/demo"
        element={<Demo color={color} setColor={setColor} />}
      />
      <Route path="/user" element={<UserPanel />} />
      <Route path="/edit" element={<EditPanel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
