import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  TopIcon,
  NewIcon,
  ShowIcon,
  AskIcon,
  JobsIcon,
} from 'Components/Icons';

const Nav = () => {
  return (
    <Wapper>
      <NavBox>
        {NAV_DATA.map(route => (
          <IconBox key={route.description} to={route.path}>
            {route.icon}
            <Description>{route.description}</Description>
          </IconBox>
        ))}
      </NavBox>
    </Wapper>
  );
};

export default Nav;

const Wapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 100%;
  height: 13vh;
  border-top: 5px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.navColor};
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1256px;
  height: 100%;
  margin: 0 auto;
`;

const IconBox = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 10%;
  gap: 8px;

  color: ${props => props.theme.textColor};

  &:link {
    transition: 0.3s;
  }
  &:hover {
    color: ${props => props.theme.accent};
  }
  &.active {
    color: ${props => props.theme.accent};
  }

  svg {
    height: 30%;
    width: 100%;
  }
`;

const Description = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 400;
`;

const NAV_DATA = [
  // {
  //   icon: <HomeIcon />,
  //   description: 'HOME',
  //   path: '/',
  // },
  {
    icon: <TopIcon />,
    description: 'TOP',
    path: '/top',
  },
  {
    icon: <NewIcon />,
    description: 'NEW',
    path: '/new',
  },
  {
    icon: <ShowIcon />,
    description: 'SHOW',
    path: '/show',
  },
  {
    icon: <AskIcon />,
    description: 'ASK',
    path: '/ask',
  },
  {
    icon: <JobsIcon />,
    description: 'JOBS',
    path: '/jobs',
  },
];
