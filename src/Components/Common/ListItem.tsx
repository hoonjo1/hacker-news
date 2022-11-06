import React from 'react';
import styled from 'styled-components';
import difference from 'utils/difference';
import { ItemType } from 'types';

interface Props {
  item: ItemType;
  index: number;
}

const ListItem = ({ item, index }: Props) => {
  return (
    <Container>
      <Index>{index + 1}</Index>
      <Wapper>
        <Title>{item.title}</Title>
        <CreateTime>
          <p>{item.descendants} comments</p>
          <p>{difference(item.time)}</p>
        </CreateTime>
      </Wapper>
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
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};
`;

const Wapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Index = styled.span`
  flex-basis: 5.135135vh;
  flex-shrink: 0;
  font-size: 3vh;
  margin-right: 1vh;
  font-weight: 400;
`;

const Title = styled.span`
  display: block;
  flex-grow: 1;
  margin-right: 1.7567567vh;
  font-size: 1.8vh;
  font-weight: 700;
  line-height: 3.222973vh;
`;

const CreateTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ListItem;
