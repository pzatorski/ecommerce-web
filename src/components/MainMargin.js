import styled from 'styled-components';

const MainMargin = styled.div`
  margin: 0rem 2rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export default MainMargin;
