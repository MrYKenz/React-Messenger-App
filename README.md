# React-Messenger-App :mailbox:

React messenger app using the Chatkit API (https://pusher.com/chatkit)

:rocket: [Click For Demo](https://react-messenger-app.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3dd3377a-b99d-4de0-b01d-c00af88540cf/deploy-status)](https://app.netlify.com/sites/react-messenger-app/deploys)

I have used React 16.8 Hook update of useState() to create a functional component for InputMessage.js as opposed to the ES6 Class Syntax extending React.Component with the code below:

```javascript
import { useState } from 'react'
const [state, setState] = useState();
``` 
### Application Diagram 

![components layout](https://github.com/MrYKenz/React-Messenger-App/blob/master/messenger_app_layout.jpg)

**Note:** :warning:
Must have REACT_APP_ before environment variables to use process.env in React

**For Future**: The useEffect() method could be used to replace componentDidMount() in the App component.

```javascript
useEffect();
``` 