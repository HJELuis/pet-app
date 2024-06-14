import React, { Fragment, useState } from "react";

const Content = ({dogCatTemperaments}) => {

    const[form, setForm] = useState({
        pet: "dog",
        temperaments: [],
    });

    const handleSelectChange = (event) => {        
        setForm( prev => ({...prev, [event.target.name]:event.target.value}));
    }

    const handleInputChange = (event) => {
        setForm(prev => ({...prev, [event.target.name]: [...prev.temperaments, event.target.id]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <Fragment>            
            <form onSubmit={handleSubmit}>                
                <fieldset>
                    <legend>Choose a pet</legend>
                    <select name="pet" onChange={handleSelectChange}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </fieldset> 
                <fieldset>
                    <legend>Choose a temperament that you'd like your pet had</legend> 
                    {                                                
                        dogCatTemperaments.map((temperament, index) => (                                                                                            
                                                             
                            <div key={index} style={{display: 'inline'}}>                                    
                                <label htmlFor={`${temperament.toLowerCase()}`}>{temperament.replace(temperament[0], temperament[0].toUpperCase())}</label>
                                <input name="temperaments" id={`${temperament.toLowerCase()}`} type="checkbox" onChange={handleInputChange}/> 
                            </div> 
                                                            
                        )) 
                    }                                                                                                                             
                </fieldset>  
                <button value="submit">Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Content;