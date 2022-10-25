import 'antd/dist/antd.css'
import { Card as AntCard } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Card = styled(AntCard)`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 1em;
background-color: #a3543d;
box-shadow: .5em .5em 1em #000;
margin: 1em;
font-family:'Glacial';
font-size: 1.5em;
padding: 1em;
`;
export const About = () => {

    return (
        <div className="about-page">
            <div className="about">
                <Card title="CEO"  className="antCard">
                <img src="../src/img/iria.jpg" alt="img-ceo" />
                </Card>
                <Card title="Diseñador 3D"  className="antCard">
                <img src="../src/img/rob.jpg" alt="img-rob" />
                </Card>
                </div>
                <div className="about">
                <Card title="Diseñadora 3D"  className="antCard">
                <img src="../src/img/nia.jpg" alt="img-ceo" />
                </Card>
                <Card title="FullStack Developer"  className="antCard">
                <img src="../src/img/rak.jpg" alt="img-rob" />
                </Card>
            </div>

        </div>
    )
}