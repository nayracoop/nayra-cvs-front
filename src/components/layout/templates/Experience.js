import React from 'react'
import styled from 'styled-components'
import ExperienceHeader from '../snippets/experience/ExperienceHeader'
import ExperienceDescription from '../snippets/experience/ExperienceDescription'


const ExperienceContainer = styled.div`
    margin-top:32px;
    padding:0 32px;
    color: #FFF;
`;


function experience(props) {
    return (
        <ExperienceContainer>
            <ExperienceHeader title={props.title} from={props.from} to={props.to} icon={props.icon}></ExperienceHeader>
            <ExperienceDescription institution={props.institution} place={props.place} description={props.description}></ExperienceDescription>
        </ExperienceContainer>
    )
}

export default experience
