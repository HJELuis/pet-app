import React, { Fragment } from "react";

const Form = ({dogCatTemperaments}) => {


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
                        
                        dogCatTemperaments.map(temperamentObj => (                                                                                            
                                                             
                            <div key={temperamentObj.id} style={{display: 'inline'}}>                                    
                                <label htmlFor={`${temperamentObj.temperament.toLowerCase()}`}>{temperamentObj.temperament}</label>
                                <input id={`${temperamentObj.temperament.toLowerCase()}`} type="checkbox" /> 
                            </div> 
                                                            
                        )) 
                    }
                                                                                                                             
                </fieldset>                          
            </form>
        </Fragment>
    )
}

export default Form;