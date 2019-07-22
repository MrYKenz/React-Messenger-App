import React from 'react';
import Message from './Message'

export default function MessageList(props) {

    return (
        <div className="message-list">
            <h2>Messages: </h2>
            {props.messages.map((msg,index) => 
              <Message key={index} 
              username={msg.senderId} 
              text={msg.parts[0].payload.content}/>
            )}
        </div>
    )
}
