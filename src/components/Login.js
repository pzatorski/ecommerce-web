import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Input from './Input';
import Button from './Button';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Text color="white" size="m">
            Login
          </Text>
        </Header>
        <InputsBlock>
          <NameContainer>
            <div style={{ marginRight: '1rem' }}>
              <Input underline={true} placeholder="First name" input="" />
            </div>
            <Input underline={true} placeholder="Last name" input="" />
          </NameContainer>
          <EmailContainer>
            <Input underline={true} placeholder="Email" input="" />
          </EmailContainer>
          <PasswordContainer>
            <Input
              underline={true}
              type="password"
              placeholder="Password"
              input=""
            />
          </PasswordContainer>
        </InputsBlock>
        <StyledButton>
          <Button text="Submit" />
        </StyledButton>
      </Container>
    );
  }
}

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const EmailContainer = styled.div`
  padding: 1rem 2rem;
`;

const PasswordContainer = styled.div`
  padding: 1rem 2rem;
`;

const NameContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const InputsBlock = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 1rem 0rem;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  border-right: 0.5px solid #d6d6d6;
`;

export default Login;
