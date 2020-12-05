import React from "react";
import ReactGA from 'react-ga';
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
ReactGA.initialize("UA-130800032-1");
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
