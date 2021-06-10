import React from "react";
import "../assets/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import Tinder from '../assets/tinder_logo.png';

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      <div className="box left">

      
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>

      )}
      </div>
      <div className="box center">
        <Link to="/">
          <img className="header__logo"  src={Tinder} alt="tinder icon"/>
        </Link>
      </div>
      <div className="box right">
        <Link to="/chat">
          <IconButton>
            <ForumIcon  className="message__icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
      
    </div>
  );
}



export default Header;