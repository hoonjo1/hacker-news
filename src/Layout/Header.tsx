import React from 'react';
import styled from 'styled-components';

interface Props {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsDark }: Props) => {
  const handleTheme = () => {
    setIsDark(prev => !prev);
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
