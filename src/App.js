import { useState, useEffect } from 'react';
import SearchInput from 'SearchInput';

const api = 'https://kitsu.io/api/edge/';

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}`).then((response) =>
        response.json().then((data) => console.log(data))
      );
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {info.data && <ul></ul>}
    </div>
  );
}

export default App;
