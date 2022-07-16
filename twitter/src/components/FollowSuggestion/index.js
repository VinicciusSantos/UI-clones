import React from "react";

import { Container, Avatar, Info, FollowButton } from "./styles";

function FollowSuggestion(Props) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{Props.name}</strong>
          <span>{Props.nickname}</span>
        </Info>
      </div>
      
      <FollowButton>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;
