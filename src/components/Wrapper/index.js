import React from "react";

function Wrapper(props) {
  return (
    <div className="container">
  <main className="wrapper" {...props} />
  </div>)
}

export default Wrapper;