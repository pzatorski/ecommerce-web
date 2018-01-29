import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import MainContent from './MainContent';
import Logo from './Logo';
import IconSearch from './IconSearch';
import StyledLink from './StyledLink';
import MainMargin from './MainMargin';
import CategoryTab from './CategoryTab';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true
    };
  }

  handleShow(e) {
    e.preventDefault();
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <MainContent>
          <Row>
            <MenuTab>
              <MenuSlide onClick={this.handleShow.bind(this)}>
                <StyledText isOpen={this.state.isOpen}>
                  <Text bold>SHOP</Text>
                </StyledText>
              </MenuSlide>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/explore">
                <StyledText>
                  <Text bold>EXPLORE</Text>
                </StyledText>
              </StyledLink>
            </MenuTab>
            <MenuTab>
              <Text bold size="s">
                Paper Plane
              </Text>
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/about">
                <StyledText>
                  <Text bold>ABOUT</Text>
                </StyledText>
              </StyledLink>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/join-us">
                <StyledText>
                  <Text bold>JOIN US</Text>
                </StyledText>
              </StyledLink>
            </MenuTab>
          </Row>
          <ShopPanel>
            <ShopPanelContainer>
              <IconSearch />
            </ShopPanelContainer>
            <ShopPanelContainer>
              <StyledLink to="/my-cart">
                <Text bold>MY CART</Text>
              </StyledLink>
            </ShopPanelContainer>
          </ShopPanel>
          {this.state.isOpen && (
            <MainMargin>
              <CategoryTab />
            </MainMargin>
          )}
        </MainContent>
      </div>
    );
  }
}

const MenuSlide = styled.a`
  cursor: pointer;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.75rem;
`;

const StyledText = styled.div`
  padding: 0.5rem 0rem;
  border-bottom: ${({ isOpen }) =>
    isOpen ? '4px solid #FAAC3B' : '4px solid transparent'};

  &:hover {
    border-bottom: 4px solid #faac3b;
  }
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
