import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import MainContent from '../components/MainContent';
import MainMargin from '../components/MainMargin';
import CrossIcon from '../components/CrossIcon';

const MyCard = () => (
  <div>
    <MainContent>
      <MainMargin>
        <Content>
          <Column>
            <Header>
              <Text size="m">Review the order</Text>
            </Header>
            <div
              style={{
                width: '30rem',
                borderBottom: '2px solid #d3d3d3'
              }}
            >
              <StyledText>
                <Product>
                  <ProductImage />
                  <ItemBlock>
                    <Text size="xs">MacBook Pro</Text>
                    <Text bold size="xs">
                      Price: £1000
                    </Text>
                  </ItemBlock>
                  <IconCrossContainer>
                    <CrossIcon />
                  </IconCrossContainer>
                </Product>
              </StyledText>
            </div>
            <div
              style={{
                width: '30rem',
                borderBottom: '2px solid #d3d3d3'
              }}
            >
              <StyledText>
                <Text>Total: £1000</Text>
              </StyledText>
            </div>
          </Column>
        </Content>
      </MainMargin>
    </MainContent>
  </div>
);

const ItemBlock = styled.div`
  padding: 1.5rem;
  width: 100%;
`;

const IconCrossContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ProductImage = styled.div`
  height: 10rem;
  width: 20rem;
  border-image: 0;
  background-image: url('https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e5c866735dc8ede346b0f7cf9c2bc7&auto=format&fit=crop&w=1630&q=80');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const Product = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  background-color: #f3f3f3;
`;

const StyledText = styled.div`
  padding: 1rem 0em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0rem;
`;

const Header = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  justify-content: center;
  border-bottom: 2px solid #d3d3d3;
`;

export default MyCard;
