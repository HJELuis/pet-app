import React, {Fragment} from "react";

interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    renderTemperaments: () => JSX.Element[] | undefined;
    error: boolean;
  }

const Form: React.FC<FormProps> = ({handleSubmit, handleSelectChange, renderTemperaments,error}) => {

    return (
        <Fragment>
            <form onSubmit={handleSubmit} id="app-form">                
            <fieldset>
                <legend>Choose a pet</legend>
                <select name="pet" onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </fieldset> 
            <fieldset id="app-fieldset">
                <legend>Choose a temperament that you'd like your pet had</legend> 
                {                                                
                    error === false ? renderTemperaments() : <p>There was a problem</p>
                }                                                                                                                             
            </fieldset>  
            <button value="submit" id="app-button">Search</button>
        </form> 
        </Fragment>
    )

}

export default Form;