import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faWallet, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { Nav,NavItem,NavLink } from 'react-bootstrap';
import "../navbarBottom.css"
const tabs = [{
    route: "/wallet",
    icon: faWallet,
    label: "Wallet"
  },{
    route: "/search",
    icon: faMoneyBill,
    label: "Cash Advance"
  },{
    route: "/login",
    icon: faMoneyCheck,
    label: "Loan"
  }]
  

const NavbarBottom = () => {
    return (
        <div>
          {/* Top Bar*/}

          {/* Bottom Tab Navigator*/}
          <nav className="navbar fixed-bottom navbar-light" role="navigation">
            <Nav className="w-100">
              <div className=" d-flex flex-row justify-content-around w-100">
                {
                  tabs.map((tab, index) =>(
                    <NavItem key={`tab-${index}`}>
                      <NavLink to={tab.route} className="nav-link" activeClassName="active">
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                          <FontAwesomeIcon size="lg" icon={tab.icon}/>
                          <div>{tab.label}</div>
                        </div>
                      </NavLink>
                    </NavItem>
                  ))
                }
              </div>
            </Nav>
          </nav>
        </div>
      )
    };

export default NavbarBottom;