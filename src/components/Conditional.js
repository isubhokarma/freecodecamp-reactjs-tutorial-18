import React from "react";

function Conditional(props) {
  return (
    <div>
      <h1>Navbar</h1>
      {props.isLoading === true ? <h1>Hello</h1> : <h1>World</h1>}
      <h2>Footer</h2>
    </div>
  );
}

export default Conditional;
