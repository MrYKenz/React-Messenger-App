import React, { useState } from 'react'

export default function InputRoom(props) {
    const [room, setRoom] = useState(''); // state = {room:''} 
    
    const handleChange = event =>
        setRoom(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        props.createRoom(room); // call method in parent component
        setRoom(''); // clear state
    }

    return (
            <form className="input-room" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Create a room..." 
                    value={room}
                    onChange={handleChange}/>
                <button id="add-room-btn">+</button>
            </form>
        )
    }