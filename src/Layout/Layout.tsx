import React from 'react';

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
      {children}
      <Nav />
    </>
  );
};

export default Layout;
