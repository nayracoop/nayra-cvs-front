import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../snippets/shared/SectionTitle'

function header(props) {
    return (
        <SectionTitle content={props.partnerName}></SectionTitle>
    )
}

export default header
