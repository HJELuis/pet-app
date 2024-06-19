import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const USERNAME = "user";
    const PASSWORD = "password";

    const handleChange = (event) => {       
        setForm(prev => ({...prev, [event.target.id]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.username === USERNAME && form.password === PASSWORD){
           navigate("/content");
        }
        else {
           alert("Incorrect Password");
        }
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" onChange={handleChange}/>
                <label htmlFor="password">Password: </label>
                <input id="password" type="text" onChange={handleChange}/>
                <button value="submit">Ingresar</button>
            </form>
        </Fragment>        
    )
}

export default Login;