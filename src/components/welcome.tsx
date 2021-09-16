import React from "react";
import {Person} from "../interfaces/person";

/*
const drBart: Person = {name: "Dr. Bart", shirtColor: "purple"}
const ada: Person = {name: "Ada Bart", shirtColor: "yellow"}

const {name, shirtColor} = drBart
console.log(name);
*/

export function Welcome({person}: {person: Person}): JSX.Element {
  return (<>
    <div>Hello and welcome!</div>
    <div>{person.name}</div>
  </>)

}

