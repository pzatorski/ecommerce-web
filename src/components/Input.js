import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import IconSearch from '../components/IconSearch';
import CrossIcon from '../components/CrossIcon';
import MainMargin from '../components/MainMargin';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.input
    };
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div>
        <StyledInput
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
          underline={this.props.underline}
          type={this.props.type}
        />
      </div>
    );
  }
}

const StyledInput = styled.input`
  padding: ${props =>
    props.leftIconName
      ? '1.25rem 0rem 0.25rem 2rem'
      : '1.25rem 0rem 0.25rem 0rem'};
  background: transparent;
  min-width: 100%;
  font-size: 1.5rem;
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
    color: white;
  }
  -webkit-appearance: none;

  &::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: white;
    opacity: 1;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: white;
    opacity: 1;
  }
  &::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  &:focus {
    border: 0;
    border-bottom: ${props =>
      props.underline
        ? `2px solid ${props.error ? '#BA2C2F' : '#FCFCFC'}`
        : ''};
  }
`;

export default Input;
