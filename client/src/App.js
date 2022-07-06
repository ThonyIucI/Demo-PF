import React from "react";
import Home from "./components/Home/HomeContainer/HomeContainer";

import { Route, Routes } from "react-router-dom";
import USerPanel from "./components/UserPanel/UserPanel";
import EditPanel from "./components/EditPanel/EditPanel";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/user" element={<USerPanel />} />
      <Route path="/edit" element={<EditPanel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
