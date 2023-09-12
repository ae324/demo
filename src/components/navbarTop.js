
import React from "react";
import logo from '../images/logos/logo.png';
import profileIcon from "../images/icons/profile-icon.png"
import notificationIcon from "../images/icons/notification-icon.png"
import messageIcon from "../images/icons/message-icon.png"
import '../App.css';
import { Form, Navbar, Container, Button, NavItem } from "react-bootstrap";
import NavbarBottom from "./navbarBottom";

const NavbarTop = () => {

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/main"><img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                
                </Container>
                <Container>
                <NavItem className="ml-auto ">
                        <img
                            src={notificationIcon}
                            width="20"
                        />               
                    </NavItem>
                    <NavItem className="ml-auto ">
                        <img
                            src={messageIcon}
                            width="20"

                        />                </NavItem>
                    <NavItem className="ml-auto ">
                        <img
                            src={profileIcon}
                            width="20"

                        />
                    </NavItem>
                </Container>
            </Navbar>
        <NavbarBottom></NavbarBottom>

        </>
    )
}

export default NavbarTop;