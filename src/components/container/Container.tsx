import React from "react";
import "./Container.css"

// TODO: allow for themes
const Container = (props: any) => {
  // eslint-disable-next-line
  const {children, ...rest} = props
  return (
    <div id="main">
      {children}
    </div>
  )
}

export default Container
