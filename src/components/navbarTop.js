
import React from "react";
import logo from '../images/logos/logo.png';
import profileIcon from "../images/icons/profile-icon.png"
import notificationIcon from "../images/icons/notification-icon.png"
import messageIcon from "../images/icons/message-icon.png"
import { Nav, NavLink,NavItem, NavDropdown } from "react-bootstrap";

const NavbarTop = () => {

    return (
        <>
    <nav className="navbar navbar-expand-sm navbar-light fixed-top" role="navigation" style={{paddingBottom:"5px"}}>
        
        <div className="container-fluid">
        <img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
            <Nav className="ml-auto">
            <NavItem>
                <NavLink to="/search" className="nav-link">
                <img
                            src={notificationIcon}
                            width="20"
                        />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/search" className="nav-link">
                <img
                            src={messageIcon}
                            width="20"
                        />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" className="nav-link">
                   <img
                            src={profileIcon}
                            width="30"
                        />  
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
        </>
    )
}

export default NavbarTop;