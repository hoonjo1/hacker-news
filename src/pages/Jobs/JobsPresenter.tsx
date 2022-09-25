import React from 'react';
import styled from 'styled-components';
import { Card } from 'Components/Common';
import { JobsType } from 'types';

interface Props {
  results: JobsType[];
}

const JobPresenter = ({ results }: Props) => {
  return (
    <Container>
      {results.map((item, index) => (
        <Card key={index} results={item} />
      ))}
    </Container>
  );
};

export default JobPresenter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin: 20px 0px;
`;
