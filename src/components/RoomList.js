import React from 'react'
import Room from './Room'

export default function RoomList(props) {
    return (
        <div className="room-list">
            <h2>Rooms: </h2>
                {props.rooms.map(room =>
                    <li key={room.id}>
                        <Room id={room.id} 
                        name={room.name} 
                        joinRoom={props.joinRoom} 
                        current={props.current}/>
                    </li>
                )}
        </div>
    )
}
