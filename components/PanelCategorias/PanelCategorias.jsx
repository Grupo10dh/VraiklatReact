import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './PanelCategorias.css'

const PanelCategorias = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const apiInfo = async () => {
            const categories = await axios('http://localhost:3030/api/products');//pego a mi api
            // return products;
            setState(categories.data.countByCategory)//guardo los datos en mi estado (state)
        }
        apiInfo()
        

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setState]);

    let values = Object.keys(state)

    console.log(state)
    
    return (<>

                <div className='tarjetaCategoria'>
                    <h2>Categorias</h2>
                    <h3>{values.length}</h3>
                </div>
                
                
            </> 
            );
}

export default PanelCategorias;
