import React, {useEffect, useState} from "react";
//import DogsList from "./components/DogsList";
import Form from "./components/Form";
import axios from "axios";


function App() {
  const [dogs,setDogs] = useState([]);
  const [cats,setCats] = useState([]);
  const [temperaments, setTemperaments] = useState([]);



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

    const getTemperaments = () => {  
    
      let allTemperaments = [];
  
      dogs.map(dog => {  
              
        if(dog.temperament !== undefined) {
          const dogTemperaments = dog.temperament.split(",");         
          dogTemperaments.map(temperament => {
            if(!allTemperaments.includes(temperament)) {
              allTemperaments.push(temperament);
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
        
      setTemperaments(allTemperaments);    
  
    }

    getData();
    getTemperaments();
    
  },[cats, dogs])
      

  return (
    <div className="App">
      <Form dogCatTemperaments={temperaments}/>
      
    </div>
  );
}

export default App;
