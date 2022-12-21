import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";


export default function Tag() {
  const [selected, setSelected] = useState();

  return (
    <div style={{marginLeft:"20px",width:"490px",marginTop:"1.3%",height:"50px"}}>
      
      <TagsInput 
        value={selected}
     
        name="tag"
     
        placeHolder="Entrer Tags"
      />
      
    </div>
  );
}
