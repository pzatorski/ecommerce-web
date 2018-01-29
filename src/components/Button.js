import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Text from './Text';

const Button = ({ text, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <Text size="xxs">{text}</Text>
  </ButtonContainer>
);

const ButtonContainer = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 2px;
  border-color: transparent;
  cursor: pointer;
`;

export default withRouter(Button);
