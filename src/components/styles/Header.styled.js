import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({bg}) => bg};
  padding: 40px 0;

  h1 {
    color: orange;
  }
  &:hover { background-color: green}
`