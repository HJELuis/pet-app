import React, { Fragment } from "react";


interface Dog {
    temperament: string;
    id: number;
    name: string;
    reference_image_id: string;
    
  }

interface DogsListProps {
    dogData: Dog[];
    temperaments: string[];
}



const DogsList = ({dogData, temperaments}: DogsListProps) => {

    let displayedDogs: number[] = [];
    
    return(
        <Fragment>
           
            {

                dogData.map(dog => {

                    return (temperaments.map(tempera => {
                        
                        const upperTemperament = tempera.charAt(0).toUpperCase() + tempera.slice(1);
                        if(dog.temperament !== undefined){
                            const temperamentsArray = dog.temperament.split(",");
                            for(let i=0; i < temperamentsArray.length; i++){
                                temperamentsArray[i] = temperamentsArray[i].trim();
                            }
                              /*Se despliega un perro si alguno de sus temperamentos coincide con la lista de temperamentos seleccionadas en el Form*/
                            if(temperamentsArray.includes(upperTemperament) && !displayedDogs.includes(dog.id)){    
                                displayedDogs.push(dog.id);
                                return (
                                    <article key={dog.id}>
                                        <img alt={dog.name} src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} width="200"></img>
                                        <p>Name: {dog.name}</p>
                                        <p>Temperaments: {dog.temperament}</p>
                                    </article>
                                )  
                            } 
                        }
                         
                    }) )

                })                
            }
                        
        </Fragment>
    )


}
export default DogsList;