import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
    username: string;
    password: string;
}

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState<FormState>({
        username: "",
        password: "",
    });

    const USERNAME: string = "user";
    const PASSWORD: string = "password";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {       
        setForm(prev => ({...prev, [event.target.id]: event.target.value}));
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
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
                <div className="login-form">
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" onChange={handleChange}/>
                </div>
                <div className="login-form">
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="text" onChange={handleChange}/>
                </div>                
                <button value="submit" id="login-button">Ingresar</button>
            </form>
        </Fragment>        
    )
}

export default Login;