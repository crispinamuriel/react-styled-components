import React from 'react';
import { StyledHeader } from "./styles/Header.styled";
import { Container } from './styles/Container.styled';

export default function Header() {
  return (
    <StyledHeader bg='red'>
      <Container>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  )
}
