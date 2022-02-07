import styled from 'styled-components';

export const StyledNews = styled.div`
  padding: 20px;
  display: flex;

  &:hover {
    transition: all 0.5s linear;
    border: 3px;
    background-image: linear-gradient(to right, #ececec, #ececec);
  }
`;

export const ImgBox = styled.div`
  width: 150px;
  flex: 0 0 150px;
`;

export const Content = styled.div`
  padding-left: 100px;
`;

export const H1 = styled.h1`
  font-size: 23px;
  color: purple;
`;

export const P = styled.p`
  font-size: 18px;
`;
