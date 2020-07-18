import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { HomeScreen } from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* {loading ? (
          <div>loading...</div>
        ) : (
          <div>loaded {JSON.stringify(response)}</div>
        )} */}
      {/* </header> */}
      <HomeScreen />
    </div>
  );
}

export default App;
