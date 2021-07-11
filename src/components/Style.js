import styled from "styled-components";


export const About = styled.article`
    font-size:1.1rem;
    margin: 2rem 0;
`

export const Services = styled.section`
margin: 2rem 0;
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
    article {
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        section {
            display:flex;
            flex-flow: row wrap;
            justify-content:space-around;
            width: 100%;
            div {
                flex-direction:column;
                h4{
                    margin-bottom:0.5rem;
                }
                p{
                    margin: 0;
                }
            }
            article {
                width: 45%;
                margin-bottom: 2rem;
            }
        }
        
     }
`

export const Testimonials = styled.section`
    margin: 2rem 0;
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
    @media only screen and (min-width: 1024px) {
        section {
            display:flex;
            flex-flow: row nowrap;
            justify-content:space-evenly;
            article {
                width: 28%;
                margin-bottom: 2rem;
            }
        }
        
     }


`