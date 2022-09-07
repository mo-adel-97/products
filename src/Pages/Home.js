import React from "react";
import "../images/background.jpg"
import "../Home.css"
import { useEffect } from "react";
import Text from "../components/Texthome";
function Home(){
    useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This will run after 1 second!')
  }, 1000);
  return () => clearTimeout(timer);
}, []);
    return(
        <>
        <div className="homePage" style={{fontFamily:"italic"}}> <Text />
         </div>
            <h2 style={{opacity:"0.7"}}>About Us </h2>
        </>
    )
}

export default Home;