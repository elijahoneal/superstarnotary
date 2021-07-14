import React, { useState , useEffect } from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import FormSchema from '../validation/FormSchema'


const ContactForm = styled.section`
margin: 2rem auto;
img {
    width: 100%;
}
form{
    display:flex;
    flex-direction:column;
    font-size:1.3rem;
    input , textarea{
        padding: 0.5rem 1rem;
        margin-bottom:0.25rem;
        border: 0.1rem solid #1B73D3;
    }
    textarea{
        height: 5rem;
    }
    button{
        width: 100%;
        margin: 0.5rem auto;
        border: none;
        padding: 0.1rem 0.3rem;
        font-size: 1.3rem;
        background-color:#E4C74E;
        &:hover{
            background-color: #1B73D3;
            color: #fff;
        }
    }
}
@media only screen and (min-width: 768px) {
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
  iframe {
      width: 40%;
      height:25rem;
      margin:0;
      padding:0;

  }
  form {
      width: 55%;
      input , button{
        height: 2.5rem;
      }
      textarea{
            height: 10rem;
      }
   
  }
}

`


const Contact = () => {
const initialForm = {name: '' , email: '', message:''}
const initialFormErrors = {name:'', email:'', message:''  }
const [formData , setFormData] = useState(initialForm)
const [ formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled , setDisabled] = useState(true)

const onChange = (e) => {
    const { name , value } = e.target
    Yup.reach(FormSchema , name)
    .validate(value)
    .then(() => setFormErrors({...formErrors , [name]: ''}))
    .catch( err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    setFormData({ [name]: value })
}

useEffect(()=> {
    FormSchema.isValid(formData)
    .then(isValid => setDisabled(!isValid))
    .catch( err => console.log(err))
  },[formData])

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    setFormData(initialForm)
  };

    return(
        <ContactForm>
           
            <form onSubmit={handleSubmit} name="contact" netlify-honeypot="bot-field" data-netlify="true" hidden>
                <input type="hidden" name="form-name" value="contact" />
                <div>{formErrors.name}</div>

                    <input
                    name='name'
                    type='text'
                    placeholder='Your Name'
                    onChange={onChange}
                    />

                <div>{formErrors.email}</div>

                    <input
                    name='email'
                    type='email'
                    placeholder='Email@business.com'
                    onChange={onChange}
                    />
         
                <div>{formErrors.message}</div>
       
                    <textarea
                    name='message'
                    type='email'
                    placeholder="Enter Your Message"
                    onChange={onChange}></textarea>
            
                <button disabled={disabled}>Submit</button>
            </form>
            <iframe src="https://www.google.com/maps/d/embed?mid=1ad7KLz_R-J0NLxKo4fD8eoEBkBG9ETc0" title="General Range of Service"></iframe>
        </ContactForm>
    )
}

export default Contact