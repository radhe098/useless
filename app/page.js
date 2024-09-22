"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 }); 
  const [keyPressed, setKeyPressed] = useState("");  
  const [textSize, setTextSize] = useState(20);  
  const [timeoutId, setTimeoutId] = useState(null); 
  const [showclick, setShowclick] = useState(false);
  const [showText, setShowText] = useState(false);

  const clicked = () => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setShowclick(true);  
    setTimeout(() => {
      setShowclick(false);
    }, 500);
  };

  const rightclicked = (event) => {
    event.preventDefault();
    console.log("You just right-clicked");
    setClickPosition({ x: event.clientX, y: event.clientY });
    setShowText(true); 
    setTimeout(() => {
      setShowText(false);
    }, 500);
  };


  const youscrolled = (event) => {
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setPosition({ x: scrollX + window.innerWidth / 2, y: scrollY + window.innerHeight / 2 }); // Show at center of viewport
    setShowText(true); // Show the text on scroll

    // Hide the text after 0.5 seconds
    setTimeout(() => {
      setShowText(false);
    }, 500); console.log("Right now you just scrolled");
  }

  useEffect(() => {
    window.addEventListener('scroll', youscrolled);

    return () => {
      window.removeEventListener('scroll', youscrolled);
    };
  }, []);

  const handleKeyDown = (event) => {  
    if ((event.ctrlKey || event.metaKey) && (event.key === "+" || event.key === "-")) {
      return;
    }
    setKeyPressed(event.key);  

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setTextSize((prevSize) => Math.min(prevSize + 10, 100));

    const id = setTimeout(() => {
      setKeyPressed(""); 
      setTextSize(20);  
    }, 500);

    setTimeoutId(id);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getColor = () => {
    const minSize = 20; 
    const maxSize = 100; 
    const percentage = (textSize - minSize) / (maxSize - minSize);
    const red = Math.round(255 - percentage * (255 - 139));  
    const green = Math.round(255 - percentage * (255 - 0));  
    const blue = Math.round(255 - percentage * (255 - 0));  
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div
      onClick={clicked}
      onContextMenu={rightclicked}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <p></p>
      <h1
        className="font-bold"
        style={{
          fontSize: `${textSize}px`,  
          color: getColor(),  
        }}
      >
        {keyPressed ? ` I'm smart huhh😡 ~ ${keyPressed}` : ""}
      </h1>
      {/* <div className="text-lg" style={{ color: "white" }}>
        {`Mouse clicked at: X = ${clickPosition.x}, Y = ${clickPosition.y}`}
      </div> */}

{showText && (
        <div
          className="absolute font-bold text-lg"
          style={{
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
            transform: "translate(-50%, -50%)", // Center the text around the click
            color: "white", // Set the text color to dark red
          }}
        >
          I'm smart huhh😎😎
        </div>
      )}
{showclick && (
        <div
          className="absolute font-bold text-lg"
          style={{
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
            transform: "translate(-50%, -50%)", // Center the text around the click
            color: "white", // Set the text color to dark red
          }}
        >
          I'm smart huhh😎😎
          I'm smart huhh ! 
        </div>
      )}
    </div>
  );
}