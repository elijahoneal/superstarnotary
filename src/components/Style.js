import styled from "styled-components";


export const About = styled.article`
    font-size:1.1rem;

`

export const Services = styled.section`
    h4{
        color:#1B73D3;
        font-style: italic;
        font-weight: 600;
        font-size: 1.3rem;
    }
    div {
        display:flex;
        justify-content:space-between;
        p {
            font-style:italic;
            font-weight: 300;
        }
    }
`

export const Testimonials = styled.section`
    article {
        background-color:#1B73D3;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        margin: 0.5rem auto;
    }    

    color: #fff;
    display:flex:
    flex-direction:column;
    h3 {
        font-weight: 600;
        font-size: 1.3rem;
        font-style: italic;
    }


`