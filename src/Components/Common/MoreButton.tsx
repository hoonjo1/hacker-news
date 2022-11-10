import React from 'react';
import styled from 'styled-components';
import { MoreIcon } from 'Components/Icons';

interface Props {
  handleLoadmore: () => void;
}

const MoreButton = ({ handleLoadmore }: Props) => {
  return (
    <Wapper>
      <IconBox>
        <Icon onClick={handleLoadmore} />
      </IconBox>
    </Wapper>
  );
};

export default MoreButton;

const Wapper = styled.div`
  padding: 2vh 0vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.bgColor};
`;

const IconBox = styled.div`
  width: 3vh;
  margin: 10px auto;
`;

const Icon = styled(MoreIcon)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.accent};
`;
