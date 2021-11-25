import logo from './logo.svg';
import './home.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Episode(props) {
    // episode fetch
    const epiFetch = () => {
      fetch(`https://rickandmortyapi.com/api/episode/?name=${props.inputString}`)
    .then(response => {
      if (!response.ok) {
        throw Error('De server ligt er momenteel uit');}
        ;
        return response.json();
    })
    .then(data => {
      const results = data.results;
      let items = [];
        items.push({id: results[0].id, name: results[0].name, episode: results[0].episode, air_date: results[0].air_date, characters: results[0].characters })
      console.log(items)})
      .catch((err) => console.log(err))
     
    }

return (
  <div className="App">
    <header className="App-header">
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={props.episode}
          onSearch={props.handleOnSearch}
          onHover={props.handleOnHover}
          onSelect={props.handleOnSelect}
          onFocus={props.handleOnFocus}
          autoFocus
          formatResult={props.formatResult}
          fuseOptions={{ keys: ["name", "episode"], threshold: 0.1}}
          resultStringKeyName="name"
        />
      </div>
    </header>
    <button onClick={epiFetch} className="homeIntro">
            home
          </button>
  </div>
);
}

export default Episode;