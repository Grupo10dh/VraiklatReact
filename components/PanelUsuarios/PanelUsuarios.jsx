import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './PanelUsuarios.css'

const PanelUsuarios  = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const apiInfo = async () => {
            const users = await axios('http://localhost:3030/api/users');//pego a mi api
            // return products;
            setState(users.data)//guardo los datos en mi estado (state)
        }
        apiInfo()
        // console.log(state)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setState]);

    return (<>

                <div className='tarjetaUsuario'>
                    <h2>Usuarios</h2>
                    <h3>{state.count}</h3>
                </div>
                




            </> 
            );
}

export default PanelUsuarios;
