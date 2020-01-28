const React = require("react");

const data = [
  {
    name: "Luke Skywalker",
    height: "172",
    hair_color: "blond",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    url: "https://swapi.co/api/people/1/"
  }
];

const componentsMade = [
  "HelloWorld - which is the view you are seeing now!",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it'
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  console.log("hello");

  fetch("https://swapi.co/api/people/1", { mode: "cors" })
    .then(res => res.json())
    .then(data => console.log(data));

  return (
    <div>
      <h1>People</h1>
      <ul>
        <li>
          <h2>{data[0].name}</h2>
          <div className="dl">
            <p>
              <span className="dt">height</span>
              <span className="dd">{data[0].height}</span>
            </p>
            <p>
              <span className="dt">birthday</span>
              <span className="dd">{data[0].birth_year}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

module.exports = HelloWorld;
