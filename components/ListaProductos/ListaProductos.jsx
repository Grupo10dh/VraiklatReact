import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './ListaProductos.css';

const  ListaProductos = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const apiInfo = async () => {
            const products = await axios('http://localhost:3030/api/products');//pego a mi api
            // return products;
            setState(products.data.products )//guardo los datos en mi estado (state)
        }
        apiInfo()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setState]);

    console.log(state)
    return (
        <>
            <div className='listaProductos'>
                {/* <h1>Productos</h1> */}
                
                        <ul className='titulos'>
                            <li className='titulos-producto'>Producto</li>  
                            <li className='titulos-descripcion'>Descripcion</li>   
                            <li className='titulos-precio'>Precio</li> 
                        </ul> 
                        
                    {
                        state && state?.map((e) => {
                            return(
                                <div key={e.id} className='lista'>
                                    
                                    <ul  className="fila">
                                        {/* <Link to={`/character/${e.id}`}></Link> */}
                                        <li className='nombre-tabla'>{e.name}</li>
                                        <li className='descripcion-tabla'>{e.description}</li>
                                        <li className='precio-tabla'>{e.price}</li>
                                    </ul>
                                        
                                    
                                </div>
                            )
                    })
                    }
                
                </div>
            
        </> 
    );
}

export default ListaProductos;
