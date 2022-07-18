import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CharacterItem } from "@components/CharacterItem";
import { Loading } from "@components/Loading";
import { NotFound } from "@pages/NotFound";
import { Filter } from "@components/Filter";

import "@styles/Home.scss";
import { Searcher } from "@components/Searcher";
import { CharacterList } from "@containers/CharacterList";

/* TODO */

/* use loading state to avoid first call */

const Home = () => {
  const [state, setState] = React.useState({
    loading: true,
    error: false,
    characters: {},
    input: "",
    status: "",
    gender: "",
  });

  const navigate = useNavigate();
  const query = useLocation();

  React.useEffect(async () => {
    try {
      setState((state) => ({
        ...state,
        loading: true,
        error: false,
        input: "",
        status: "",
        gender: "",
      }));

      let res = await fetch(
        `https://rickandmortyapi.com/api/character${query.search}`
      );
      if (!res.ok) throw new Error("Not found");
      let data = await res.json();

      setState((state) => ({
        ...state,
        loading: false,
        characters: data,
      }));
    } catch (error) {
      setState({
        ...state,
        error: true,
        loading: false,
      });
    }
  }, [query]);

  const handleSearch = () => {
    let searchQuery = "";
    if (state.input) {
      searchQuery += `name=${state.input}`;
    }
    if (state.status) {
      searchQuery += `${searchQuery ? "&" : ""}status=${state.status}`;
    }
    if (state.gender) {
      searchQuery += `${searchQuery ? "&" : ""}gender=${state.gender}`;
    }
    if (searchQuery) searchQuery = "?" + searchQuery;
    navigate(searchQuery);
  };

  const handleInput = (event) => {
    setState({
      ...state,
      input: event.target.value,
    });
  };

  const handleStatus = (event) => {
    setState({
      ...state,
      status: event.target.value,
    });
  };

  const handleGender = (event) => {
    setState({
      ...state,
      gender: event.target.value,
    });
  };

  const getPagination = () => {
    let nextPage = "";
    let prevPage = "";
    if (state.characters.info.next) {
      nextPage = new URL(state.characters.info.next).search;
    }
    if (state.characters.info.prev) {
      prevPage = new URL(state.characters.info.next).search;
    }
    return { prevPage: prevPage, nextPage, nextPage };
  };
  return (
    <div className="home">
      {state.loading && <Loading />}
      {!state.loading && state.error && <NotFound />}
      {!state.loading && !state.error && (
        <>
          <h1 className="home__title">Rick and Morty</h1>
          <Searcher
            input={state.input}
            handleInput={handleInput}
            handleSearch={handleSearch}
          >
            <Filter
              gender={state.gender}
              status={state.status}
              handleGender={handleGender}
              handleStatus={handleStatus}
            />
          </Searcher>
          <CharacterList prevPage={0} nextPage={1} pagination={getPagination()}>
            {state.characters.results.map((character) => (
              <CharacterItem
                key={`character-${character.id}`}
                character={character}
              />
            ))}
          </CharacterList>
        </>
      )}
    </div>
  );
};

export { Home };
