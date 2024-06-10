import React, { useEffect, useState, Fragment } from "react";
import axios from "axios"

const DogsList = () => {
    const [dogs, setDogs] = useState([]);
    const [error, setError] = useState([]);


    useEffect(() =>{
        const getDogs = async () => {
            try{
                const response = await axios.get("https://api.thedogapi.com/v1/breeds");                
                console.log(response);                
                setDogs(response.data);
            }catch(error){
                setError(error);
            }            
        }

        getDogs();        
    }, [])

    return(
        <Fragment>
            <section> 
           {                         
                dogs.map((dog) => {                      
                    return (
                            <article key={dog.id}>
                                <p>Name: {dog.name}</p>                                
                                <p>Life Span: {dog.life_span}</p>
                                <img width="200" alt={`${dog.name}`} src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}></img>
                            </article>
                    );
                })
                
            }
            </section>
            
        </Fragment>
    )


}
export default DogsList;