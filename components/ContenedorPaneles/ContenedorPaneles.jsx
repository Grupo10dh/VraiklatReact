import React from 'react';
import PanelCategorias from '../PanelCategorias/PanelCategorias';
import PanelProductos from '../PanelProductos/PanelProductos';
import PanelUsuarios from '../PanelUsuarios/PanelUsuarios';
import DetalleCategorias from '../DetalleCategorias/DetalleCategorias';
import UltimoProducto from '../UltimoProducto/UltimoProducto';
import ListaProductos from '../ListaProductos/ListaProductos';
import './ContenedorPaneles.css';



const  ContenedorPaneles = () => {
    return (<>
                <div className="contenedor">
                    <PanelProductos />
                    <PanelUsuarios />
                    <PanelCategorias />
                </div>
                <div className="contenedor-img-categorias">
                    <UltimoProducto/>
                    <DetalleCategorias/>
                </div>
                
    
                <ListaProductos/>


            </> );
}

export default ContenedorPaneles;