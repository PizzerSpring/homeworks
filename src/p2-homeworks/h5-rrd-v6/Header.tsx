import React from 'react'
import { NavLink } from "react-router-dom";
import {PATH} from "./Pages";
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR}>junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior-plus </NavLink>
        </div>
    )
}

export default Header
