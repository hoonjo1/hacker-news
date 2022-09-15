import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  HomeIcon,
  TopIcon,
  NewIcon,
  ShowIcon,
  AskIcon,
  JobsIcon,
} from '../utils/icons';

const Nav = () => {
  return (
    <NavBox>
      {NAV_ICON.map(route => (
        <IconBox key={route.description} to={route.path}>
          {route.icon}
          <Description>{route.description}</Description>
        </IconBox>
      ))}
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  height: 13vh;
  border-top: 2px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.navColor};
`;

const IconBox = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 10%;
  gap: 5px;

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
    height: 40%;
    width: 100%;
  }
`;

const Description = styled.span`
  color: ${props => props.theme.textColor};
  font-weight: 600;
`;

const NAV_ICON = [
  {
    icon: <HomeIcon />,
    description: 'HOME',
    path: '/',
  },
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
