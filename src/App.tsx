import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { HomeScreen } from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HomeScreen />
    </div>
  );
}

export default App;
