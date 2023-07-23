import React from 'react'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
  height: var(--header-height-desktop);
`;

const HeaderContainer = styled.div`
    max-width: 1200px;
    padding: 40px 24px 12px 24px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;

    h1 {
        letter-spacing: 5px;
        margin-bottom: 4px;
        margin-top: 0;
        font-size: 60px;
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          height: 2px;
          width: 100%;
          top: 50%;
          right: 75%;
          background-color: var(--black);
        }
        &::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 100%;
          top: 50%;
          left: 75%;
          background-color: var(--black);
        }

        @media only screen and (max-width: 500px) {
          font-size: 40px;
        }
    }
`;

const Header = () => {
  return (
    <StyledHeader>
        <HeaderContainer>
            <h1>Hospitality & Travel</h1>
            <span style={{ letterSpacing: '10px' }}>Rotterdam</span>
        </HeaderContainer>
    </StyledHeader>
  )
}

export default Header