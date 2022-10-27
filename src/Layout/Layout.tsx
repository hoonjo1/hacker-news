import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';

interface Props {
  children: JSX.Element;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({ children, isDark, setIsDark }: Props) => {
  return (
    <Main>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Content>{children}</Content>
      <Nav />
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${props => props.theme.bgColor};
`;

const Content = styled.div`
  max-width: 1256px;
  width: 100%;
  min-height: 79vh;
  margin-top: 8vh;
  padding-bottom: 13vh;
  background-color: ${props => props.theme.bgColor};
`;
