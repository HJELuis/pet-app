import React, {useEffect, useState} from "react";
import Content from "./components/Content";
import axios from "axios";


function App() {

  const [dogs,setDogs] = useState([]);
  const [cats,setCats] = useState([]);  
  
 
  useEffect(()=>{

    const getData = async () =>{
      try{
        const dogsResponse = await axios.get("https://api.thedogapi.com/v1/breeds");
        const catsResponse = await axios.get("https://api.thecatapi.com/v1/breeds");
                        
        setDogs(dogsResponse.data);
        setCats(catsResponse.data);
      }catch(error){
        console.log(error);
      }          
    }    

    getData();     
  },[])

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
  
  

  return (
    
    <div className="App">
      <Content temperaments={getTemperaments()}/>         
    </div>
  );
}

export default App;
