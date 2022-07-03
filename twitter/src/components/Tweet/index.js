import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

function Tweet() {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon/>
            Você Retweetou
        </Retweeted>

        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>Vinicius Guedes</strong>
                    <span>@lsajdfgkajsdh</span>
                    <Dot />
                    <time>03 de Jul</time>
                </Header>

                <Description>Eai '-'</Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon /> 18
                    </Status>
                    <Status>
                        <RetweetIcon /> 18
                    </Status>
                    <Status>
                        <LikeIcon /> 18
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;