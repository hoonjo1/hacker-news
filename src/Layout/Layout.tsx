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
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Content>{children}</Content>
      <Nav />
    </>
  );
};

export default Layout;

const Content = styled.div`
  width: 100%;
  margin-top: 8vh;
  padding-bottom: 13vh;
  position: absolute;
`;
