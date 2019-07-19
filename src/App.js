import React, {Component} from 'react';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';
import Users from './components/Users';
import MessageList from './components/MessageList';
import InputMessage from './components/InputMessage';
import RoomList from './components/RoomList';
import InputRoom from './components/InputRoom';
import './App.css';

class App extends Component {

  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    currentRoom: null,
    availableUsers: [],
  }

  componentDidMount() {
    const chatManager = new ChatManager({
        instanceLocator,
        userId: 'sam',
        tokenProvider: new TokenProvider({
          url: tokenUrl
        })
    })
    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser // make accesable to other methods
      this.showRooms()
      this.joinRoom()
    }).catch(err => console.log(`Error on connecting: ${err}`))
  }

  showRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      }).catch(err => console.log(`Error getting joinable rooms: ${err}`))
  }

  joinRoom = (id) => {
    this.setState({ messages: [] }) // clear messages once joining new room
    this.currentUser.subscribeToRoomMultipart({
      roomId: typeof id === "undefined" ? this.currentUser.rooms[0].id : id, // removes undefined error & joins first room if none joined
      hooks: {
        onMessage: message => {
          // console.log(message.parts[0].payload.content)
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      },
      messageLimit: 5 //  limit no. of msgs on screen
    }).then(room => {
      this.setState ({
        currentRoom: room.id,
        availableUsers: [...room.users]
      })
    }).catch(err => console.log(`Error on joining room: ${err}`))
  }

  // called in InputMessage component
  createMessage = (text) => {
    this.currentUser.sendSimpleMessage({
      roomId: this.state.currentRoom,
      text
    })
  }
  
  // called in InputRoom component
  createRoom = (roomName) => {
    this.currentUser.createRoom({
      name: roomName,
      private: false
    }).then(room => {
      this.joinRoom(room.id)
      this.showRooms()
    }).catch(err => console.log(`Error creating room: ${err}`))
  } 

  render() {
      // console.log(this.state.messages);
      // console.log(this.state.joinedRooms);
      // console.log(this.state.availableUsers)
      // console.log(this.state.joinableRooms.map(room=>room.name))
      return (
      <div className="App">
        <Users users={this.state.availableUsers}/>
        <MessageList messages={this.state.messages}/>
        <InputMessage createMessage={this.createMessage}/>
        <RoomList current={this.state.currentRoom} 
        rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} 
        joinRoom={this.joinRoom}/>
        <InputRoom createRoom={this.createRoom}/>
      </div>
    );
  }
}

export default App;
