import React from 'react';

import {
    Container,
    Item,
    Title,
} from './styles';

function List(Props) {
  return (
    <Container>
        <Item>
            <Title>{Props.title}</Title>
        </Item>

        {Props.elements.map((element, index) => (
            <Item key={index}>{element}</Item>
        ))}
    </Container>
  );
}

export default List;