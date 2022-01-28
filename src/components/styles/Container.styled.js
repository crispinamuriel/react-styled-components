import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 50vh;
  background-color: ${({theme})=> theme.colors.header};
`