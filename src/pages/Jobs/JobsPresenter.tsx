import React from 'react';
import styled from 'styled-components';
import { Card } from 'Components/Common';
import { Type } from 'types';

interface Props {
  results: Type[];
}

const JobPresenter = ({ results }: Props) => {
  return (
    <Container>
      {results.map(item => (
        <Card key={item.id + item.time} />
      ))}
    </Container>
  );
};

export default JobPresenter;

const Container = styled.div``;
