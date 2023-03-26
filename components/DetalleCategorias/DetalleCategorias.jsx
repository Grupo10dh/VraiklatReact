import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import './DetalleCategorias.css';

const DetalleCategorias = () => {
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

    let values = Object.entries(state)
    
    return (<>

                <div className='detalleCategoria'>
                    <h2 className='titulo-detalleCategoria'>Categorias</h2>

                    {
                        values.map((e, i) => {
                            return (
                                <div key={i + e} className='categoria'>
                                    {e[0].toUpperCase()} : {e[1]}
                                    <br />
                                    <br />
                            </div>
                            )    
                        })
                    }
                </div>
                
                
            </> 
            );
}

export default DetalleCategorias;