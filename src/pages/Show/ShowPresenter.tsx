import React from 'react';
import styled from 'styled-components';
import { ItemType } from 'types';

import { List } from 'Components/Common';

interface Props {
  results: ItemType[];
  loading: boolean;
  isLastPage: boolean;
  handleLoadmore: () => void;
}
const ShowPresenter = ({
  results,
  loading,
  isLastPage,
  handleLoadmore,
}: Props) => {
  return (
    <Container>
      <List
        results={results}
        loading={loading}
        isLastPage={isLastPage}
        handleLoadmore={handleLoadmore}
      />
    </Container>
  );
};

export default ShowPresenter;

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
