import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin-right: 10px;
    background: var(--gray);
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px;
    };

    > span {
        font-size: 14px;
        color: var(--gray);
    };
`;

export const FollowButton = styled.button`
    background-color: var(--secondary);
    padding: 5px 15px;
    border: 1px solid var(--twitter);
    border-radius: 20px;
    
    color: var(--twitter);
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }
`;
