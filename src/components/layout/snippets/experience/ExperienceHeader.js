import React from 'react'
import styled from 'styled-components'

const ExperienceHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr 1fr;
    color: #FFF;
    background-color: #000;
    padding: .25em 2em;
    width:100%;
    border-radius: 1em;
;`

const ExperienceYear = styled.p`
    display: inline-block; 
    margin-top:.25em;   
    font-size: 1em;
;`

const ExperienceTitleText = styled.h2`
    font-size: 1.25em;;
    text-align: right;
;` 

const ExperienceIcon = styled.div`
    text-align:right;
    margin-top:.25em;   
;` 

function experienceTitle(props) {
    return (
        <ExperienceHeaderContainer>
            <div><ExperienceYear>{props.from}</ExperienceYear> | <ExperienceYear>{props.to}</ExperienceYear></div>
            <ExperienceTitleText>{props.title}</ExperienceTitleText>
            <ExperienceIcon>{props.icon}</ExperienceIcon>
        </ExperienceHeaderContainer>
    )
}

export default experienceTitle
