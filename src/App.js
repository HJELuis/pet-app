import React, {useState} from "react";
import useFetchPets from "./hooks/useFetchPets";
import useGetTemperaments from "./hooks/useGetTemperaments";
import DogsList from "./components/DogsList";
import CatsList from "./components/CatsList";

function App() {  

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
    
    <div className="App">
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
    </div>
  );
}

export default App;
