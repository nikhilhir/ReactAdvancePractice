import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [serchParams,setSearchParams]=useSearchParams()
  //useserchparam for update link 
  const [category,setCategory]=useState(
    serchParams.getAll("category") || []
  );
  //insted of only set the empty array in  usesatate check already have category in url serchparam.getall("category") 
  console.log("select category",category)

  //FUNCTION SERCH CATERORY USESATE GET ALL CATEGORY OR EMPTY ARRAY
  //OPTION CHECK THE CATEGORY IF THE CATEGORY INCLUDE ALREADY (OPTION)
const handleChange=(e)=>{
 const option = e.target.value;
 let newcategoryOptions = [...category];
 if(category.includes(option)){
  newcategoryOptions.splice(newcategoryOptions.indexOf(option),1);
//WE HAVE THESE CATEGORY ALREADY IN MY ARRAY THEN REMOVE IT BY USING SLICE
 }else{
  newcategoryOptions.push(option)
  //ELSE ADD THESE CATEGORY IN OPTION IN MY NEWARRAY [...CATEGORY]
 }
 setCategory(newcategoryOptions);
};

useEffect(()=>{
  if(category){
    setSearchParams({category});
  }
},[category, setSearchParams])
//?category=analog

  return (
    <div style={{
      border:"2px solid black",
      borderRadius:"5px",
      marginLeft:"1rem",
      width:"290px"
    }}>
      <h3 style={{textAlign:"center"}}
      >Filters</h3>
      <div style={{padding:"0 0 5px 5px",fontSize:"18px"}}>Category</div>
      <div style={{paddingLeft:"15px"}} data-testid="filter-category">
        <div>
          {/* ******************ANALOG* CATEGORY*************** */}
          {/* WE HAVE ONCHANGE HANDLER IN INPUT BOX */}
          <input type="checkbox" value="Analog"
          onChange={handleChange}
          checked={category.includes("Analog")}
          />
          <label>Analog</label>
        </div>
        <div>
          {/* ********************DIGITAL**CATEGORY*************** */}
          <input type="checkbox" value="Digital"
          onChange={handleChange}
          checked={category.includes("Digital")}
          />
          <label>Digital</label>
        </div>
        <div>
          {/* ********************CHRONOGRAPH**CATEGORY************ */}
          <input type="checkbox" value="Chronograph" 
          onChange={handleChange}
          checked={category.includes("Chronograph")}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
