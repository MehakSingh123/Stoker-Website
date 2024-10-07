import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const toggleDisplay = () => {
    setIsVisible(!isVisible);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "30px" }} className="logo" />
        <div className="menus">
          <ul>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="http://localhost:3000/"
                onClick={() => handleMenuClick(5)}
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                  Back
                </p>
              </Link>
            </li>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>
            <li className="onmobile">
              <Link
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>
            <li>
              {/* Clickable icon to toggle menu2 */}
              <div className="Menubutton"onClick={toggleDisplay} style={{ cursor: "pointer",fontSize:"25px",marginTop:"15px"}}>
                <i class="fa-solid fa-bars"></i>
                {/* Example icon */}
              </div>

              {/* Icon display will be toggled between none and flex */}
            </li>
          </ul>
        </div>
        <br></br>
        <div
          className="menus menus2"
          style={{ display: isVisible ? "flex" : "none"}}
        >
          <ul>
            
            <div onClick={toggleDisplay} style={{ cursor: "pointer" ,fontSize:"30px"}}>
            <i class="fa-solid fa-xmark"></i>
              {/* Example icon */}
            </div>
           
            <li> 
              <Link
                style={{ textDecoration: "none" }}
                to="http://localhost:3000/"
                onClick={() => handleMenuClick(5)}
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass} style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Back
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass} style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass} style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Holdings
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass} style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Positions
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass} style={{fontSize:"20px",marginBottom:"-10px"}}>
                  Funds
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
