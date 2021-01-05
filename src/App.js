import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [dogs, setDogs] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>{dogs.length} Party Attendees!</h1>
        <List dogs={dogs} />
        <button onClick={() => setDogs([])}>Clear list</button>
      </section>
    </main>
  );
}

export default App;
