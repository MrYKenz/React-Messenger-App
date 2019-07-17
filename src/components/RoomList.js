import React from 'react'
import Room from './Room'

export default function RoomList(props) {
    return (
        <div className="room-list">
            <h2>Rooms: </h2>
            <ul>
                {props.rooms.map(room => 
                <Room key={room.id} name={room.name} joinRoom={props.joinRoom}/>)}
            </ul>
        </div>
    )
}
