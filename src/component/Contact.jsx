import React from 'react'

const Contact = ({phoneNumber}) => {
  return (
    <div>
       <h2>Contact Us</h2>
            <p>Get in touch with us for any queries or feedback.</p>
            <p>Here is my business phone number: {phoneNumber}</p>
    </div>
  )
}

export default Contact
