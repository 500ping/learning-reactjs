import React from "react";

import Card from "./Card";
import contacts from "../contacts";

function App() {
  let cards = [];
  contacts.forEach((val, index) => {
    cards.push(
      <Card
        key={index}
        name={val.name}
        imgURL={val.imgURL}
        phone={val.phone}
        email={val.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {cards}
    </div>
  );
}

export default App;
