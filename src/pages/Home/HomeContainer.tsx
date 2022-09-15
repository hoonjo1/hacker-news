import React from 'react';
import styled from 'styled-components';

const HomeContainer = () => {
  return <Container>Home</Container>;
};

export default HomeContainer;

const Container = styled.div`
  width: 100%;
  height: 79vh;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
`;
