import React, { useState } from "react";
import University from "./University";

const Universities = ({ universities, deletedCard}) => {
    return (
        <div > 
            {
                universities.map((uni)=>{
                    return(
                        <University key={uni.id} universities={uni} deletedCard={deletedCard} />
                    )
                })
            }      
        </div>
    )
}
export default Universities;