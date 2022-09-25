import React from 'react'
import './login.css'
import { useState } from 'react'
import FormInput from './FormInput'

const Login = () => {
    
    const [Values, setValues] = useState({
        username:"",
        password:"" 
    });

    const inputs =[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:'username',
            label:"username"
        },
        {
            id:2,
            name:"password",
            type:"text",
            placeholder:'password',
            label:"password"
        }
    ]
    
    const handleSubmit = (e) =>{
      e.preventDefault(); 
      console.log(Values) 
    }


    const onChange = (e)=>{
        setValues({...Values,
        [e.target.name]: e.target.value});
    };
    
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <h1>login details</h1>
                {inputs.map((elem)=>(
                    <FormInput key={elem.id}
                     {...elem}
                      value={Values[elem.name]} 
                      onChange={onChange}/>
                ))}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;