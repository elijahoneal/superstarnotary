import './App.css';
import styled from 'styled-components';
import Logo from './images/Logo.png'
import notary from './images/notary.jpg'
import sign from './images/signing.jpg'
import Contact from './components/Contacts'
import { About , Services , Testimonials} from './components/Style'
import { FaStar , FaPhone } from 'react-icons/fa'

const Wrapper = styled.div`
width:90%;
margin: 0 auto;
font-family: 'Raleway', sans-serif;
font-size: 0.9rem;
h2 {
  font-family: 'Yellowtail', cursive;
  font-size: 2.4rem;
  color: #6E6E6E;
  border-bottom: 0.4rem dashed #E4C74E;
  padding-bottom:0.5rem;
  margin: 2rem auto 1rem;
}
img {
  width:100%;
  height:auto;
  margin: 1rem auto;
  @media only screen and (min-width: 768px) {
    width:70%;
  }
  @media only screen and (min-width: 1024px) {
      width: 40%;
      
  }
}
span {
  font-weight: 600;
}
header {
  border-bottom: 0.4rem solid #E4C74E;
}
footer {
  background-color:#6E6E6E;
  color: #fff;
  text-align:center;
  padding: 0.5rem;
  font-weight: 300;
  font-size: 1rem;
  font-style: italic;
  @media only screen and (min-width: 768px) {
    display:flex;
    justify-content:center;
    align-items:baseline;
    p{
      margin:0 1rem;
    }
  }

}
`
const star = {
  color: '#E4C74E'
}
function App() {
  return (

    <Wrapper className="App">
      <header className="App-header">
        <img src= {Logo} alt="Superstar Notary & Signing Services"></img>
      </header>
      <main>
        <About>
          <h2>About</h2>
          <figure>
            <img src= {notary} alt="notary stamp"/>
            <p>MOBILE NOTARY SERVICES Offering General Notary Public services, specializing in Mortgage Loan Closings. 
            **NNA Certified, YEARLY background checked, INSURED & BONDED** Providing unrushed, quality customer service. 
            Can meet at residential, business, jail, nursing home or hospital for document signing. Call for scheduling!</p>
          </figure>
          
        </About>
        <Services>
          <h2>Services</h2>
            <img src= {sign} alt="notary stamp"/>
          <section>
            <article>
                <div>
                  <h4> <FaStar style={star}/> Loan Signing Services</h4>
                  <p>From $125.00</p>
                </div>
                <p>Home loan packages- can perform Purchase/Seller files, VA/FHA, Refinance, HELOC. Will print loan documents and meet at your desired location for signing. 
                  *Mileage could apply if out of normal range</p>
            </article>
            <article>
                <div>
                  <h4> <FaStar style={star}/> General Notary services</h4>
                  <p>From $10.00</p>
                </div>
                <p>MVD Title/Bill of Sale, Wills, Trusts, Certified copies, POA's etc. Can perform in hospital, nursing home, jail, etc. Call for quote</p>
            </article>
            <article>
                <div>
                  <h4> <FaStar style={star}/> Printing Services</h4>
                  <p>From $0.25</p>
                </div>
                <p>Dual tray laser printer quality. Black& white copies only. Will deliver documents for 30 cents per mile
                    After hours notarizations</p>
            </article>
            <article>
                <div>
                  <h4> <FaStar style={star}/> After hours notarizations</h4>
                </div>
                <p>For last minute, after regular business hours signings. SEND MESSAGE FOR AVAILABLIITY. DO NOT CALL. After hours pricing will apply</p>
            </article>
          </section>
        </Services>
        <Testimonials>
          <h2>Testimonials</h2>
          <section>
              <article>
              <h3>Tom McCarron <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> </h3>
              <p>6 days ago<br></br>Total Pro!!!<br></br>On time and Pleasure to work with.</p>
            </article>
            <article>
              <h3>GLORIA Siqueiros <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> </h3>
              <p>very easy to work for you needs, and is more than professional, and very kind hearted.. she is a life savor.. amen will use her in the future if ever needed o and is very much responsible, very helpful thank you, <br></br>Gloria..</p>
            </article>
            <article>
              <h3>Jeni eni <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> <FaStar style={star}/> </h3>
              <p>Awesome, professional service! Met at my home for notary. Easy peasy and affordable 😁 will use again</p>
            </article>
          </section>
          
        </Testimonials>
        <section>
          <h2>Contact</h2>
          <Contact/>
        </section>
      </main>
      <footer>
        <span><FaPhone size="0.7rem"/> 602-345-1047</span>
        <p>Superstar Notary & Signing Services &copy; 2021</p>
      </footer>
    </Wrapper>
  );
}

export default App;
