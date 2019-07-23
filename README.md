# React-Messenger-App :mailbox:

React messenger app using the Chatkit API (https://pusher.com/chatkit)

I have used React 16.8+ Hook update of useState() to create a functional component for InputMessage.js as opposed to the ES6 Class Syntax extending React.Component with the code below:

```javascript
import { useState } from 'react'
const [state, setState] = useState();
``` 
### Application Diagram 

![components layout](https://github.com/MrYKenz/React-Messenger-App/blob/master/messenger_app_layout.jpg)

**For Future**: The useEffect() method could be used to replace componentDidMount() in the App component.

```javascript
useEffect();
``` 