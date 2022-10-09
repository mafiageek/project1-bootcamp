import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Search from "./Search";
import AddNew from "./AddNew";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Search />
      <AddNew />
    </div>
  );
}
