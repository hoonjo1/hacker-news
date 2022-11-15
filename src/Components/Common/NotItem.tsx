import React from 'react';
import styled from 'styled-components';

const NotItem = () => {
  return (
    <Container>
      <Error>Not Comment</Error>
    </Container>
  );
};

const Container = styled.div``;

const Error = styled.span`
  display: block;
  padding: 20px;
  text-align: center;
  opacity: 0.6;
  font-size: 2.7027027vh;
  font-weight: 800;
  color: ${props => props.theme.textColor};
`;

export default NotItem;
