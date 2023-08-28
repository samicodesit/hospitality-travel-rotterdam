import React from 'react'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
  height: var(--header-height-desktop);
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  h1 {
    letter-spacing: 5px;
    margin-bottom: 4px;
    margin-top: 0;
    font-size: 60px;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media only screen and (max-width: 500px) {
    gap: 5px;

    h1 {
      font-size: 32px;
    }
  }
`;

const Line = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  height: 2px;
  background: var(--black);
`;

const HeaderContainer = styled.div`
    max-width: 1200px;
    padding: 40px 24px 12px 24px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
`;

const Header = () => {
  return (
    <StyledHeader>
        <HeaderContainer>
            <HeaderTitleContainer>
              <Line />
                <h1>Hospitality & Travel</h1>
              <Line />
            </HeaderTitleContainer>
            <span style={{ letterSpacing: '10px' }}>Rotterdam</span>
        </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
