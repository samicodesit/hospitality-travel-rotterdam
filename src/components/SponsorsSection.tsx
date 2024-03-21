import React from 'react'
import { styled } from 'styled-components'
import BlufLogo from '../assets/bluf.png';
import ContainerBarNoordLogo from '../assets/containerbar.png';
import CharliesLogo from '../assets/charlies.png';

const StyledSection = styled.section`
    background-color: #003472;
    padding: 12px 24px;
`;

const Sponsor = styled.div`
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: 500px) {
        width: 80px;
        height: 80px;
    }
`;

const Bluf = styled(Sponsor)`
    background-image: url('${BlufLogo}');
`;
const ContainerBarNoord = styled(Sponsor)`
    background-image: url('${ContainerBarNoordLogo}');
`;
const Charlies = styled(Sponsor)`
    background-image: url('${CharliesLogo}');
`;

const SponsorsTitle = styled.h2`
    font-family: 'League Gothic';
    text-align: center;
    color: white;
    font-size: 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const SponsorsIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
`;

const SponsorsSection = () => {
  return (
    <>
    <StyledSection>
        <SponsorsTitle>
            Our Partners
        </SponsorsTitle>
        <SponsorsIconsContainer>
            <Bluf />
            <ContainerBarNoord />
            <Charlies />
        </SponsorsIconsContainer>
    </StyledSection>
    </>
  )
}

export default SponsorsSection