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

  const [episode, setEpisode] = useState([]);
  const [character, setCharacter] = useState([]);
  const [inputString, setInputString] = useState('');

  useEffect(() => {
    // episode autocomplete fetch
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => {
      if (!response.ok) {
        throw Error('De server ligt er momenteel uit, hier wordt aan gewerkt.');}
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
      setEpisode([...items]);})
      .catch((err) => alert(err))
    
     // character autocomplete fetch
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw Error('De server ligt er momenteel uit, hier wordt aan gewerkt.');}
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
        setCharacter([...items]);})
        .catch((err) => alert(err))
    
    }, []);

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

  return (
    <Router>
      <div>
      <Routes>
      <Route path="/episodes" element={<Episode 
      inputString={inputString}
      episode={episode} 
      handleOnSearch={handleOnSearch} 
      handleOnHover={handleOnHover} 
      handleOnSelect={handleOnSelect} 
      handleOnFocus={handleOnFocus} 
      formatResult={formatResult}/>} />

      <Route path="/characters" element={<Character 
      inputString={inputString}
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
