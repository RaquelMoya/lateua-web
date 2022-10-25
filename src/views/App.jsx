import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const App = () => {

    const url = (event) => {
        event.preventDefault();
        window.open("https://shop.lateua.es/lateua-express/", "_blank");
    }
    
    return (
        <div id="container">

                    <div id="text">
                        <h1>Bienvenid@ a  <br/>Lateua</h1>
                        <p>La Experiencia Definitiva De Diseño</p>
                    </div>

                    <div id="cta">
                        <img src="../../src/img/imagen.png" alt="imagen" id="principal"/>
                        <button onClick={url}>
                            Comenzar <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </button>            
                    </div>
       
        </div>
    )
}