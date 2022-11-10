interface ItemType {
  id: number;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  dead: boolean;
  parent: string;
  poll: string;
  kids: number;
  url: string;
  score: number;
  title: string;
  parts: string;
  descendants: number;
  text: string;
}

export default ItemType;
