import React ,{useState} from "react";

const University=({universities})=>{
const {id, name, desc, img}=universities;
    return(
<section className="data-card">
  <h2>{name}</h2>
  <p>{desc}</p>
  <img src={img} alt={name} />
  <em>{id}</em>
</section>
        )
}
export default University;