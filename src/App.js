import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import Login from "./components/Login";
import "./styles/styles.css"



function App() {  

  
  return (
    
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/content" element={<Content />}/>
        </Routes>                          
    </div>
  );
}

export default App;
