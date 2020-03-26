import React from 'react'
import styled from 'styled-components'

const ContactText = styled.a`
    font-size: 16px;
    padding-top: 10px;
`;

const ContactIcon = styled.div`
    width: 48px;
    height: 48px;
    background-color: black;
    border-radius: 50%;
`;

const ContactInfoContainer = styled.li`
    display:grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 16px;
`;


function contactInfo(props) {
    return(
       <ContactInfoContainer>
            <ContactIcon></ContactIcon>
            <ContactText>Contact Link</ContactText>
       </ContactInfoContainer> 
    )
}

export default contactInfo
