import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import StyledLink from './StyledLink';

class CategorySidebar extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Text bold size="xs">
            Category
          </Text>
        </Header>
        <Content>
          <div component>
            <Text bold>Brand:</Text>
            <CategoryContent>
              <StyledLink to="/">
                <Text>Apple</Text>
              </StyledLink>
              <StyledLink to="/">
                <Text>Samsung</Text>
              </StyledLink>
              <StyledLink to="/">
                <Text>LG</Text>
              </StyledLink>
              <StyledLink to="/">
                <Text>Sony</Text>
              </StyledLink>
            </CategoryContent>
          </div>
          <div component>
            <Text bold>Price:</Text>
            <CategoryContent>
              <Text>0-3000</Text>
            </CategoryContent>
          </div>
          <div component>
            <Text bold>Display size:</Text>
            <CategoryContent>
              <Text>10"</Text>
              <Text>11"</Text>
              <Text>13"</Text>
              <Text>15"</Text>
            </CategoryContent>
          </div>
          <div component>
            <Text bold>Capacity:</Text>
            <CategoryContent>
              <Text>256GB</Text>
              <Text>512GB</Text>
              <Text>1TB</Text>
            </CategoryContent>
          </div>
        </Content>
      </div>
    );
  }
}

const Header = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dadada;
  width: 10rem;
`;

const Content = styled.div`
  padding: 1rem 0rem;
`;

const CategoryContent = styled.div`
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

export default CategorySidebar;
