import styled from 'styled-components'

const Cards = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 5rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const Info = styled.div`
    background-color: #B2A496;
    padding: 1rem;
    font-size: 1.3rem;
    margin: 0.5rem;
    height: 30rem;
    border-radius: 1rem;
    border-bottom: 4px solid #BA7855;
    border-left: 3px solid #754320;

    & > div, > ul, > h2, > h3 {
        margin-top: 0.4rem;
    }
    & h2, > h3 {
        border-bottom: 2px solid #A57C5B;
    }
`;

const Features = styled.ul`
    list-style-type: none;
`;

const Details = styled.div`
    padding: 0.3rem 0;
`;

export default {
    Cards,
    Details,
    Features,
    Info
}