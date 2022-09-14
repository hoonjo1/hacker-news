import React from 'react';

import Header from './Header';
import Nav from './Nav';

interface Props {
  children: JSX.Element;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({ children, setIsDark }: Props) => {
  return (
    <>
      <Header setIsDark={setIsDark} />
      {children}
      <Nav />
    </>
  );
};

export default Layout;
