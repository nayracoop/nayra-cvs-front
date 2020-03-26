import React from 'react'
import styled from 'styled-components'
import ContactInfo from './ContactInfo'

const ContactDataContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    border-top: 1px solid;
    margin-top: 16px;
`;


function contactData(props) {
    return(
        <ContactDataContainer>
            <ContactInfo></ContactInfo>
            <ContactInfo></ContactInfo>
            <ContactInfo></ContactInfo>
            <div></div>
            <ContactInfo></ContactInfo>
            <ContactInfo></ContactInfo>
        </ContactDataContainer>
    )
}

export default contactData
