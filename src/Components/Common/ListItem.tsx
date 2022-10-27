import React from 'react';
import styled from 'styled-components';
import { ItemType } from 'types';

interface Props {
  item: ItemType;
  index: number;
}

const ListItem = ({ item, index }: Props) => {
  return (
    <Container>
      <Index>{index + 1}</Index>
      <Title>{item.title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 3.513514vh;
  padding-left: 2.4324324vh;
  padding-bottom: 1.524324vh;
  padding-right: 2.1621621vh;
  display: flex;
  justify-content: space-between;
`;

const Index = styled.span`
  flex-basis: 5.135135vh;
  flex-shrink: 0;
  font-size: 4.72973vh;
  margin-right: 1.7567567vh;
  font-weight: 400;
`;

const Title = styled.span`
  display: block;
  flex-grow: 1;
  margin-right: 1.7567567vh;
  font-size: 2.4324324vh;
  font-weight: 700;
  line-height: 3.222973vh;
`;

export default ListItem;
