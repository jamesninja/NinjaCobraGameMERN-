
// import {Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import image from './IMAGE/unicorn.webp';
import "./NavBar.css";


function NavBar(){
    return(
        <nav className='to-Bar'>
         <NavLink className="nav-link" to="/"><img src={image} alt="Logo" /></NavLink>
            <div className='clik-Bar'>       
                <NavLink className='upload' to="/upload">Upload</NavLink>
                <NavLink className='gallery' to="/gallery">Gallery</NavLink>
            </div>
        </nav>
    )
}
  
export default NavBar;
  



