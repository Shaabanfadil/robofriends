import React from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";

const App = ()=>{
    return (
        <div>
            <Cardlist robots={robots } />
        </div>
    )
}

export default App;