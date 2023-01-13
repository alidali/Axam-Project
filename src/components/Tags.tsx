
import React, { useState } from "react";
import styled from 'styled-components'
import { TagsInput } from "react-tag-input-component";

const styledTags = styled(TagsInput)`
  height: 53.13px;
`
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


