import React, { useState } from 'react';
import '../cssComponents/Contact.css'; 
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

function Contact() {
  const [alertInfo, setAlertInfo] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Get your Web3Forms key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    formData.append("access_key", accessKey);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setAlertInfo({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        event.target.reset();
      } else {
        setAlertInfo({
          open: true,
          message: 'Failed to send message. Please try again.',
          severity: 'error'
        });
      }
    } catch (error) {
        setAlertInfo({
            open: true,
            message: 'An error occurred. Please check your connection.',
            severity: 'error'
        });
    }

    setTimeout(() => {
        setAlertInfo(prev => ({ ...prev, open: false }));
    }, 8000);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <Collapse in={alertInfo.open}>
          <Alert
            severity={alertInfo.severity}
            variant="outlined"
            sx={{ 
              mb: 2, 
              bgcolor: 'transparent', 
              color: 'white', 
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } 
            }} 
          >
            {alertInfo.message}
          </Alert>
        </Collapse>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
