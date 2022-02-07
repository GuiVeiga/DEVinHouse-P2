import React from 'react';
import {
  Content,
  H1,
  ImgBox,
  StyledNews,
  P,
} from '../Components/News/News.style';

export const Card = ({ news }) => {
  function handleClick() {
    window.location.href = `${news.article_url}`;
  }

  return (
    <StyledNews>
      <ImgBox>
        <img alt="thumbnail" src={news.thumbnail}></img>
      </ImgBox>
      <Content>
        <H1>{news.title}</H1>
        <P>{news.short_description}</P>
        <button onClick={handleClick}>Read more!</button>
      </Content>
    </StyledNews>
  );
};
