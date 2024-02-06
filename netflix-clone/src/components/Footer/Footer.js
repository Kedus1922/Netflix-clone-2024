import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import  InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <br />
          <InstagramIcon />
          <br />
          <TwitterIcon />
          <br />
          <YouTubeIcon />
          <br />
          <br />
          <br />
        </div>
        <div className='footer_data'>
          <div>
          
            <ul>
              <li>Audio Description</li>
              <br />
              <li>Investor Relations</li>
              <br />
              <li>Privacy</li>
              <br />
              <li>Contact Us</li>
              <br />
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <br />
              <li>Jobs</li>
              <br />
              <li>Legal Notices</li>
              <br />
              <li>Do NOt Sell Or Share My Personal Information</li>
              <br />

            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <br />
              <li>Netflix Shop</li>
              <br />
              <li>Cookie Preferences</li>
              <br />
              <li>Ad Choices</li>
              

            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <br />
              <li>Terms of Use</li>
              <br />
              <li>Corporate Information</li>
              <br />

            </ul>
          </div>
         

         

        </div>
        <div className='service_code'>
            <p>
              Service Code
            </p>

          </div>


          <div className='copy-write'>
            &copy; 1997-2024 Netflix, inc
            <br />
            <br />
            <br />
            <br />

          </div>
      </div>

    </div>



  )
}

export default Footer