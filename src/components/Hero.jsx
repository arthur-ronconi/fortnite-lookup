import React from "react";
export const Hero = (props) => {
  return (
    <header className="jumbotron text-left section">
      <div className="container">
        <h1 className="display-4 main-heading">{props.title}</h1>
        {props.children}
      </div>
    </header>
  );
};
