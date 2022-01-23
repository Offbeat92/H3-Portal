import React from 'react'
import {
  Link
} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
      <div id='header'>
        <div id='navbar'>
          <ul>
            <li><img src='https://yt3.ggpht.com/ytc/AKedOLQ7yNgtuMI57nCVDgm6Ifwdyavm5HLbS7h69co8tw=s900-c-k-c0x00ffffff-no-rj' /></li>
            <li><a href="/">Home</a></li>
            <li><Link to="videofetch">H3H3</Link></li>
            <li><Link to="crew">Crew</Link></li>
          </ul>
        </div>

      <div class="hero-text">
        <h1>The H3H3 Portal</h1>
      </div>
      </div>
        
    )
}

export default Header;
