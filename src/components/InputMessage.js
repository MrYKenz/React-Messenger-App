import React, { useState } from 'react'

export default function InputMessage(props) {
    const [message, setMessage] = useState(''); // state = {message:''} 
    // where setMessage is setState()
    
    const handleChange = event =>
        setMessage(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        props.sendMessage(message); // this.state.message
        setMessage('');
    }

    return (
            <form className="input-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter your message here..." 
                    value={message}
                    onChange={handleChange}/>
            </form>
        )
    }

