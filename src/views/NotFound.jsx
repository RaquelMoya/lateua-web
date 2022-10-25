import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css'
import React from 'react';
import { MehOutlined } from '@ant-design/icons';

export const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className="not-found">
            <p><MehOutlined /></p>
            <h1>¡Oh, No! Algo salió mal. </h1>
            <button className="boton" onClick={() => navigate('/')}>Volver al inicio</button>
            
        </div>
    )
}