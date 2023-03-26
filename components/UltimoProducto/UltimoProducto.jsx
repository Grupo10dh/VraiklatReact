import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './UltimoProducto.css';

const UltimoProducto = () => {
    
    const [state, setState] = useState([]);

    // const [producto, setProducto] = useState([]);

    const apiInfo = async () => {
        const products = await axios('http://localhost:3030/api/products');//pego a mi api
         // return products;
        let lastProduct = products.data.products.length - 1

        setState(products.data.products[lastProduct])//guardo los datos en mi estado (state)
        
    }


    useEffect(() => {
        apiInfo() 
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setState]);
    
    
    console.log(state)
    
    return (<>
                {
                    
                            <div className='tarjeta-ultimoProducto'>
                                    <h2 className='titulo-ultimoProducto'>Ultimo Producto</h2>
                                    <img src={`http://localhost:3030/${state.detail}`} alt="" className='foto-ultimoProducto'/><br />
                                    {/* <label>id: {state.id}</label><br /> */}
                                    <label className='nombre-ultimoProducto'>{state.name}</label><br />
                                    <label className='descripcion-ultimoProducto'>{state.description}</label><br />
                                    
                                    
                        
                            </div>
                        
                    
                }
            </> 
            );
}

export default UltimoProducto;