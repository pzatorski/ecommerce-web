import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import LandingImage from '../assets/images/jeshoots-com-219386.jpg';
import Text from '../components/Text';
import MainMargin from '../components/MainMargin';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div style={{ position: 'relative', height: '100%' }}>
          <HeaderImage>
            <HeaderText>
              <Text bold center size="l" color="#fff">
                About Us
              </Text>
            </HeaderText>
          </HeaderImage>
        </div>
        <MainMargin>
          <TextContent>
            {/* TODO: Add correct text about the product and company  */}
            <Text center size="s">
              With Paper Plane, it’s easy to find the right music for every
              moment – on your phone, your computer, your tablet and more. There
              are millions of tracks on Paper Plane. So whether you’re working
              out, partying or relaxing, the right music is always at your
              fingertips. Choose what you want to listen to, or let Paper Plane
              surprise you. You can also browse through the music collections of
              friends, artists and celebrities, or create a radio station and
              just sit back. Soundtrack your life with Paper Plane. Subscribe or
              listen for free.
            </Text>
          </TextContent>
        </MainMargin>
      </div>
    );
  }
}

const TextContent = styled.div`
  padding: 3rem 1rem;
`;

const AboutUsContent = styled.div`
  display: flex;
`;

const HeaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HeaderImage = styled.div`
  display: flex;
  flex: 1;
  height: 32rem;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=687a32748561c1902aca06a66f247776&auto=format&fit=crop&w=2522&q=80');
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-repeat: no-repeat;
`;

export default withRouter(Header);
