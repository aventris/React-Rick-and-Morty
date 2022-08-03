import React, { useRef } from "react";

import { Loading } from "@components/Loading";
import { DropdownItem } from "@components/DropdownItem";

import "@styles/DropdownList.scss";

const DropdownList = ({ children, characters }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [filteredCharacters, setFilteredCharacters] = React.useState([]);

  const characterArray = useRef(null);
  const filterStatus = useRef([
    { id: 0, name: "All", active: true },
    { id: 1, name: "Alive", active: false },
    { id: 2, name: "Dead", active: false },
    { id: 3, name: "unknown", active: false },
  ]);
  const filterGender = useRef([
    { id: 0, name: "All", active: true },
    { id: 1, name: "Female", active: false },
    { id: 2, name: "Male", active: false },
    { id: 3, name: "Genderless", active: false },
    { id: 4, name: "unknown", active: false },
  ]);

  React.useEffect(async () => {
    let dataArray = [];
    try {
      let i = 0;
      while (i < characters.length) {
        let res = await fetch(characters[i]);
        if (!res.ok) {
          throw new Error();
        }
        let data = await res.json();
        dataArray.push(data);
        i++;
      }
      characterArray.current = dataArray;
      setFilteredCharacters(dataArray);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  }, []);

  const handleActiveClass = (id, type) => {
    //update filters and clean classes
    if (type === "status")
      filterStatus.current.forEach((el, index) => {
        filterStatus.current[index] = {
          ...filterStatus.current[index],
          active: false,
        };
        if (index === id)
          filterStatus.current[index] = {
            ...filterStatus.current[index],
            active: true,
          };
      });
    else {
      filterGender.current.forEach((el, index) => {
        filterGender.current[index] = {
          ...filterGender.current[index],
          active: false,
        };
        if (index === id)
          filterGender.current[index] = {
            ...filterGender.current[index],
            active: true,
          };
      });
    }
    debugger;
    let filters = { gender: undefined, status: undefined };
    filterGender.current.forEach((el) => {
      if (el.active === true && el.id !== 0) filters.gender = el.name;
    });
    filterStatus.current.forEach((el) => {
      if (el.active === true && el.id !== 0) filters.status = el.name;
    });
    let newArray = [];
    if (filters.status || filters.gender) {
      newArray = characterArray.current.filter((character) => {
        if (filters.status && filters.gender) {
          if (
            character.status === filters.status &&
            character.gender === filters.gender
          )
            return true;
          else return false;
        }
        if (filters.status && !filters.gender) {
          if (character.status == filters.status) return true;
          else return false;
        }
        if (!filters.status && filters.gender) {
          if (character.gender == filters.gender) return true;
          else return false;
        }
      });
    } else {
      newArray = characterArray.current;
    }

    setFilteredCharacters(newArray);
  };
  return (
    <div className="dropdown-list">
      {loading && <Loading />}
      {!loading && !error && (
        <React.Fragment>
          <div className="dropdown-list__filter">
            <ul>
              {filterStatus.current.map((el) => (
                <li
                  className={el.active ? "active" : ""}
                  key={el.id}
                  onClick={() => handleActiveClass(el.id, "status")}
                >
                  {el.name}
                </li>
              ))}
            </ul>
            <ul>
              {filterGender.current.map((el) => (
                <li
                  className={el.active ? "active" : ""}
                  key={el.id + 10}
                  onClick={() => handleActiveClass(el.id, "gender")}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown-list__wrapper">
            {/* {children} */}
            {filteredCharacters.map((character) => (
              <DropdownItem
                key={`dropdown-item-${character.id}`}
                character={character}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export { DropdownList };
