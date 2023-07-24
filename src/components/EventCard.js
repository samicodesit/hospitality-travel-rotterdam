import React from 'react'
import { styled } from 'styled-components';

import LocationIcon from '../assets/location.svg';

const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 4;
    padding: 20px;
`;

const CardDate = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    padding: 14px 16px;
    text-transform: uppercase;
    background: white;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-weight: normal;
    }
`;

const CardTitle = styled.h2`
    color: white;
    font-size: 20px;
    margin-top: 2px;
    margin-bottom: 6px;
`;

const CardSubtitleOne = styled.span`
    color: var(--grey);
    font-size: 14px;
    display: flex;
`;

const CardSubtitleTwo = styled.span`
    color: var(--grey);
    font-size: 14px;
`;

const CardBadge = styled.div`
    background-color: #ff5252;
    display: inline-block;
    padding: 4px 16px;
    color: white;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-50%);
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const EventCard = ({ event: { free, day, month, location, time, title, expectingPeopleMoreThan, mainHostImage, hostsImages, image } }) => {
    const StyledArticle = styled.article `
        background: url('${image}');
        max-width: 330px;
        min-width: 250px;
        height: 400px;
        position: relative;
        background-size: cover;
        background-position: left;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        flex-grow: 1;

        &:: after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
        }

        @media only screen and (max-width: 500px) {
            flex: auto;
            margin: 20px;
        }
    `;

    
    const CardAvatarSecondary = styled.div`
        border-radius: 50%;
        height: 55px;
        width: 55px;
        border: 2px solid white;
        color: white;
        top: 30px;
        left: 20px;
        position: absolute;
        background-image: ${props => `url('${props.img}')`};
        background-size: cover;
        background-positiion: center;
        z-index: 30;
    `;

    const CardAvatarMain = styled(CardAvatarSecondary)`
        background-image: url('${mainHostImage}');
        left: 60px;
        z-index; 20;
    `;  

    return (
    <StyledArticle>
        {
            free && (
                <CardBadge><span>Free</span></CardBadge>
            )
        }
        <CardDate>
            {day} <br /> <span>{month}</span>
        </CardDate>
        {
            hostsImages.map(host => (
                <CardAvatarSecondary img={host} />
            ))
        }
        <CardAvatarMain />
        <CardContent>
            <CardSubtitleOne>
                <img style={{ width: '10px', marginRight: '4px' }} src={LocationIcon} />
                <span>{location}, {time}</span>
            </CardSubtitleOne>
            <CardTitle>
                {title}
            </CardTitle>
            <CardSubtitleTwo>
                Expecting +{expectingPeopleMoreThan} people
            </CardSubtitleTwo>
        </CardContent>
    </StyledArticle>
  )
}

export default EventCard