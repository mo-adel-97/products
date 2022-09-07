import React from "react";
import { ProductList } from "../ProductList";
import '../style.css'
function List(){
    let Array = ProductList.map((el)=>{
        return(
     <div key={el.id} style={{width:"400px" , display:"inline-block"}}>
          <img src={el.image} alt="" style={{height:"200px" , width:"200px"}}/>
          <h5 key={el.id}>{el.title}</h5>
          <span style={{fontSize:"13px"}}>{el.description}</span>
          <p> {el.price}$</p>
     </div>
        )
    
}
  )
    return(
        <div>
            
            <div className="List-items">
                    {Array}
            </div>
        </div>
   
    )
}
export default List;