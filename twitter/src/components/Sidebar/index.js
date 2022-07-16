import React from "react";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Pedro Miguel" nickname="@pedro" />,
            <FollowSuggestion name="Bruno Brito" nickname="@bruno" />,
            <FollowSuggestion name="Caio Sousa" nickname="@caio" />,
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </Container>
  );
}

export default Sidebar;
