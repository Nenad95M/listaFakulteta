import React, { useState } from "react";
import './University.css';

const University = ({ universities, deletedCard }) => {
  const [moreText, setMoreText] = useState(false);

  const { id, name, desc, img } = universities;
  const lessText=desc.substring(0,100) +'...';

  return (
    <section className="data-card">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{moreText ? desc :lessText }</p>
      <button onClick={() => { moreText ? setMoreText(false) : setMoreText(true) }}>{moreText ? "Vidi manje" : "Vidi više"}</button>
      <button onClick={()=> deletedCard(id)}>Brisi</button>   
    </section>
  )
}
export default University;