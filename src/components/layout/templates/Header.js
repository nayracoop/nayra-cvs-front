import React from 'react'
import styled from 'styled-components'
import PartnerData from '../snippets/header/PartnerData'
import ContactData from '../snippets/header/ContactData'

const HeaderContainer = styled.div`
    margin-top:32px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    border-radius:1em;
    padding:0 32px;
`;

const PartnerAvatarContainer = styled.div`
    max-height: 250px;
    background-color: #000;
`;

const PartnerDataContainer = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding-left:24px;
`;


function header(props) {
    return (
        <HeaderContainer>
            <PartnerAvatarContainer></PartnerAvatarContainer>
            <PartnerDataContainer>
                <PartnerData name={props.name} lastname={props.lastname}></PartnerData>
                <ContactData></ContactData>
            </PartnerDataContainer>
        </HeaderContainer>
    )
}

export default header
