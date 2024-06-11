import React, { Fragment } from "react";

const Form = ({temperaments}) => {

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
                    <legend>Temperament</legend>
                    <div>
                        <label htmlFor="curious">Curious</label>
                        <input id="curious" type="checkbox" />                                        
                        <label htmlFor="active">Active</label>
                        <input id="active" type="checkbox" />
                        <label htmlFor="playful">Playful</label>
                        <input id="playful" type="checkbox" />
                        <label htmlFor="fun-loving">Fun-Loving</label>
                        <input id="fun-loving" type="checkbox" />
                        <label htmlFor="clownish">Clownish</label>
                        <input id="clownish" type="checkbox" />
                        <label htmlFor="dignified">Dignified</label>
                        <input id="dignified" type="checkbox" />
                        <label htmlFor="independent">Independent</label>
                        <input id="independent" type="checkbox" />
                        <label htmlFor="happy">Happy</label>
                        <input id="happy" type="checkbox" />
                        <label htmlFor="wild">Wild</label>
                        <input id="wild" type="checkbox" />
                        <label htmlFor="hardworking">Hardworking</label>
                        <input id="hardworking" type="checkbox" />
                    </div>
                    <label htmlFor="dutiful">Dutiful</label>
                    <input id="dutiful" type="checkbox" />
                    <label htmlFor="intelligent">Intelligent</label>
                    <input id="intelligent" type="checkbox" />
                    <label htmlFor="interactive">Interactive</label>
                    <input id="interactive" type="checkbox" />
                    <label htmlFor="sensitive">Sensitive</label>
                    <input id="sensitive" type="checkbox" />
                    <label htmlFor="lively">Lively</label>
                    <input id="lively" type="checkbox" />
                    <label htmlFor="friendly">Friendly</label>
                    <input id="friendly" type="checkbox" />
                    <label htmlFor="gentle">Gentle</label>
                    <input id="gentle" type="checkbox" />
                    <label htmlFor="calm">Calm</label>
                    <input id="calm" type="checkbox" />
                    <label htmlFor="affectionate">Affectionate</label>
                    <input id="affectionate" type="checkbox" />
                    <label htmlFor="mischievous">Mischievous</label>
                    <input id="mischievous" type="checkbox" />
                    <label htmlFor="tenacious">Tenacious</label>
                    <input id="tenacious" type="checkbox" />
                    <label htmlFor="loyal">Loyal</label>
                    <input id="loyal" type="checkbox" />
                    <label htmlFor="social">Social</label>
                    <input id="social" type="checkbox" />
                    <label htmlFor="agile">Agile</label>
                    <input id="agile" type="checkbox" />
                    <label htmlFor="clever">Clever</label>
                    <input id="clever" type="checkbox" />
                    <label htmlFor="easy-going">Easy Going</label>
                    <input id="easy-going" type="checkbox" />  
                    <label htmlFor="protective">Protective</label>
                    <input id="protective" type="checkbox" />   
                    <label htmlFor="fearless">Fearless</label>
                    <input id="fearless" type="checkbox" />      
                    <label htmlFor="athletic">Athletic</label>
                    <input id="athletic" type="checkbox" />
                    <label htmlFor="companionable">Companionable</label>
                    <input id="companionable" type="checkbox" />    
                    <label htmlFor="reserved">Reserved</label>
                    <input id="reserved" type="checkbox" />  
                    <label htmlFor="vocal">Vocal</label>
                    <input id="vocal" type="checkbox" />                       
                                          
                </fieldset>                          
            </form>
        </Fragment>
    )
}

export default Form;