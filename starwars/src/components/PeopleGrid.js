import React, { useEffect, useState } from "react";
import PeopleCard from './PeopleCard';
import axios from "axios";
export default function PeopleGrid() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.co/api/people/")
        .then(response => {
          console.log(response.data.results);
          setPerson(response.data.results);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    }, []);
    return (
        <div>
            {person.map(char => {
            return (
              <PeopleCard
              key={char.name}
              name={char.name}
              height={char.height}
              mass={char.mass}
              haircolor={char.hair_color}
              skincolor={char.skin_color}
              eyecolor={char.eye_color}
              gender={char.gender}
              birth={char.birth_year}
              />
            );
          })}
          </div>
          )}