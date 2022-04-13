import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Uscomponent from "./components/usComponent";
import Uecomponent from "./components/ueComponent";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">{<Uecomponent />}</main>
    </React.Fragment>
  );
}

export default App;
