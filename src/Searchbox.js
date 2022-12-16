import React from "react";

const searchbox = ({searchfield,searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots"
        id=""
        onChange={searchChange}
      />
    </div>
  );
};

export default searchbox;