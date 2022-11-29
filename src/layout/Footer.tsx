import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

interface IFooter {
  setLoading: (data: boolean) => void,
}

function Footer({ setLoading } : IFooter) {
  return (
    <section>
      <ContactForm setLoading={setLoading}/>
    </section>
  )
}

export default Footer