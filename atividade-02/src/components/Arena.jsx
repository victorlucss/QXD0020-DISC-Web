
import React from "react";

const Arena = ({ arena, children, ...props}) => {
  return (
    <div>
      {React.Children.map(children, personage => (
        React.cloneElement(personage, { arena, ...props })
      ))}
    </div>
  )
}

export { Arena };