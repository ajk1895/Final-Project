//card that will hold info user has given about a character

import React from "react";
import 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import  CharName  from "./CharacterName";
//more info about the char can be added in the future, this was the original intent of this component, not to just be extra space

//got Error: Objects are not valid as a React child (found: object with keys {name}).

export default function InfoCard ({char}){
    //this made the error go away, but now {char} isn't being passed in? it got passed in on CharHolder...
    
    // const charInfo = []
    char=[]

    return(
        <> 
        
        {/* 
            if char not set to array-> error: char.map is not a function
            if char set to array-> {char} not passed down, resulting in new infocard with no data displayed 
            was working fine with test data, but trying to add data is not working       
        */}

        {char.map(char => {
                return( 
                    <> 
                        {/* 
                        had a key here but idk if it did anything? 
                        none of this is getting rendered, just a blank <li>
                        */}
                        <div> 
                            <CharName char={char}/>
                            {/** additonal info was intended for this space but time did not allow. this could be updated in the fututre.*/}
                            {/** edit and delete needed */}
                            <br></br>
                            <Button variant="primary">edit</Button>
                            <Button variant="danger">delete</Button>
                        </div>
                    </>
                )
            })}
            
        </>
    )
}