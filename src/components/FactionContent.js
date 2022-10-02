import React from "react";
import 'react-bootstrap';
import CharHolder from "./CharHolder";
// import CharForm from "./NewCharForm";

export default function FactCont({char}, onSubmit) {
    return(
        <>
            {/* <CharForm onSubmit={onSubmit}/> */}
            <CharHolder char={char}/>
        </>
    )
}