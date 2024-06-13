import React, {useCallback, useEffect, useState} from "react";
//import DogsList from "./components/DogsList";
import Form from "./components/Form";
import axios from "axios";


function App() {
  const [dogs,setDogs] = useState([]);
  //const [cats,setCats] = useState([]);
  //const [temperaments, setTemperaments] = useState([]);
  


  

  const getTemperaments = () => {  
    
    let allTemperaments = [];
    let temperamentObjs = [];
    let temperamentId = 0;

    dogs.map(dog => {  
            
      if(dog.temperament !== undefined) {
        const dogTemperaments = dog.temperament.split(",");                   
        dogTemperaments.map(temperament => {
          const reduceTemperament = temperament.trim();
          if(!allTemperaments.includes(reduceTemperament)) {
            temperamentObjs.push({id: temperamentId++,temperament: reduceTemperament});
            allTemperaments.push(reduceTemperament);
          }
        });
      }

    });

   

    /* cats.map(cat => {  
            
      if(cat.temperament !== undefined) {
        const catTemperaments = cat.temperament.split(",");         
        catTemperaments.map(temperament => {
          if(!allTemperaments.includes(temperament)) {
            allTemperaments.push(temperament);
          }
        });
      }

    }); */
      
    //setTemperaments(temperamentObjs);    
    return temperamentObjs

  }
 
  useEffect(()=>{

    const getData = async () =>{
      try{
        const dogsResponse = await axios.get("https://api.thedogapi.com/v1/breeds");
        //const catsResponse = await axios.get("https://api.thecatapi.com/v1/breeds");
                        
        setDogs(dogsResponse.data);
        //setCats(catsResponse.data);
      }catch(error){
        console.log(error);
      }          
    }    

    getData(); 
    //getTemperaments();
  },[])

 

  

  const renderContent = () => (

    <>
    
    <Form dogCatTemperaments={getTemperaments()}/> 
    
    </>

  )
  
      

  return (
    
    <div className="App">
      {renderContent()}
         
    </div>
  );
}

export default App;
