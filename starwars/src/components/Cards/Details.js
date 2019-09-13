import React from 'react';
import moment from 'moment'

export const Details = ({
    created,
    edited
}) => {

    return (
        <div>
            <dd>Created at:</dd>
            <dt>{moment(created).format(`MMM Do YY`)}</dt>
            <dd>Last edited at:</dd>
            <dt>{moment(edited).format(`MMM Do YY`)}</dt>
        </div>
    )
}