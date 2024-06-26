import React, {useState} from "react";


interface Dog {
  temperament: string;
  id: number;
  name: string;
  reference_image_id: string;
  
}

interface Cat {
  temperament: string;
  id: number;
  name: string;
  reference_image_id: string;
  
}

interface Temperaments {
  dogTemperaments: string [];
  catTemperaments: string [];
}



const useGetTemperaments = (dogs: Dog[], cats: Cat[]) => {

    
      
      const [temperaments, setTemperaments] = useState<Temperaments>({
        dogTemperaments: [],
        catTemperaments: []
      });
  
      dogs.map(dog => {  
              
        if(dog.temperament !== undefined) {
          const dogTemperamentsArray = dog.temperament.split(",");                   
          dogTemperamentsArray.map(temperament => {
            const reduceTemperament: string = temperament.trim().toLowerCase();
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

export default useGetTemperaments;