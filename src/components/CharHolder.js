//component to hold character cards           


import React from "react";
import InfoCard from "./InfoCard";

export default function CharHolder({char}) {
    return (
        <>       
       <ul>
            {char.map(char => {
                return (
                <li key={char}> 
                    <InfoCard  char={char}/> 
                </li>
                )
            })}
        </ul>
        </>
    )
}
// why does char.map work fine here but not in InfoCard?

