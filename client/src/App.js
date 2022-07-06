import React from "react";
import Home from "./components/Home/HomeContainer/HomeContainer";

import { BrowserRouter, Route } from "react-router-dom";
import USerPanel from "./components/UserPanel/UserPanel";
import EditPanel from "./components/EditPanel/EditPanel";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/userpanel" component={USerPanel} />
      <Route path="/editpanel" component={EditPanel} />
    </BrowserRouter>
  );
}

export default App;
