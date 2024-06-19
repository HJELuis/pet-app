import React from "react";
import Content from "./components/Content";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {  

  
  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/content" element={<Content />}/>
        </Routes>                          
    </div>
  );
}

export default App;
