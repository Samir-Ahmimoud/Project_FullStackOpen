import React from "react";
const Filter = ({filterName, onChangeFilter}) =>{
    return(
      <div>
          <p>filter shown with <input value={filterName} onChange={onChangeFilter}/> </p>
      </div>
    )
  }

export default Filter;