import React from 'react'

function Body(props) {
  return (
    <div> Main Content 
    {props.children}
    </div>
  )
}

export default Body