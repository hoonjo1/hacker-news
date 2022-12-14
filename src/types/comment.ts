interface CommentType {
  by: string;
  depth: number;
  id: number;
  kids?: [CommentType];
  parent: number;
  text: string;
  time: number;
  type: string;
  deleted: string;
}

export default CommentType;
