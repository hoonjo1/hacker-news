import React from 'react';
import { Loader } from 'Components/Common';
import { useList, useItems } from 'hooks';

const ShowContainer = () => {
  const idArray = useList();
  const { results, loading } = useItems(idArray);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <div>
      {results.map(x => (
        <div key={x.id}>{x.title}</div>
      ))}
    </div>
  );
};

export default ShowContainer;
