import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Header from './components/Header';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SignIn from "./components/Signin";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import TinderCard from './components/TinderCards';
import ChatScreen from './components/ChatScreen';

import Chats from './components/Chats';
const App = (props) => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(AuthService.getCurrentUser());
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
 
    

     <Router>
        <Route>
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
        <Route path="/"> 
        </Route >
          
        <Route path="/private">

        </Route>
      </ Router>

      );
};

export default App;
