import React from 'react'

function MenuLink(props) {
  return (
    <header className="header">
      <nav className="navbar">
        <a href={props.url} className="nav-item">{props.linkname}</a>
    </nav>
    </header>
  )
}

export default MenuLink