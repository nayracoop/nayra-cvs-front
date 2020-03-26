import React from 'react'
import styled from 'styled-components'

const ExperienceDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    color:#000;
    font-weight:300;

;`

const PlaceContainer = styled.div`
    text-align:right;
    margin-top: 1em;

    span{
        font-weight:600;
    }
;`

const DescriptionText = styled.p`
    margin-top: 1em;
;`



function experienceDescription(props) {
    return (
        <ExperienceDescriptionContainer>
            <div></div>
            <div>
                <PlaceContainer><p>at <span>{props.institution}</span></p><p>{props.place}</p></PlaceContainer>
                <DescriptionText>{props.description}</DescriptionText>
            </div>
        </ExperienceDescriptionContainer>
    )
}

export default experienceDescription
