import React from 'react'

export default function Room(props) {
    return (
        <li className="room">
            <a onClick={()=>props.joinRoom(props.key)} href="#">
                {props.name}
            </a>
        </li>
    )
}
