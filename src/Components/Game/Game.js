import { useState, useEffect } from 'react';
import { fetchAPI } from '../../Services/api';
import { Card } from '../../Cards/GameCard';
import { useParams } from 'react-router-dom';
import Comments from '../../Forms/Comments';

const Game = () => {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const game = await fetchAPI(`game?id=${id}`);
      setGame(game);
    };
    getAPI();
  }, [id]);

  return (
    <div>
      <Card game={game} key={game.id}></Card>
      <Comments />
    </div>
  );
};

export default Game;
