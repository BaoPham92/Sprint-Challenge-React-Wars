import React from 'react';

// Component imports
import { Details } from './Details'
import { Features } from './Features'

// Styles
import style from '../StyledComponents/StyledComponents'

export const Info = ({ person }) => {

    return (
        <style.Info>
            <h2>Features:</h2>
            <Features
                name={person.name}
                height={person.height}
                mass={person.mass}
                hair_color={person.hair_color}
                skin_color={person.skin_color}
                eye_color={person.eye_color}
                birth_year={person.birth_year}
                gender={person.gender}
            />

            <h3>Current Details:</h3>
            <Details
                created={person.created}
                edited={person.edited}
            />
        </style.Info>
    )
}