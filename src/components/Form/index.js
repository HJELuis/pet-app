import React, { Fragment } from "react";

const Form = ({dogCatTemperaments}) => {


    const showData = () => {
        console.log(dogCatTemperaments);
    }


    return (
        <Fragment>
            
            <form>                
                <fieldset>
                    <legend>Choose a pet</legend>
                    <select name="pet-type">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </fieldset> 
                <fieldset>
                    <legend>Choose a temperament that you'd like your pet had</legend> 
                    {
                        
                        dogCatTemperaments.map(temperament => {
                            
                            return(
                                <>
                                    <label htmlFor={`${temperament.toLowerCase()}`}>{temperament}</label>
                                    <input id={`${temperament.toLowerCase()}`} type="checkbox" />  
                                </> 
                            )
                        }) 
                    }
                                                                                                                             
                </fieldset>                          
            </form>
        </Fragment>
    )
}

export default Form;