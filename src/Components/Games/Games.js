import { useState, useEffect } from 'react';
import { fetchAPI } from '../../Services/api';
import { Card } from '../../Cards/GamesCard';
import { SearchBar } from '../SearchBar.style';

const Games = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAPI = async () => {
      const games = await fetchAPI('games');
      setList(games);
    };
    getAPI();
  }, []);

  return (
    <div>
      <SearchBar
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Games"
      ></SearchBar>
      {list
        .filter((value) =>
          value.title.toLowerCase().includes(search.toLowerCase()),
        )
        .map((games) => (
          <Card game={games} key={games.id}></Card>
        ))}
    </div>
  );
};

export default Games;
