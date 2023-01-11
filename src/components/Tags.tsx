
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";


export default function Tag() {
  const [selected, setSelected] = useState();

  return (
    <div >
      
    
      <TagsInput 
        value={selected}
        name="tag"
        placeHolder="Entrer Tags"
      />
      
    </div>
  );
}


