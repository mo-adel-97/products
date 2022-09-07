import React from "react";
import "../TextHome.css"
function Text(){
    const styles={
        h1:{
             color:"black",
            paddingTop:"300px",
        }
    }
    return(
            <div className="Text" style={{width:"1200px"}}>
           <h1 style={styles.h1}>

             <span style={{paddingLeft:"20px"}}> WELCOME DEAR ! </span> <br/>
               <span style={{paddingLeft:"120px" , fontSize:"30px"}}>WITH MY PRODUCTS APP </span>
  </h1> 
        </div>
    )
}
export default Text;