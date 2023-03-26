import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './PanelProductos.css'




const PanelProductos = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const apiInfo = async () => {
            const products = await axios('http://localhost:3030/api/products');//pego a mi api
            // return products;
            setState(products.data)//guardo los datos en mi estado (state)
        }
        apiInfo()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setState]);


    return (<>
                <div className='tarjetaProducto'>
                    <h2>Productos</h2>
                    <h3>{state.count}</h3>
                </div>
                




    
            </> 
            );
}

export default PanelProductos;
