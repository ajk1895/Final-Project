import React, { useState } from "react";
import 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//need: function to take input data and create obj and push it to the array

export default function CharForm({char, onSubmit}) {
    const [nameValue, setNameValue] = useState("");
    

    const handleNameChange = (event) => setNameValue(event.target.value);
    

    const charData = {
        name: nameValue,
    }

        
    const handleFormSubmit =()=>{
        onSubmit(charData) 
    }
    
    return (
        <>
        
            <Form>
                <Form.Group className="mb-3" controlId="nameInput">
                    <Form.Label><h5>Character Name</h5></Form.Label>
                    <Form.Control type="text" placeholder="Character Name" value={nameValue} onChange={handleNameChange}/>
                </Form.Group>
            </Form>
            <Button onClick={handleFormSubmit} variant="success">add Character!</Button>
        </>
    )
}
