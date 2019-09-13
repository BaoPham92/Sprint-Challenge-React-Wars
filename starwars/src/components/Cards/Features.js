import React from 'react';

export const Features = ({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
}) => (
        <ul>
            <li>{name}</li>
            <li>{height}</li>
            <li>{mass}</li>
            <li>{hair_color}</li>
            <li>{skin_color}</li>
            <li>{eye_color}</li>
            <li>{birth_year}</li>
            <li>{gender}</li>
        </ul>
    )