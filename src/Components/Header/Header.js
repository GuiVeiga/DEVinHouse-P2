import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderH1 } from './Header.style';

const Header = () => {
  return (
    <div>
      <HeaderH1>
        <Link to="/">News</Link> | <Link to="games">Games</Link>
      </HeaderH1>
    </div>
  );
};

export default Header;
