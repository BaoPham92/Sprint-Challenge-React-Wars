import React from 'react';
import moment from 'moment'

// Styles
import style from '../StyledComponents/StyledComponents'

export const Details = ({
    created,
    edited
}) => {

    return (
        <style.Details>
            <dd>Created at:</dd>
            <dt>{moment(created).format(`MMM Do YY`)}</dt>
            <dd>Last edited at:</dd>
            <dt>{moment(edited).format(`MMM Do YY`)}</dt>
        </style.Details>
    )
}