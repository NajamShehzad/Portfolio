import React, { FC } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Main from "./containers/Main";

ReactGA.initialize("UA-130800032-1");

const App: FC = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
