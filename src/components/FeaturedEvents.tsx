import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { styled } from "styled-components";
import { createClient } from "contentful";

import Drinks from "../assets/drinks.jpg";
import Games from "../assets/boardgames.jpg";
import Pubcrawl from "../assets/pub-crawl.jpg";
import MonthlyDrinks from "../assets/monthly-drinks.jpg";

import Burcu from "../assets/burcu.jpg";
import Adil from "../assets/adil.png";
import Jona from "../assets/jona.jpg";
import Wendel from "../assets/wendel.jpg";
import Sonia from "../assets/sonia.jpg";
import Sami from "../assets/sami.jpeg";
import Filiz from "../assets/filiz.png";
import Rick from "../assets/rick.jpeg";

const events = [
  {
    title: "Game Time",
    mainHostImage: Jona,
    hostsImages: [Sami],
    day: "15",
    month: "Oct",
    image: Games,
    location: "Containerbar Noord",
    time: "14:00",
    free: false,
    expectingPeopleMoreThan: "8",
  },
];

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
`;

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const entries = await client.getEntries({ content_type: "event" });
      const fetchedEvents = entries.items.map((entry) => {
        return {
          title: entry.fields.title,
          mainHostImage: entry.fields.mainHostImage.fields.file.url,
          hostsImages: entry.fields.hostsImages.map(
            (host) => host.fields.file.url
          ),
          day: entry.fields.day,
          month: entry.fields.month,
          image: entry.fields.image.fields.file.url,
          location: entry.fields.location,
          time: entry.fields.time,
          free: entry.fields.free,
          expectingPeopleMoreThan: entry.fields.expectingPeopleMoreThan,
        };
      });
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <StyledSection>
      <FeaturedEventsTitle>Happening this week</FeaturedEventsTitle>
      <EventsContainer>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </EventsContainer>
    </StyledSection>
  );
};

export default FeaturedEvents;
