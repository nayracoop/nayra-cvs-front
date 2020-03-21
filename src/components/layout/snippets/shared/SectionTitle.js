import React from 'react'
import styled from 'styled-components'

const SectionTitleContainer = styled.div`
    padding: 10px;
`;

const TitleTag = styled.h2`
    font-family: 'Saira', sans-serif;
    color: black;
    font-weight: 500;
    font-size: 2em;
    line-height: 32px;
`;

const Underline = styled.div`
    width: 100px;
    height:5px;
    border-radius:10px;
    background-color: purple;
    margin-top: -20px;
`;

function sectionTitle(props) {
    return (
        <SectionTitleContainer>
            <TitleTag> {props.content} </TitleTag>
            <Underline> </Underline>
        </SectionTitleContainer>
    )
}

export default sectionTitle
