import React, {Fragment, useState} from "react";

const Login = () => {

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const USERNAME = "user";
    const PASSWORD = "password";


    const handleChange = (event) => {
        setForm(...prev => ({...prev, [event.id]: event.value}));
    }

    const handleSubmit = () => {
        if(form.username === USERNAME && form.password === PASSWORD){
            //La lógica para desplegar el contenido
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