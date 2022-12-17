import React from "react";
//import ReactDOM from "react-dom/client";


const Card = (props) => {
    const{ id, name, email} = props;
    return (
      <div className="bg-light-green dib br3 pa3 ma3 grow tc bw shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <h1>{name}</h1>
        <p>{email}</p> 
      </div>
    );

}

export default Card ;