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

//  gewoon fetch aan de hand van de string
// afbeelding van een portal, waar rick n morty met een opacity uit komen gelopen
// gebruik veel van de groene portal kleur. ook met neon effect uit YT vid
// perspective op de portal en laat hem gloeien wanneer rick er uit komt (border left)
// homepage 2 containers, van flex row naar flex column op mobiel
// alle afleveringen waarin een karakter speelt onder / naast het karakter mappen
// filter op naam van epi en char om de data met een query te ontvangen?
// 2 paginas, vanuit allebei kan je zoeken. zet op die pagina zelf een knop die obv de state string een fetch doet.

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
        ;
        return response.json();
    })
    .then(data => {
      const results = data.results;
      let items = [];
      let x;
      for(x in results) {
        items.push({id: results[x].id, name: results[x].name, episode: results[x].episode })
      }
      setEpisodes([...items]);})
      .catch((err) => console.log(err))
    
     // character autocomplete fetch
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw Error('De server ligt er momenteel uit');}
          ;
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
        .catch((err) => console.log(err))
    
    }, []);

    // autocomplete handlers

    const handleOnSearch = (string, results) => {
      setInputString(string);
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      setInputString(item.name);
      console.log(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    const formatResult = (item) => {
      return item
    }

    //charfetch

    const charFetch = () => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${inputString}`)
    .then(response => {
      if (!response.ok) {
        throw Error('De server ligt er momenteel uit');}
        ;
        return response.json();
    })
    .then(data => {
      const results = data.results;
      let items = [];
  
        items.push({id: results[0].id, name: results[0].name, species: results[0].species, gender: results[0].gender, origina: results[0].origin.name, image: results[0].image})
        setCharacter([...items])
      console.log(items)})
      .catch((err) => console.log(err))
    }

    //epifetch

    const epiFetch = () => {
      fetch(`https://rickandmortyapi.com/api/episode/?name=${inputString}`)
    .then(response => {
      if (!response.ok) {
        throw Error('De server ligt er momenteel uit');}
        ;
        return response.json();
    })
    .then(data => {
      const results = data.results;
      let items = [];
        items.push({id: results[0].id, name: results[0].name, episode: results[0].episode, air_date: results[0].air_date, characters: results[0].characters });
        setEpisode([...items]);
      console.log(items)})
      .catch((err) => console.log(err))
     
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
      
      <Route exact path="/" element={<Home />} />
        
      </Routes>
      </div>
    </Router>
  );
}//

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
