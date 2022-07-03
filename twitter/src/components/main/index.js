import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottonMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';
import ProfilePage from '../ProfilePage'

function Main() {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            <ProfileInfo>
                <strong>Vinicius Guedes</strong>
                <span>123 tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage></ProfilePage>

        <BottonMenu>
            <HomeIcon className='active'/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottonMenu>

    </Container>
  );
}

export default Main;