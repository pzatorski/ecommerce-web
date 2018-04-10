import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import IconSearch from '../components/IconSearch';
import CrossIcon from '../components/CrossIcon';
import MainMargin from '../components/MainMargin';

class InputSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: ''
    };
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      searchValue: value
    });
  };

  render() {
    return (
      <InputContainer>
        <MainMargin>
          <Row>
            <IconSearch />
            <MarginText>
              <Input
                placeholder="Search"
                value={this.state.searchValue}
                onChange={e => this.handleChange(e)}
              />
            </MarginText>
          </Row>
          <CrossIconContainer onClick={e => this.props.close(e)}>
            <CrossIcon />
          </CrossIconContainer>
        </MainMargin>
      </InputContainer>
    );
  }
}

const Input = styled.input`
  padding: ${props =>
    props.leftIconName
      ? '1.25rem 0rem 0.25rem 2rem'
      : '1.25rem 0rem 0.25rem 0rem'};
  background: transparent;
  min-width: 100%;
  font-size: 2rem;
  color: rgb(55, 52, 65);
  outline: none;
  border: 0;
  border-radius: 0;
  border-bottom: ${props =>
    props.underline ? `2px solid ${props.error ? '#BA2C2F' : '#FCFCFC'}` : ''};
  margin: 0rem 0rem 0.75rem 0rem;

  /* Cross browser compatibility */
  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: rgb(55, 52, 65, 0.8);
  }
  -webkit-appearance: none;

  &::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgb(55, 52, 65, 0.8);
    opacity: 1;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgb(55, 52, 65, 0.8);
    opacity: 1;
  }
  &::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(55, 52, 65, 0.8);
  }

  &:focus {
    border: 0;
    border-bottom: ${props =>
      props.underline
        ? `2px solid ${props.error ? '#BA2C2F' : '#FCFCFC'}`
        : ''};
  }
`;

const CrossIconContainer = styled.a`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

const MarginText = styled.div`
  margin-left: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: rgba(252, 209, 148, 0.9);
  z-index: 2;
`;

export default InputSearch;
