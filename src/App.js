import React, {Component} from 'react';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';
import MessageList from './components/MessageList';
import InputMessage from './components/InputMessage';
import RoomList from './components/RoomList'
import './App.css';

class App extends Component {

  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: []
  }

  componentDidMount() {
    const chatManager = new ChatManager({
        instanceLocator,
        userId: 'john',
        tokenProvider: new TokenProvider({
          url: tokenUrl
        })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser // make accesable to sendMessage func
      this.showRooms()
      this.joinRoom()
    })
    .catch(err => console.log(`Error on connecting: ${err}`))
  }

  showRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
    .catch(err => console.log(`Error getting joinable rooms: ${err}`))
  }

  joinRoom = (id) => {
    this.setState({ message: [] }) // clear messages once joining new room
    this.currentUser.subscribeToRoomMultipart({
      roomId: typeof id === "undefined" ? "19447903" : id,
      hooks: {
        onMessage: message => {
          // console.log(message.parts[0].payload.content)
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      },
      messageLimit: 3 //  limit no. of msgs on screen
    })
  }


  sendMessage = (text) => {
    this.currentUser.sendSimpleMessage({
      roomId: "19447903",
      text
    })
  }

  render() {
      // console.log(this.state.messages);
      // console.log(this.state.joinedRooms);
      return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
        <InputMessage sendMessage={this.sendMessage}/>
        <RoomList rooms={[...this.state.joinableRooms, 
        ...this.state.joinedRooms]} joinRoom={this.joinRoom}/>
      </div>
    );
  }
}

export default App;
