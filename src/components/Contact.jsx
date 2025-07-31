import React from 'react';
import '../cssComponents/Contact.css'; 

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5e7e6ec8-9c53-4427-93b0-35fa789cc7fb");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
      event.target.reset();
    } else {
      alert("❌ Failed to send message.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" id="phone" placeholder="Your Contact Number" pattern="[0-9]{10}"/>
        <input type="text" name="name"  placeholder="Your subject" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
