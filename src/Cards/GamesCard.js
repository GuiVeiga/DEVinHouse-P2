import { useNavigate } from 'react-router';
import {
  Content,
  Genre,
  H1,
  ImgBox,
  P,
  StyledGames,
} from '../Components/Games/Games.style';

export const Card = ({ game }) => {
  let navigate = useNavigate();

  function handleClick() {
    // window.location.href = `game?id=${game.id}`;
    navigate(`/game/${game.id}`);
  }

  return (
    <StyledGames>
      <ImgBox>
        <img alt="thumbnail " src={game.thumbnail}></img>
      </ImgBox>
      <Content>
        <H1>{game.title}</H1>
        <P>{game.short_description}</P>
        <Genre>{game.genre}</Genre>
        <button onClick={handleClick}>Details</button>
      </Content>
    </StyledGames>
  );
};
