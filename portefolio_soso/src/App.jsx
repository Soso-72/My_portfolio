import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './composant/header';
import { Skills } from './composant/skills';
import { Footer } from './composant/Footer';
import { Home } from './composant/home';
import {Project} from './composant/project';
import { AboutMe } from './composant/AboutMe';



function App() {
  return (
    <>
    
     <Router>
        <Header/>
        <Home/>
          <AboutMe/>
          <Skills/>
          <Project/>
        <Footer/>
     </Router>
     
    </>
  )
}

export default App

