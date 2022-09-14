import React from 'react';
import styled from 'styled-components';

import { setStorage } from '../utils/storage';
interface Props {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isDark, setIsDark }: Props) => {
  const handleTheme = () => {
    setIsDark(prev => !prev);
    setStorage('isDarkMode', !isDark);
  };

  return (
    <HeaderBox>
      <div onClick={handleTheme}>toggle</div>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
`;
