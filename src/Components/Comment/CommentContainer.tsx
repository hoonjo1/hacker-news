import React from 'react';
import { useComments } from 'hooks';
import CommentPresenter from './CommentPresenter';

interface Props {
  comments: number[];
}

const CommentContainer = ({ comments }: Props) => {
  console.log(comments);
  return <CommentPresenter />;
};

export default CommentContainer;
