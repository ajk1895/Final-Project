//display page for Faction 1
// new form on top and list below
// faction 1 and 2 will be the bascially the same page but display different data(hopefully)

import React, { useState } from "react";
import 'react-bootstrap';
import FactCont from "./FactionContent";
import CharForm from "./NewCharForm";


export default function FactOne(){
    //this might not work as intended but maybe? 
    //was having issues with state in app.js so i decided to make each faction use its own, may cause issues when swapping between them, will need to test
    const [chars, setChars] = useState(['test'])
    
    const newCharFromForm = (newChar) =>{
        setChars([...chars, newChar])
    };
    
    return(
        <>
            <h1>Faction One</h1>
            <FactCont char={chars} />
            <CharForm char={chars} onSubmit={newCharFromForm} />
            
        </>
    )
}
