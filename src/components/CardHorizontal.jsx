import React from "react";
export const CardHorizontal = (props) => {
  return (
    <div className="card mb-3 d-flex flex-row">
      <img src={props.imgSrc} alt="" className="card-img align-self-center" />
      <div className="card-body d-flex">
        <div className="align-self-center">
          <h4 className="card-title">{props.title}</h4>
          <div className="card-text">
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
