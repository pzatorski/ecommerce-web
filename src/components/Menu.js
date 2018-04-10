import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import LazyLoad from 'react-lazyload';

import Text from './Text';
import MainContent from './MainContent';
import Logo from './Logo';
import IconSearch from './IconSearch';
import StyledLink from './StyledLink';
import CategoryTab from './CategoryTab';

import Laptop from '../assets/images/ben-kolde-403278.jpg';
import Phone from '../assets/images/rahul-chakraborty-460018.jpg';
import Tablet from '../assets/images/dose-media-337489.jpg';
import TV from '../assets/images/julian-o-hayon-265569.jpg';
import Apple from '../assets/images/Apple_gray_logo.png';
import Samsung from '../assets/images/samsung.png';
import LG from '../assets/images/LG-Symbol.jpg';
import Sony from '../assets/images/sony.png';

import InputSearch from './InputSearch';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      isShopOpen: false,
      isExploreOpen: false,
      openSearch: false
    };
  }

  handleShowShop(e) {
    e.preventDefault();
    return this.setState({
      isShopOpen: !this.state.isShopOpen,
      isExploreOpen: false
    });
  }

  handleShowExplore(e) {
    e.preventDefault();
    return this.setState({
      isExploreOpen: !this.state.isExploreOpen,
      isShopOpen: false
    });
  }

  handleOpenSearch(e) {
    e.preventDefault();
    return this.setState({ openSearch: true });
  }

  handleCloseSearch(e) {
    e.preventDefault();
    return this.setState({ openSearch: false });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <MainContent>
          {this.state.openSearch ? (
            <InputSearch close={this.handleCloseSearch.bind(this)} />
          ) : null}
          <Row>
            <MenuTab>
              <MenuSlide onClick={this.handleShowShop.bind(this)}>
                <StyledText isShopOpen={this.state.isShopOpen}>
                  <Text bold>SHOP</Text>
                </StyledText>
              </MenuSlide>
            </MenuTab>
            <MenuTab>
              <MenuSlide onClick={this.handleShowExplore.bind(this)}>
                <StyledText isShopOpen={this.state.isExploreOpen}>
                  <Text bold>EXPLORE</Text>
                </StyledText>
              </MenuSlide>
            </MenuTab>
            <MenuTab>
              <StyledLink to="/">
                <Text bold size="s">
                  Paper Plane
                </Text>
              </StyledLink>
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
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.handleOpenSearch.bind(this)}
              >
                <IconSearch />
              </a>
            </ShopPanelContainer>
            <ShopPanelContainer>
              <StyledLink to="/my-cart">
                <Text bold>MY CART</Text>
              </StyledLink>
            </ShopPanelContainer>
          </ShopPanel>
          {this.state.isShopOpen && (
            <Motion
              defaultStyle={{ o: 0 }}
              style={{
                o: spring(1, { stiffness: 90 })
              }}
            >
              {({ y, o, h }) => (
                <LazyLoad height={200} offset={200}>
                  <Categories
                    style={{
                      opacity: `${o}`
                    }}
                  >
                    <CategoryTab
                      text="Laptops"
                      imageUrl={Laptop}
                      link="/products"
                    />
                    <CategoryTab
                      text="Phones"
                      imageUrl={Phone}
                      link="/products"
                    />
                    <CategoryTab
                      text="Tablets"
                      imageUrl={Tablet}
                      link="/products"
                    />
                    <CategoryTab text="TV's" imageUrl={TV} link="/products" />
                  </Categories>
                </LazyLoad>
              )}
            </Motion>
          )}
          {this.state.isExploreOpen && (
            <Motion
              defaultStyle={{ o: 0 }}
              style={{
                o: spring(1, { stiffness: 90 })
              }}
            >
              {({ y, o, h }) => (
                <LazyLoad height={200} offset={200}>
                  <Categories
                    style={{
                      opacity: `${o}`
                    }}
                  >
                    <CategoryTab
                      text="Apple"
                      imageUrl={Apple}
                      link="/products"
                    />
                    <CategoryTab
                      text="Samsung"
                      imageUrl={Samsung}
                      link="/products"
                    />
                    <CategoryTab text="LG" imageUrl={LG} link="/products" />
                    <CategoryTab text="Sony" imageUrl={Sony} link="/products" />
                  </Categories>
                </LazyLoad>
              )}
            </Motion>
          )}
        </MainContent>
      </div>
    );
  }
}

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  border-bottom: ${({ isShopOpen, isExploreOpen }) =>
    isShopOpen || isExploreOpen
      ? '4px solid #FAAC3B'
      : '4px solid transparent'};

  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;

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
  height: 6rem;
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
