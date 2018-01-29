import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import MainContent from './MainContent';
import Logo from './Logo';
import StyledLink from './StyledLink';

class Menu extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <MainContent>
          <Row>
            <MenuTab>
              <Text bold>SHOP</Text>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/explore">
                <Text bold>EXPLORE</Text>
              </StyledLink>
            </MenuTab>
            <MenuTab>
              <Text bold size="xs">
                Paper Plane
              </Text>
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/about">
                <Text bold>ABOUT</Text>
              </StyledLink>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/join-us">
                <Text bold>JOIN US</Text>
              </StyledLink>
            </MenuTab>
          </Row>
          <ShopPanel>
            <ShopPanelContainer>
              <Text bold>Search</Text>
            </ShopPanelContainer>
            <ShopPanelContainer>
              <StyledLink to="/my-cart">
                <Text bold>MY CART</Text>
              </StyledLink>
            </ShopPanelContainer>
          </ShopPanel>
        </MainContent>
      </div>
    );
  }
}

const LogoContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`;

const ShopPanelContainer = styled.div`
  margin: 0rem 1.5rem;
`;

const ShopPanel = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  padding-top: 3rem;
  margin: 0rem 12rem;
`;

const MenuTab = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export default Menu;
