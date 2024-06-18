
const useGetTemperaments = (dogs, cats) => {

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

export default useGetTemperaments;