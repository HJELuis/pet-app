import axios from "axios";
import { useEffect, useState } from "react";

const useFetchPets = () => {

    const [dogs, setdogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchPets = async () => {
            try{            
                const dogsResponse = await axios.get("https://api.thedogapi.com/v1/breeds");
                const catsResponse = await axios.get("https://api.thecatapi.com/v1/breeds");
                setdogs(dogsResponse.data);
                setCats(catsResponse.data);                
            }catch(error) {
                setError(true);
            }
        }        
        fetchPets();
    }, [])

    return {dogs, cats, error};
}

export default useFetchPets;