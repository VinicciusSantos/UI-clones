import React from 'react';

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
 } from './styles';

function Menubar() {
  return (
    <Container>
        <Topside>
            <Logo/>
            
            <MenuButton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </MenuButton>

            <MenuButton>
                <BellIcon/>
                <span>Notificações</span>
            </MenuButton>

            <MenuButton>
                <EmailIcon/>
                <span>Mensagens</span>
            </MenuButton>

            <MenuButton>
                <FavoriteIcon/>
                <span>Favoritados</span>
            </MenuButton>

            <MenuButton className="active">
                <ProfileIcon/>
                <span>Perfil</span>
            </MenuButton>
        </Topside>

        <Botside>
            <Avatar/>
            <ProfileData>
                <strong>Vinicius Guedes</strong>
                <span>@dshdlfkjgh</span>
            </ProfileData>

            <ExitIcon/>
        </Botside>
    </Container>
  );
}

export default Menubar;