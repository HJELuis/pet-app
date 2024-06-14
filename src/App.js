import React, {useCallback, useEffect, useState} from "react";
//import DogsList from "./components/DogsList";
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

  /*Obteniendo temperamentos para usarlos en el componente Form*/

  const getTemperaments = () => {  
    
    let allTemperaments = [];        

    dogs.map(dog => {  
            
      if(dog.temperament !== undefined) {
        const dogTemperaments = dog.temperament.split(",");                   
        dogTemperaments.map(temperament => {
          const reduceTemperament = temperament.trim().toLowerCase();
          if(!allTemperaments.includes(reduceTemperament)) {            
            allTemperaments.push(reduceTemperament);
          }
        });
      }

    });
   

    cats.map(cat => {  
            
      if(cat.temperament !== undefined) {
        const catTemperaments = cat.temperament.split(",");         
        catTemperaments.map(temperament => {
          const reduceTemperament = temperament.trim().toLowerCase();
          if(!allTemperaments.includes(reduceTemperament)) {
            allTemperaments.push(reduceTemperament);
          }
        });
      }

    });
              
    return allTemperaments

  }   
  
  

  return (
    
    <div className="App">
      <Content dogCatTemperaments={getTemperaments()}/>         
    </div>
  );
}

export default App;
