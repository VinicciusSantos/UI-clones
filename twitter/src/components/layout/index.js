import React from 'react';
import { Container, Wrapper } from './styles'
import Main from '../main';

function Layout() {
  return (
    <Container>
        <Wrapper>
            {/* <Menubar /> */}
            <Main />
            {/* <Sidebar /> */}
        </Wrapper>
    </Container>
  );
}

export default Layout;