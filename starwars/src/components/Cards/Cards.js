import React from 'react';

// Component imports
import { Info } from './Info'

export const Cards = ({ people }) => {
    console.log(people)

    return (
        <div>
            {people.map((person, key) => <Info person={person} key={key}/>)}
        </div>
    )
}