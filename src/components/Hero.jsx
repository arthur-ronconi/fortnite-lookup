import React from "react";
export const Hero = (props) => {
  return (
    <header className={`jumbotron text-left section ${props.className}`}>
      <div className="container">
        <div className="mt-5">
          <div className="row">
            <div className="col">
              <h1 className="display-4 main-heading">{props.title}</h1>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
