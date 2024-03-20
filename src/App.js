import React from "react";
import'./index.css';
import ResizableComponent from "./ResizableComponent";

const screenWidth = window.innerWidth - 18;
const boxWidth = screenWidth / 2;

const App = () => (
  <div className='App'>
   <div className="top-window">
   <ResizableComponent content="First Box" initialWidth={boxWidth} />
   <ResizableComponent content="Second Box" initialWidth={boxWidth}/>
   </div>
   <ResizableComponent content="Third Box" initialWidth={screenWidth}/>
  </div>
);

export default App;