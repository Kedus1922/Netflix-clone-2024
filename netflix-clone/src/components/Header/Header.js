import React, { useEffect, useState } from 'react'
import "./Header.css"
import NetflixLogo from "../../assets/images/netflix_PNG11.png"
import Accountlogo from "../../assets/images/Kids.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {

  //   const [Show, handleShow] = useState(false)
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);

  //     } else handleShow(false)
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);




  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="120" height=""/></li>
            
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>MyList</li>
              <li>Browse by Languages</li>



          </ul>

        </div>
        <div className='header_right'>
          <ul>
         
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><img src={Accountlogo} alt="" width="35" height=""/></li>
            <li><ArrowDropDownIcon /></li>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Header