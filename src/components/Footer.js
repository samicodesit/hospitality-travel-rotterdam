import React from 'react'
import { styled } from 'styled-components'

import InstagramLogo from '../assets/instagram.svg';
import FacebookLogo from '../assets/facebook.svg';
import MeetupLogo from '../assets/meetup.svg';

const StyledFooter = styled.footer`
    background: #003472;
    height: 160px;
    color: white;
    padding: 12px 24px;
`;

const FooterContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    border-top: 2px solid white;
`;

const Copyright = styled.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
`;

const SocialsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    margin-bottom: 20px;
    margin-top: 36px;

    img {
        width: 32px;
    }
`;

const SocialLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

const Footer = () => {
  return (
    <StyledFooter>
        <FooterContainer>
            <SocialsSection>
                <SocialLink href="https://www.instagram.com/htr_010/" target='_blank'>
                    <img src={InstagramLogo}></img>
                </SocialLink>
                <SocialLink href="https://www.facebook.com/HTR010/" target='_blank'>
                    <img src={FacebookLogo}></img>
                </SocialLink>
                <SocialLink href="https://www.meetup.com/Htr010/" target='_blank'>
                    <img src={MeetupLogo}></img>
                </SocialLink>
            </SocialsSection>
            <Copyright>
                ® 2023 Hospitality & Travel Rotterdam
            </Copyright>
        </FooterContainer>
    </StyledFooter>
  )
}

export default Footer