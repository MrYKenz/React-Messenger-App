import React from 'react'

export default function Users(props) {
    return (
        <header className="users-list">
            <h3>Joined Users:
            {props.users.map((user,index) => 
                <span key={index}> <b>({user.name})</b> </span>
            )} 
            </h3>
        </header>
    )
}
