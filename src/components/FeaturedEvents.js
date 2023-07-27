import React from 'react'
import EventCard from './EventCard'
import { styled } from 'styled-components'

import Burcu from '../assets/burcu.jpg'
import Adil from '../assets/adil.png'
import Drinks from '../assets/drinks.jpg'

const events = [
  {
    title: 'Weekly Social Drinks',
    mainHostImage: Burcu,
    hostsImages: [Adil],
    day: '27',
    month: 'Jul',
    image: Drinks,
    location: 'Haagse Bluf',
    time: '20:00',
    free: true,
    expectingPeopleMoreThan: '20'
  }
]

const EventsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 20px;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    row-gap: 36px;
  }
`;

const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  width: 100%;
`;

const FeaturedEventsTitle = styled.h2`
  color: var(--dark-green);
  font-size: 36px;
  margin-top: 8px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 36px;
  }
`

const FeaturedEvents = () => {
  return (
    <StyledSection>
    <FeaturedEventsTitle>Happening this week</FeaturedEventsTitle>
      <EventsContainer>
          {
            events.map(event => (
                <EventCard event={event} />
            ))
          }
      </EventsContainer>
    </StyledSection>
  )
}

export default FeaturedEvents