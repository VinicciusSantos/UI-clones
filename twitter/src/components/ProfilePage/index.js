import React from 'react';

import { Container, Banner, Avatar, ProfileData,  LocationIcon, CakeIcon, Folllowage } from './styles';

function ProfilePage() {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            {/* <EditButton outlined>Editar Perfil</EditButton> */}
            <h1>Vinicius Guedes</h1>
            <h2>@ksdfjhlaksjd</h2>

            <p>Non in dolor sit cillum adipisicing id id.</p>

            <ul>
                <li>
                    <LocationIcon />
                    Juazeiro do Norte - CE
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 20 de setembro de 2003
                </li>
            </ul>

            <Folllowage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672</strong> seguidores
                </span>
            </Folllowage>
        </ProfileData>
    </Container>
  );
}

export default ProfilePage;