import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Home() { 
    return (
        <StyledHome>
            <div>List of active games</div>
            <div>Create new game</div>
        </StyledHome>
    )
};