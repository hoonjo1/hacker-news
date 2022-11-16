import React from 'react';
import styled from 'styled-components';

const Error = ({ message }: { message: string }) => {
  return <Container>{message}</Container>;
};

export default Error;

const Container = styled.span`
  display: block;
  text-align: center;
  opacity: 0.6;
  font-size: 2.7027027vh;
  padding: 20px;
`;
