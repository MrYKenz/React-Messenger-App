import React from 'react'

export default function Users(props) {
    return (
        <header className="users-list">
            <h3>Active Users: </h3>
            {props.users.map((user,index) => 
                <span key={index}> <b>{user.name}</b> </span>
            )} 
        </header>
    )
}
