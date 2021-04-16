import React from 'react';
import { Card } from 'semantic-ui-react';
// import './styles.css';

const WeatherCard = ({weatherdata}) => {
    return (
    <Card>
        <Card.Content>
            <Card.Header className="header">{weatherdata.name}</Card.Header>
        </Card.Content>
    </Card>
    )
}

export default WeatherCard;