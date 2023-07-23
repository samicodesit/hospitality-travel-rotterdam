import React from 'react'
import { styled } from 'styled-components'
import heroBackground from '../assets/hero-background.svg';
import FeaturedEvents from './FeaturedEvents';

const StyledMain =  styled.main`
    height: 100vh;
    position: relative;
    margin-top: calc(-1 * var(--header-height-desktop));
    overflow: hidden;

    &:: after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('${heroBackground}');
        background-size: cover;
        margin-top: 200px;
        z-index: 2;
    }

    @media only screen and (max-width: 500px) {
      height: auto;
    }
`;

const MainContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: calc(40px + var(--header-height-desktop));
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media only screen and (max-width: 500px) {
      height: auto;
      padding-bottom: 40px;
    }
`;

const CTASection = styled.section`
    display: flex;
    justify-content: center;
    column-gap: 12px;
    flex: 1;
    align-items: center;

    @media only screen and (max-width: 500px) {
      padding: 30px 0 12px 0;
    }
`

const CTAButton = styled.a`
    background: black;
    color: white;
    border: 2px solid black;
    padding: 12px 24px;
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'League Gothic', sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
`;

const CTAButtonPrimary = styled(CTAButton)`
    background: var(--green);
    border: 2px solid var(--black);
`;

const Hero = () => {
  return (
    <StyledMain>
      <MainContainer>
        <FeaturedEvents />

        <CTASection>
          <CTAButtonPrimary href="https://forms.gle/o8RQMPJB1VG4UBib7" target="_blank">Join the team</CTAButtonPrimary>
          <CTAButton href="https://www.meetup.com/Htr010/" target="_blank">More events</CTAButton>
        </CTASection>
      </MainContainer>
    </StyledMain>
  )
}

export default Hero