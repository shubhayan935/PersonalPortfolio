import React from 'react';
import Loading from './components/Loading';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SurpriseSection from './components/SurpriseSection';
import WorkExperience from './components/WorkExperience';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Analytics/>
      <Loading />
      <Profile />
      <div id="display">
        <Navbar />
        <AboutMe />
        <Projects />
        {/* <WorkExperience /> */}
        <Resume />
        <SurpriseSection />
      </div>
      <footer className="App-footer">
        made with ❤️ by Shubhayan Srivastava
      </footer>
    </div>
  );
}

export default App;
