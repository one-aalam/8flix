import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useTrending } from "./hooks/useMovieApi";

function App() {
  const { loading, response } = useTrending();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>loaded {JSON.stringify(response)}</div>
        )}
      </header>
    </div>
  );
}

export default App;
