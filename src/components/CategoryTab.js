import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from './Text';

const CategoryTab = ({ text, imageUrl, link }) => (
  <div style={{ display: 'flex' }}>
    <Category to={link || ''}>
      <CategoryImage imageUrl={imageUrl} />
      <TextContainer>
        <Text size="xxs">{text}</Text>
      </TextContainer>
    </Category>
  </div>
);

const Category = styled(Link)`
  text-decoration: none;
  position: relative;
  margin: 1rem 1rem 3rem 1rem;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CategoryImage = styled.div`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: #eeeeee;
  background-image: ${({ imageUrl }) => imageUrl && `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default CategoryTab;
