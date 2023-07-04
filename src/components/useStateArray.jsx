import React, { useState } from "react";
import People from "../data/data";

const UseStateArray = () => {
  const [people, setpeople] = useState(People);

  const handleRemove = (id) => {
    let newUser = people.filter((person) => person.id !== id);
    setpeople(newUser);
    console.log("hii id", id);
  };

  const handleClear = () => {
    setpeople([]);
  };

// const handleAdd = (id) => {
//     const newUser = {
//         id: 6,
//         name: 'tharun',
//     }
//     const newUser1={
//         id:7,
//         name:'sujuka',
//     }
//     const updatedPeople = [...people]
//     updatedPeople.push(newUser)
//     updatedPeople.push(newUser1)

//     setpeople(updatedPeople)
// }
const handleDelete=()=>{
  
}
  return (
    <div className="text-center">
      {people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => handleClear(people.id)} className="my-2">clear</button>
      {/* <button onClick={handleAdd}>Add</button> */}
      <button onClick={handleDelete}>multi remove</button>
    </div>
  );
};

export default UseStateArray;
