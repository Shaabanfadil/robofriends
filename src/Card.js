import React from "react";
//import {robots} from "./robots"

const card = (props) => {
    //Destructure
    const { id, name, email } = props;
    return (     
        <div className="bg-light-green dib br3 pa3 ma3 grow tc bw shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            
            </div>
        </div>
    );
}

export default card;