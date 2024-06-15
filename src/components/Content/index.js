import React, { Fragment, useState} from "react";
import DogsList from "../DogsList";
import CatsList from "../CatsList";

const Content = ({temperaments}) => {

    const[form, setForm] = useState({
        pet: "",
        temperaments: [],        
    });    

    const[flag, setFlag] = useState(false);
   
    const handleSelectChange = (event) => {        
        setForm( prev => ({...prev, [event.target.name]:event.target.value}));
    }

    const handleInputChange = (event) => {
        setForm(prev => ({...prev, [event.target.name]: [...prev.temperaments, event.target.id]}))
    }

    const handleSubmit = (event) => {                    
        event.preventDefault();  
        setFlag(true);            
    }

   const renderContent = () => {  
    if(flag === true && form.pet === "dog") return <DogsList />
    if(flag === true && form.pet === "cat") return <CatsList />
   }

   const renderTemperaments = () => {

    const {dogTemperaments, catTemperaments} = temperaments;
    if(form.pet === "dog") {
        return dogTemperaments.map((temperament, index) => (                                                                                            
                                                             
            <div key={index} style={{display: 'inline'}}>                                    
                <label htmlFor={`${temperament.toLowerCase()}`}>{temperament.replace(temperament[0], temperament[0].toUpperCase())}</label>
                <input name="temperaments" id={`${temperament.toLowerCase()}`} type="checkbox" onChange={handleInputChange}/> 
            </div> 
                                            
        )) 

    }else if(form.pet === "cat") {
        return catTemperaments.map((temperament, index) => (                                                                                            
                                                             
            <div key={index} style={{display: 'inline'}}>                                    
                <label htmlFor={`${temperament.toLowerCase()}`}>{temperament.replace(temperament[0], temperament[0].toUpperCase())}</label>
                <input name="temperaments" id={`${temperament.toLowerCase()}`} type="checkbox" onChange={handleInputChange}/> 
            </div> 
                                            
        )) 
    }
   
   }
          
    return (
        <Fragment>            
            <form onSubmit={handleSubmit}>                
                <fieldset>
                    <legend>Choose a pet</legend>
                    <select name="pet" onChange={handleSelectChange}>
                        <option value=""></option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </fieldset> 
                <fieldset>
                    <legend>Choose a temperament that you'd like your pet had</legend> 
                    {                                                
                        renderTemperaments()
                    }                                                                                                                             
                </fieldset>  
                <button value="submit">Ingresar</button>
            </form> 
            <section>
                {
                   renderContent()                                                               
                }                                
            </section>                
             
        </Fragment>
    )
}

export default Content;