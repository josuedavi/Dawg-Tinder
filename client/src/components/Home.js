import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import UserService from "../services/user.service";
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


const Home = () => {


  return (
    <div>
    
        <Header />
        <TinderCards />
        <SwipeButtons />
    </div>
  );
};

export default Home;
