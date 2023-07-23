import React from 'react'
import { styled } from 'styled-components'
import Weekly from '../assets/weekly.jpg';
import Monthly from '../assets/monthly.jpg';
import Boardgames from '../assets/boardgames.jpg';
import Trips from '../assets/trips.jpg';
import Pattern from '../assets/pattern.svg';
import OpenInNewIcon from '../assets/open-in-new.svg.png';

const EventsSection = styled.section`
    background: url('${Pattern}');
    background-size: cover;
    background-position: center;
    padding-bottom: 40px;
`;

const EventsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 42px 24px;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
`;

const EventCard = styled.div`
    height: 240px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--light-green);
    background-position: center;
    background-size: cover;
    position: relative;
    color: white;
    font-weight: bold;
    z-index: 5;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        opacity: 0.5;
    }
`;

const CardText = styled.span`
    positionL: relative;
    z-index: 10;
`;

const WeeklyDrinksCard = styled(EventCard)`
    background-image: url('${Weekly}');
`;
const MonthlyDrinksCard = styled(EventCard)`
    background-image: url('${Monthly}');
`;
const BoardgamesCard = styled(EventCard)`
    background-image: url('${Boardgames}');
`;
const TripsCard = styled(EventCard)`
    background-image: url('${Trips}');
`;

const OpenInNewImage = styled.img`
    width: 40px;
    margin-right: 10px;

    @media only screen and (max-width: 500px) {
        width: 30px;
    }
`;

const FundTitle = styled.a`
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'League Gothic', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    cursor: pointer;
    letter-spacing: 1px;
    text-decoration: none;
    color: var(--black);

    &:hover {
        color: var(--green);
        transition: color 0.2s ease;
    }

    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

const EventTypes = () => {
  return (
    <EventsSection id="event-types">
        <EventsContainer>
            <WeeklyDrinksCard>
                <CardText>Weekly social drinks</CardText>
            </WeeklyDrinksCard>
            <BoardgamesCard>
                <CardText>
                    Game nights
                </CardText>
            </BoardgamesCard>
            <MonthlyDrinksCard>
            <CardText>
                Monthly social drinks
            </CardText>
            </MonthlyDrinksCard>
            <TripsCard>
            <CardText>
                Weekend trips
            </CardText>
            </TripsCard>
        </EventsContainer>

        <FundTitle href="https://gofund.me/dc2809cb" target='_blank'>
            <OpenInNewImage src={OpenInNewIcon} />
            Fund us to create even more events
        </FundTitle>
    </EventsSection>
  )
}

export default EventTypes