// src/Header.js
import React from 'react';
import './Header.css';
import MenuLink from '../MenuLink/MenuLink';
import Logoimage from'../../assets/react.svg'

function Header () {
  return (
    <>
    <MenuLink linkname="Home" url="home"/>
    <MenuLink linkname="About" url="home"/>
    <MenuLink linkname="Conact" url="home"/>
    <MenuLink linkname="Hiii" url="home"/>
    <MenuLink linkname="Byee" url="home"/>
    <MenuLink linkname="SSS" url="home"/>

    <img src="vite.svg" alt="" />
    <img src={Logoimage} alt="" />
    </>
  )
}

export default Header;
