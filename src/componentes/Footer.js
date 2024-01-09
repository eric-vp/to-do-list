import styled from "styled-components";

const FooterDiv = styled.footer`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,51,69,1) 0%, rgba(40,75,99,1) 100%);
    text-align: center;
    padding: .8rem;
    color: #f7ede2;
`

function Footer() {
    return (
        <FooterDiv>Desenvolvido por Eric</FooterDiv>
    )
}

export default Footer;