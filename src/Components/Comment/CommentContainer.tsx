import React from 'react';
import { useComments } from 'hooks';
import { Loader } from 'Components/Common';
import CommentPresenter from './CommentPresenter';

interface Props {
  comments: number[];
}

const CommentContainer = ({ comments }: Props) => {
  const { results, loading } = useComments(comments);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <CommentPresenter results={results} />
  );
};

export default CommentContainer;
