import React, { Fragment, useState} from "react";
import DogsList from "../DogsList";
import CatsList from "../CatsList";
import useFetchPets from "../../hooks/useFetchPets";

const Content = () => {


    const[form, setForm] = useState({
        pet: "",
        temperaments: [],        
    });    

    const[flag, setFlag] = useState(false);    
   
    const {dogs,cats,error} = useFetchPets();
  
    /*Obteniendo temperamentos para usarlos en el elemento Form*/  
    const getTemperaments = () => {  
      
      const temperaments = {
        dogTemperaments: [],
        catTemperaments: [],
      }   
  
      dogs.map(dog => {  
              
        if(dog.temperament !== undefined) {
          const dogTemperamentsArray = dog.temperament.split(",");                   
          dogTemperamentsArray.map(temperament => {
            const reduceTemperament = temperament.trim().toLowerCase();
            if(!temperaments.dogTemperaments.includes(reduceTemperament)) {            
              temperaments.dogTemperaments.push(reduceTemperament);
            }
          });
        }
  
      });
     
  
      cats.map(cat => {  
              
        if(cat.temperament !== undefined) {
          const catTemperamentsArray = cat.temperament.split(",");         
          catTemperamentsArray.map(temperament => {
            const reduceTemperament = temperament.trim().toLowerCase();
            if(!temperaments.catTemperaments.includes(reduceTemperament)) {
              temperaments.catTemperaments.push(reduceTemperament);
            }
          });
        }
  
      });
                
      return temperaments;
  
    }           

   /*Colocando los temperamentos en el elemento Form*/
   const renderTemperaments = () => {

    const {dogTemperaments, catTemperaments} = getTemperaments();
    if(form.pet === "dog") {
        return dogTemperaments.map((temperament, index) => (                                                                                            
                                                             
            <div key={index} style={{display: 'inline'}}>                                    
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
                        error === false ? renderTemperaments() : <p>There was a problem</p>
                    }                                                                                                                             
                </fieldset>  
                <button value="submit">Search</button>
            </form> 
            <section>
                {
                   error === false ? renderContent():<p>There was a problem</p>                                                               
                }                                
            </section>                
             
        </Fragment>
    )
}

export default Content;