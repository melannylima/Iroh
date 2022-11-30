import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function NavBar() {

    let activeStyle = {
        fontWeight: 'Bold'
    }    

    return (
        <nav>
            <NavLink to="/" style={({isActive})=> isActive ? activeStyle : undefined }>Home</ NavLink>
            <br />
            <NavLink to="/" style={({isActive})=> isActive ? activeStyle : undefined }>Teas</ NavLink>
            <br />
            <img src="tea.png" alt="Teacup"></img>
            <br />
            <NavLink to="login" style={({isActive})=> isActive ? activeStyle : undefined }>Login</ NavLink>
            <br />
            <NavLink to="il-mio" style={({isActive})=> isActive ? activeStyle : undefined }>My Teas</ NavLink>
        </nav>
    )
}

