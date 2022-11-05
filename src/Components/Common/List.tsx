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
  display: flex;
  flex-direction: column;
`;
