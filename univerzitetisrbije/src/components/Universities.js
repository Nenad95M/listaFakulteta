import React, { useState } from "react";
import University from "./University";

const Universities = ({ universities }) => {
    return (
        <div >
               
            {
                universities.map((uni)=>{
                    return(
                        <University key={uni.id} universities={uni}/>
                    )
                })
            }      

        </div>
    )
}
export default Universities;