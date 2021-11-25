import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Home from './home';
//  GEWOON fetch aan de hand van de string
// afbeelding van een portal, waar rick n morty met een opacity uit komen gelopen
// gebruik veel van de groene portal kleur. ook met neon effect uit YT vid
// perspective op de portal en laat hem gloeien wanneer rick er uit komt (border left)
// homepage 2 containers, van flex row naar flex column op mobiel
// alle afleveringen waarin een karakter speelt onder / naast het karakter mappen

export default function Index() {

  // alleen een state voor de string. niet voor de objecten

  const epi = [];
  const [episode, setEpisode] = useState([]);
  
  const [episodeString, setEpisodeString] = useState('');

  useEffect(() => {
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
      setEpisode([...items]);
    console.log(episode)}
    ).catch((err) => alert(err))}, []);

    const handleOnSearch = (string, results) => {
      setEpisodeString(string);
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      setEpisodeString(item.name);
      console.log(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    const formatResult = (item) => {
      return item
    }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={episode}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["name", "episode"], threshold: 0.1}}
            resultStringKeyName="name"
          />
        </div>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
