import styled from "styled-components";

const H1 = styled.h1`
    text-align: center;
    padding: 3rem 0;
    text-transform: uppercase;
    font-size: 2rem;
    color: #d84727;
`

function Header() {
    return (
        <header>
            <H1>To-Do List</H1>
        </header>
    )
}

export default Header;