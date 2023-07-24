import React from 'react'
import EventCard from './EventCard'
import { styled } from 'styled-components'

const EventsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 20px;
  justify-content: space-between;
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
          <EventCard />
          <EventCard />
          <EventCard />
      </EventsContainer>
    </StyledSection>
  )
}

export default FeaturedEvents