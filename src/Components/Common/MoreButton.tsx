import React from 'react';
import styled from 'styled-components';
import { MoreIcon } from 'utils/icons';

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.bgColor};
`;

const IconBox = styled.div`
  height: 100%;
  width: 3%;
  margin: 10px auto;
`;

const Icon = styled(MoreIcon)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.accent};
`;
