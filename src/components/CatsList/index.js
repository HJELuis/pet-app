import { Fragment } from "react";
import React from "react";

const CatsList = ({catData, temperaments}) => {

    let displayedCats = [];

    return (
        <Fragment>
           {
                catData.map(cat => {

                    return (temperaments.map(tempera => {
                        
                        const upperTemperament = tempera.charAt(0).toUpperCase() + tempera.slice(1);
                        if(cat.temperament !== undefined){
                            const temperamentsArray = cat.temperament.split(",");
                            for(let i=0; i < temperamentsArray.length; i++){
                                temperamentsArray[i] = temperamentsArray[i].trim();
                            }
                            /*Se despliega un gato si alguno de sus temperamentos coincide con la lista de temperamentos seleccionadas en el Form*/
                            if(temperamentsArray.includes(upperTemperament) && !displayedCats.includes(cat.id)){    
                                displayedCats.push(cat.id);
                                return (
                                    <article key={cat.id}>
                                        <img alt={cat.name} src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} width="200"></img>
                                        <p>Name: {cat.name}</p>
                                        <p>Temperaments: {cat.temperament}</p>
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

export default CatsList;