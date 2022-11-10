import React from 'react';
import styled from 'styled-components';

import { LogoIcon, ModeIcon } from 'Components/Icons';
import { setStorage } from 'utils';
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
    <Wapper>
      <HeaderBox>
        <IconBox>
          <Logo />
        </IconBox>
        <IconBox>
          <Mode onClick={handleTheme} />
        </IconBox>
      </HeaderBox>
    </Wapper>
  );
};

export default Header;

const Wapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 8vh;
  border-bottom: 5px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.bgColor};
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1256px;
  height: 100%;
  margin: 0 auto;
  padding: 5px;
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
