import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import OpenSourceProjects from "./open-source-projects/OpenSourceProjects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
// import Achievement from "./achievement/Achievement";
// import Contact from "./contact/Contact";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Twitter from "./twitter-embed/twitter";
// import { educationInfo } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <StartupProject />
          <OpenSourceProjects />
          {/* <Achievement /> */}
          <Blogs />
          {/* <Talks /> */}
          {/* <Twitter /> */}
          {/* <Podcast /> */}
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
