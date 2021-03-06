import React,{useEffect,useState} from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [form, setForm] = useState({
        name:'',
        email:''
    })
    
    const {name,email} = form;

    useEffect(() => {
        //console.log('Hey');

    },[])

    useEffect(() => {
        //console.log('form cambio');
    },[form])

    useEffect(() => {
        //console.log('email cambio');
    },[email])

    const handleInputChange = ({target}) => {
        /*  Nombre del elemento que cambia
            console.log(e.target.name)
        */

        /*  value obtenido
            console.log(e.target.value)
        */

        setForm({
            ...form,
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div>
                <input 
                    type='text'
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}/>
            </div>
            <div>
                <input 
                    type='text'
                    name="email"
                    className="form-control"
                    placeholder="email@dpminio.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}/>
            </div>
            {
                (name ==='123') && <Message/>
            }
        </>
    )
}
