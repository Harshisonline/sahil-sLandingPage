import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from './Content/content';
import './app.css';

function App(){
    return (
        <div style={{ backgroundColor: "#F0F0F0" }}>
            <Navbar />
            <Content />
        </div>
    );
}

export default App;
