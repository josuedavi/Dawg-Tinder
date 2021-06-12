import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import SignIn from './components/Signin';
import {Redirect} from 'react-router';
function App() {
const loggedIn = false;


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>

         <Route path="/">
           <SignIn />
         </Route>

          
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/private">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
