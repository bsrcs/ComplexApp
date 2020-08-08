import React, { useEffect } from "react"

// set home component width to be wide
// set "about-us" & "terms" page to be narrow 
function Container(props) {
  return (
    <div className={"container py-md-5 " + (props.wide ? '' : 'container--narrow')}>
      {props.children}
    </div>
  )
}

export default Container;