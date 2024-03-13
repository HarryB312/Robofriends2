import React from "react";
import {robots} from "./robots"
import Card from "./Card";

const Cardlist = () =>{
  return (
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    </div>
  )
}

export default Cardlist;



