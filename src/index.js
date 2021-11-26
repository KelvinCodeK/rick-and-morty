import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Episode from './episode';
import Character from './character';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function Index() {

  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [character, setCharacter] = useState([]);
  const [inputString, setInputString] = useState('');

  useEffect(() => {
    // episode autocomplete fetch
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => {
      if (!response.ok) {
        throw Error('De server ligt er momenteel uit');}
        return response.json();
    })
    .then(data => {
      const results = data.results;
      let items = [];
      let x;
      for(x in results) {
      items.push({id: results[x].id, name: results[x].name, episode: results[x].episode })}
      setEpisodes([...items]);})
      .catch((err) => console.log(err))
    
    // character autocomplete fetch
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw Error('De server ligt er momenteel uit');}
          return response.json();
      })
      .then(data => {
        const results = data.results;
        let items = [];
        let x;
        for(x in results) {
          items.push({id: results[x].id, name: results[x].name})
        }
        setCharacters([...items]);})
        .catch((err) => console.log(err))}, []);

    // reset all
    const resetAll = () => {
      setEpisode([]);
      setCharacter([]);
      setInputString('');
    }

    // autocomplete handlers
    const handleOnSearch = (string, results) => {
      setInputString(string);
      console.log(string, results);
    }
  
    const handleOnHover = (result) => {
      console.log(result);
    }
  
    const handleOnSelect = (item) => {
      setInputString(item.name);
      console.log(item);
    }
  
    const handleOnFocus = () => {
      console.log('Focused');
    }
  
    const formatResult = (item) => {
      return item
    }

    //charfetch
    const charFetch = () => {
      if(!inputString) {
        alert('Make sure to fill in the field first');
      }
      else {
        fetch(`https://rickandmortyapi.com/api/character/?name=${inputString}`)
        .then(response => {
          if (!response.ok) {
            throw Error('De server ligt er momenteel uit');}
            return response.json();
        })
        .then(data => {
          const results = data.results;
          let items = [];
          items.push({id: results[0].id, name: results[0].name, species: results[0].species, gender: results[0].gender, origin: results[0].origin.name, image: results[0].image, episode: results[0].episode})
          setCharacter([...items]);
            document.querySelector('input').value = '';
            console.log(items)})
          .catch((err) => console.log(err))
        }
      }

    //epifetch
    const epiFetch = () => {
      if(!inputString) {
        alert('Make sure to fill in the field first');
      }
      else {
        fetch(`https://rickandmortyapi.com/api/episode/?name=${inputString}`)
        .then(response => {
          if (!response.ok) {
            throw Error('De server ligt er momenteel uit');}
            return response.json();
        })
        .then(data => {
          const results = data.results;
          let items = [];
            items.push({id: results[0].id, name: results[0].name, episode: results[0].episode, air_date: results[0].air_date, characters: results[0].characters });
            setEpisode([...items]);
            document.querySelector('input').value = '';
          console.log(items)})
          .catch((err) => console.log(err))
      }
    }

  return (
    <Router>
      <div>
      <Routes>
      <Route 
      path="/episodes" 
      element={<Episode 
      epiFetch={epiFetch}
      episodes={episodes} 
      episode={episode}
      handleOnSearch={handleOnSearch} 
      handleOnHover={handleOnHover} 
      handleOnSelect={handleOnSelect} 
      handleOnFocus={handleOnFocus} 
      formatResult={formatResult}/>} />
      <Route 
      path="/characters" 
      element={<Character 
      charFetch={charFetch}
      characters={characters} 
      character={character}
      handleOnSearch={handleOnSearch} 
      handleOnHover={handleOnHover} 
      handleOnSelect={handleOnSelect} 
      handleOnFocus={handleOnFocus} 
      formatResult={formatResult}/>} />
      <Route exact path="/" element={
      <Home 
      resetAll={resetAll}
      />} />
      </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
