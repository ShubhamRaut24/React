import React from "react";
import Person from "./Person";

// function ListRender() {

//     const names = ["mark", "Charls", "John"]
//     const nameList = names.map(name => <h1>{name}</h1>)
//     return (
//         <div>
//           { nameList }
//         </div>
//     )
// }

function ListRender() {
    const person = [
        {
            id: 1,
            name: "Bruce",
            age: 23,
            skill: "Angular",
        },
        {
            id: 2,
            name: "Clark",
            age: 25,
            skill: "React",
        },
        {
            id: 3,
            name: "Diana",
            age: 35,
            skill: "Vue",
        },
    ];
    const personList = person.map((person) => (
        <Person key={person.id} person={person} />
    ));
    return <div>{personList}</div>;
}

export default ListRender;
