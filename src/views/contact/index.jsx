import React from 'react'
// import './contactStyle.css';
import ResidaFooter from 'shared/footer';
import ContactForm from 'components/ContactForm';
import Header from 'shared/header';

const ContactPage = () => {
  return (
    <div className='contact_cont_space'>
      <Header />
      <ContactForm />
     <ResidaFooter />

    </div>
  )
}

export default ContactPage;
