import React from "react";
import Cards from "./components/Cards";
const App = () => {
  return (
    <div>
      <section className="grid grid-cols-1 ">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </section>
    </div>
  );
};

export default App;
