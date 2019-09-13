import React from 'react';

// Styles
import style from '../StyledComponents/StyledComponents'

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
        <style.Features>
            <li>{name}</li>
            <li>{height}</li>
            <li>{mass}</li>
            <li>{hair_color}</li>
            <li>{skin_color}</li>
            <li>{eye_color}</li>
            <li>{birth_year}</li>
            <li>{gender}</li>
        </style.Features>
    )