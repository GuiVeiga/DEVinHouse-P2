import { useState, useEffect } from 'react';
import { fetchAPI } from '../../Services/api';
import { Card } from '../../Cards/NewsCard';
import { SearchBar } from '../SearchBar.style';

const News = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAPI = async () => {
      const news = await fetchAPI('latestnews');
      setList(news);
    };
    getAPI();
  }, []);

  return (
    <div>
      <SearchBar
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search News"
      ></SearchBar>
      {list
        .filter((value) =>
          value.title.toLowerCase().includes(search.toLowerCase()),
        )
        .map((news) => (
          <Card news={news} key={news.id}></Card>
        ))}
    </div>
  );
};

export default News;
