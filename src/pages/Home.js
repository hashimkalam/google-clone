import React from "react";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Search from "../Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
      <div className="home__body">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          alt="Google Logo"
        />
      </div>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default Home;
