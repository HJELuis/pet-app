import React, { Fragment } from "react";


const DogsList = ({dogData, temperaments}) => {

    
    
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
                            if(temperamentsArray.includes(upperTemperament)){
                                console.log("Este perro se imprime")
                                return (
                                    <article key={dog.id}>
                                        <img alt={dog.name} src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} width="200"></img>
                                        <p>{dog.name}</p>
                                        <p>{dog.temperament}</p>
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