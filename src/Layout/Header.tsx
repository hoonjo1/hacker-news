import React from 'react';
import styled from 'styled-components';

import { LogoIcon, ModeIcon } from '../utils/icons';
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
      <IconBox>
        <Logo />
      </IconBox>
      <IconBox>
        <Mode onClick={handleTheme} />
      </IconBox>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  height: 8vh;
  border-bottom: 2px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.bgColor};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
`;

const Logo = styled(LogoIcon)`
  height: 100%;
  width: 100%;
  color: ${props => props.theme.accent};
`;

const Mode = styled(ModeIcon)`
  height: 50%;
  width: 100%;
  color: ${props => props.theme.textColor};
`;
