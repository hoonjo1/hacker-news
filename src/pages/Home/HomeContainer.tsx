import React from 'react';
import styled from 'styled-components';

import Card from '../../Components/Card';

const HomeContainer = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
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
