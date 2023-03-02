import React from 'react';
import Home from './components/home/Home'
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     </main>
    </div>
  );
}

export default App;
