import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import { RiArrowGoBackLine } from "react-icons/ri"
import { sidebarData } from "./sidebarData"
import './Navbar.css'
import { IconContext } from "react-icons"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className="header">
                    <h1>BMEG Organizer</h1>
                </div>               
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <RiArrowGoBackLine />
                        </Link>
                    </li>
                    {sidebarData.map((spec,index)=> {
                        return (
                            <li key={index} className={spec.className}>
                                <Link to={spec.path}>
                                    {spec.icon}
                                    <span>{spec.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
