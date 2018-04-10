import React from 'react';
import styled from 'styled-components';

import CategorySidebar from '../components/CategorySidebar';
import ProductContainer from '../components/ProductContainer';
import Menu from '../components/Menu';
import Text from '../components/Text';
import MainMargin from '../components/MainMargin';
import MainContent from '../components/MainContent';

const Products = () => (
  <div>
    <Menu />
    <MainContent>
      <MainMargin>
        <Row>
          <SideBar>
            <CategorySidebar />
          </SideBar>
          <ImageContent>
            <ProductContainer />
          </ImageContent>
        </Row>
      </MainMargin>
    </MainContent>
  </div>
);

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideBar = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem 0rem;
  width: 100%;
`;

const ImageContent = styled.div`
  display: flex;
  flex: 4.5;
  padding: 0.5rem 0.5rem;
  width: 100%;
`;

export default Products;
