import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const navlinkStyle= ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color : isActive ? 'red' : 'white'
        }
    }
    return(
        <div className='nav'>
            <ul>
                <li>
                     <NavLink to="home" style={navlinkStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="about" style={navlinkStyle}>About</NavLink>
                </li>
                <li>
                    <NavLink to="contact" style={navlinkStyle}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="gallery" style={navlinkStyle}>Gallery</NavLink>
                </li>
            </ul>
            {/* <a href="home">Home </a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
            <a href="gallery">Gallery</a> */} 
        </div>
    )
}
export default Navbar;