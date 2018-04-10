import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Menu from '../components/Menu';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainMargin from '../components/MainMargin';
import MainContent from '../components/MainContent';

const JoinUs = () => (
  <div>
    <Menu />
    <MainContent>
      <MainMargin>
        <Content>
          <Login />
          <SignUp />
        </Content>
      </MainMargin>
    </MainContent>
  </div>
);

const Content = styled.div`
  display: flex;
  flex: 1;
  height: 34rem;
  background-color: tomato;
  width: 100%;
`;

export default JoinUs;
