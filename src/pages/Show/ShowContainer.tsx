import React from 'react';
import { Loader, MoreButton } from 'Components/Common';
import { useList, useItems } from 'hooks';

const ShowContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <div>
      {results.map(x => (
        <div key={x.id}>{x.title}</div>
      ))}
      {!isLastPage && <MoreButton handleLoadmore={handleLoadmore} />}
    </div>
  );
};

export default ShowContainer;
