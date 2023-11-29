import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import logo from "../../assets/potato-logo.png"

const FooterOutDiv = styled.div`
    width: 100%;
    height: 6rem;
    text-align: center;
    background-color: white;
    border-radius: 20px 20px 0 0;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.16);
    margin-top: 20px;
`

const FooterImage = styled.img`
    width: 4%;
    margin-top: 10px;
`

function Footer() {
    return (
        <FooterOutDiv>
            <FooterImage src={logo}></FooterImage>
        </FooterOutDiv>
    )
}

export default Footer;