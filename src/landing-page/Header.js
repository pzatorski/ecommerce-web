import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import LandingImage from '../assets/images/jeshoots-com-219386.jpg';
import Text from '../components/Text';
import Button from '../components/Button';

class Header extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <HeaderImage>
          <HeaderText>
            <TextContainer>
              <Text center size="m" color="#fff">
                Give the gift
              </Text>
              <Text center size="m" color="#fff">
                of good design
              </Text>
            </TextContainer>
            <Button
              text="SHOP NOW"
              onClick={() => this.props.history.push('/about')}
            />
          </HeaderText>
        </HeaderImage>
      </div>
    );
  }
}

const TextContainer = styled.div`
  margin-bottom: 2rem;
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const HeaderImage = styled.div`
  display: flex;
  flex: 1;
  height: 32rem;
  overflow: hidden;
  background-image: url(${LandingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default withRouter(Header);
