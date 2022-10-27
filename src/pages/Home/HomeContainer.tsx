import React from 'react';
import styled from 'styled-components';

const HomeContainer = () => {
  return <Container></Container>;
};

export default HomeContainer;

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
