import React from 'react'
import styled from 'styled-components'

const PartnerInfoContainer = styled.div`

;`

const PartnerName = styled.h1`
    font-size: 48px;
    line-height: 48px;
    padding-bottom:12px;
    margin-top:32px;
`;

const PartnerRole = styled.h2`
    font-size: 32px;
    line-height: 32px;
`;

const CompanyMention = styled.h3`
    font-size: 24px;
    font-family: 'Work Sans', sans-serif;
    line-height: 24px;
`;


function partnerData(props) {
    return (
            <PartnerInfoContainer>
                <PartnerName>{props.name + " " + props.lastname}</PartnerName>
                <PartnerRole>{props.role}</PartnerRole>
                <CompanyMention>nayra.coop</CompanyMention>
            </PartnerInfoContainer>
    )
}

export default partnerData
