import React from 'react'
// import {testData} from '../TestData';

export default function Message(props) {
    return (
        <div className="message">
            <p className="username">{props.username} says:</p>
            <p className="text">{props.text}</p>
        </div> 
    )
}
