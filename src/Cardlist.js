import React from "react";
import Card from './Card';

const Cardlist = ({ robots }) => {
  // Create variable to loop
    return (
      <div>
        {robots.map((user, id) => {
          return (
            <Card
              key={id}
              id={robots[id].id}
              name={robots[id].name}
              email={robots[id].email}
            />
          );
        })}
      </div>
    );
}

export default Cardlist;