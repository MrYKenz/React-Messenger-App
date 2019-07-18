import React from 'react'

export default function Room(props) {
    const current = props.current === props.id ? '-current' : ''; // if state.currentRoom matches id of joined highlight
    return (
        <a className={"room" + current} href="#"
            onClick={()=>props.joinRoom(props.id)} >
                {props.name} 
        </a>
    )
}
