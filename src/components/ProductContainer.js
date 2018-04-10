import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import BasketIcon from './BasketIcon';

class ProductContainer extends React.Component {
  render() {
    return (
      <Content>
        <Header>
          <Text bold size="xs">
            Laptops
          </Text>
        </Header>
        <ProductWrapper>
          <Product>
            <ProductImage />
            <Description>
              <Text bold size="xs">
                MacBook Pro
              </Text>
              <Text size="xs">£1000</Text>
              <Text>A touch of genius.</Text>
              <IconConatiner>
                <BasketIcon />
              </IconConatiner>
            </Description>
          </Product>
          <Product />
          <Product />
        </ProductWrapper>
        <ProductWrapper>
          <Product />
          <Product />
          <Product />
        </ProductWrapper>
        <ProductWrapper>
          <Product />
          <Product />
          <Product />
        </ProductWrapper>
      </Content>
    );
  }
}

const IconConatiner = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

const Header = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 700px) {
    display: block;
  }
`;

const Description = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ProductImage = styled.div`
  height: 65%;
  width: 100%;
  border-image: 0;
  background-image: url('https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e5c866735dc8ede346b0f7cf9c2bc7&auto=format&fit=crop&w=1630&q=80');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const Product = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 25rem;
  margin: 0.25rem;
  overflow: hidden;
  background-color: #f3f3f3;
`;

export default ProductContainer;
