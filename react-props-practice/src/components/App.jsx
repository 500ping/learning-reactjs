import React from "react";

import Card from "./Card";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((val, index) => {
          return <Card 
            key={index}
            emoji={val.emoji}
            name={val.name}
            meaning={val.meaning}
          />
        })}
      </dl>
    </div>
  );
}

export default App;
