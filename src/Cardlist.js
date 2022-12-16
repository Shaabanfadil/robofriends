import React from "react";
import Card from './Card';

    //Destructure robots props
    const Cardlist = ({ robots }) => {
    // loop through Object Arrays
        return (
          <div>
            {robots.map((user, id) => {
              return (
                //for looping: Must apply key prop to each child in array
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
};

export default Cardlist;