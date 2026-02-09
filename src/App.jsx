

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";        /*  useState → stores light/dark mode       &       useEffect → runs code when state changes */

function App() 
{

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.className = darkMode ? "dark" : "";
}, [darkMode]);



  return (

<>
 {/*
    <div style=
    {{
      maxWidth: "900px",
      margin: "60px auto",
      padding: "40px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
    }}>
*/}


<button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "var(--accent)",
    color: "var(--button-text)",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 1000,
    animation: "rotateIcon 0.4s ease",
    transition: "background-color 0.3s ease, color 0.3s ease"
  }}
>

  <span className="theme-icon">
    {darkMode ? "☀" : "🌙"}
  </span>
  
</button>






    <div style=
    {{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "40px",
        backgroundColor: "var(--card)",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s ease"
    }}>



      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

</>

  );
}




export default App;



