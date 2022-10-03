import React from 'react';
import { ItemType } from 'types';

import MoreButton from './MoreButton';
import Loader from './Loader';

interface Props {
  results: ItemType[];
  loading: boolean;
  isLastPage: boolean;
  handleLoadmore: () => void;
}

const List = ({ results, loading, isLastPage, handleLoadmore }: Props) => {
  return loading || results.length === 0 ? (
    <Loader />
  ) : (
    <>
      {results.map(x => (
        <div key={x.id}>{x.title}</div>
      ))}
      {!isLastPage && <MoreButton handleLoadmore={handleLoadmore} />}
    </>
  );
};

export default List;
