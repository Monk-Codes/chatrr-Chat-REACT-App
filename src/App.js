import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

const App =()=>{
    return(
        <ChatEngine
        height="100vh"
        projectID="b7c818db-7dc5-4217-9683-412fc2061290"
        userName="monk-codes"
        userSecret="pratik12"
        renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        />
    )
}
export default App