import { NavLink } from "react-router-dom";
import './header.css'; 
const navLinks = ['Home', 'Popular', 'Battle']

const Nav = () => {  
    return (
      <div className="header"> 
        <ul className="nav">
          {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                      <NavLink end to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>
                          {navLink}
                      </NavLink>
                  </li>
              )
          })}
        </ul>
      </div>
    );
  }
  
  export default Nav;
  