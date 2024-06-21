import React, { Fragment, useState} from "react";
import useGetTemperaments from "../../hooks/useGetTemperaments";
import useFetchPets from "../../hooks/useFetchPets";
import DogsList from "../DogsList";
import CatsList from "../CatsList";
import Form from "../Form";
import Header from "../Header";

const Content = () => {

    const[form, setForm] = useState({
        pet: "",
        temperaments: [],        
    });    

    const[flag, setFlag] = useState(false);    
   
    const {dogs,cats,error} = useFetchPets();

    const {dogTemperaments, catTemperaments} = useGetTemperaments(dogs, cats);
            
   /*Colocando los temperamentos en el elemento Form*/
   const renderTemperaments = () => {
   
    if(form.pet === "dog") {
        return dogTemperaments.map((temperament, index) => (                                                                                            
                                                             
            <div key={index} >                                    
                <label htmlFor={`${temperament.toLowerCase()}`}>{temperament.replace(temperament[0], temperament[0].toUpperCase())}</label>
                <input name="temperaments" id={`${temperament.toLowerCase()}`} type="checkbox" onChange={handleInputChange} /> 
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

  const handleSelectChange = (event) => {        
    setForm( prev => ({...prev, [event.target.name]:event.target.value}));
  }


  /*Revisando si estan palomeadas o no las casillas y modificando el arreglo del estado form */
  const handleInputChange = (event) => {               
      const isChecked = event.target.checked;
      if(isChecked) {
          setForm(prev => ({...prev, [event.target.name]: [...prev.temperaments, event.target.id]}))
      }else {
          setForm(prev => ({...prev, [event.target.name]: [...prev.temperaments.filter(temperament => temperament !== event.target.id)]}))
      }
      
  }

  const handleSubmit = (event) => {                    
      event.preventDefault();  
      setFlag(true);            
  }

  const renderContent = () => {  
    if(flag === true && form.pet === "dog") return <DogsList dogData={dogs} temperaments={form.temperaments}/>
    if(flag === true && form.pet === "cat") return <CatsList catData={cats} temperaments={form.temperaments}/>
  }
          
    return (
        <Fragment>       
               
            <Form handleSubmit={handleSubmit} handleSelectChange={handleSelectChange} renderTemperaments={renderTemperaments} error={error}></Form>
            <section>
                {
                   error === false ? renderContent():<p>There was a problem</p>                                                               
                }                                
            </section>                
             
        </Fragment>
    )
}

export default Content;