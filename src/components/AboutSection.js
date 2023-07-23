import React from 'react'
import { styled } from 'styled-components'
import AboutSectionBackground from '../assets/about-section.jpeg';
import DownArrow from '../assets/down-arrow-svgrepo-com.svg';

const StyledSection = styled.section`
    background-image: url('${AboutSectionBackground}');
    background-size: cover;
    background-position: top;
    height: 600px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.7;
    }
`;

const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px 24px;
    position: relative;
    z-index: 10;
    text-align: center;
`;

const Heading = styled.h2`
    background: var(--green);
    display: inline-block;
    font-size: 36px;

    @media only screen and (max-width: 500px) {
        font-size: 22px;
    } 
`;

const Paragraph = styled.p`
    background: white;
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;
    line-height: 1.6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AboutCTAContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const AboutCTA = styled.a`
    display: inline-flex;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
    font-weight: bold;
    font-size: 40px;
    font-family: 'League Gothic', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: white;
    padding: 12px 24px;
    cursor: pointer;
    position: relative;
    border: 2px solid #333;
    color: var(--black);

    &::before {
        content: "";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        border: 2px solid #333;
        transform: scaleX(0) scaleY(0);
        transition: transform 0.3s ease;
        transform-origin: center top;
    }

    &:hover::before {
        transform: scaleX(1) scaleY(1);
    }
`;

const ArrowImage = styled.img`
    width: 40px;

    @media only screen and (max-width: 500px) {
        width: 30px;
    }`;

const CTAText = styled.span`
    display: inline-block;
    margin: 0 10px;

    @media only screen and (max-width: 500px) {
        font-size: 26px;
    }
`;

const AboutSection = () => {
  return (
    <StyledSection>
        <AboutContainer>
            <div>
                <Heading>Bringing people together <br /> inside and outside Rotterdam</Heading>
                <Paragraph>At Hospitality & Travel Rotterdam, we believe in the power of connection and the magic that happens when people from different walks of life come together. As a vibrant community nestled in the heart of one of Europe's most dynamic cities, our mission is to bridge the gap between cultures and create lasting bonds through unforgettable experiences.
                    
                </Paragraph>
            </div>

            <AboutCTAContainer>
                <AboutCTA href="#event-types">
                    <ArrowImage src={DownArrow} />
                    <CTAText>
                        Explore all of our event types
                    </CTAText>
                    <ArrowImage src={DownArrow} />
                </AboutCTA>
            </AboutCTAContainer>
        </AboutContainer>
    </StyledSection>
  )
}

export default AboutSection