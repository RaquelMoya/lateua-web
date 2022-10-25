import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css'
import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

export const Footer = () => {
    return (
        <>

            <footer>
                <p><WhatsAppOutlined /> 623001833</p>
                <p><FontAwesomeIcon icon="fa-solid fa-envelope" /> proyectos@lateua.es</p>
                <p><FontAwesomeIcon icon="fa-solid fa-house" /> Edificio Lanzadera, La Marina de, Carrer del Moll de la Duana, s/n, 46024 Valencia</p>
                <p>© 2022 Lateua</p>
            </footer>

        </>
    )
}