import React from 'react';

// Component imports
import { Info } from './Info'

// Styles
import style from '../StyledComponents/StyledComponents'

export const Cards = ({ people }) => {
    console.log(people)

    return (
        <style.Cards>
            {people.map((person, key) => <Info person={person} key={key}/>)}
        </style.Cards>
    )
}