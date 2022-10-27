import React from 'react';
import styled from 'styled-components';
import { ItemType } from 'types';

import ListItem from './ListItem';
import Loader from './Loader';
import MoreButton from './MoreButton';

interface Props {
  results: ItemType[];
  loading: boolean;
  isLastPage: boolean;
  handleLoadmore: () => void;
}

const List = ({ results, loading, isLastPage, handleLoadmore }: Props) => {
  return results.length === 0 ? (
    <Loader />
  ) : (
    <>
      {loading && <Loader />}
      <Container>
        <Title>Check out News</Title>
        {results.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
        {!isLastPage && <MoreButton handleLoadmore={handleLoadmore} />}
      </Container>
    </>
  );
};

export default List;

const Container = styled.div`
  width: 100%;
  padding: 3.5vh 0vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 2.8378378vh;
  line-height: 3.7837837vh;
  letter-spacing: -0.05em;
  flex-basis: 100%;
  flex-grow: 1;
`;
