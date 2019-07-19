import React from 'react'

export default function Room(props) {
    const current = props.current === props.id ? '-current' : ''; // if state.currentRoom matches id of joined highlight
    return (
        <button 
            className={"room" + current}
            onClick={()=>props.joinRoom(props.id)} >
                {props.name} 
        </button>
    )
}
