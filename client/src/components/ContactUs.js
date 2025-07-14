import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { user_name, user_phone, user_email, message } = formData;

    const text = `*New Contact Form Submission*%0A
👤 *Name:* ${user_name}%0A
📞 *Phone:* ${user_phone}%0A
📧 *Email:* ${user_email}%0A
💬 *Message:* ${message}`;

    const whatsappNumber = '910223988282'; // 🔁 Your number without + or 0 (international format)
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, '_blank');
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>Reach out on WhatsApp</p>

        <form className="contact-form" onSubmit={sendToWhatsApp}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Mobile Number"
            required
            value={formData.user_phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            value={formData.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Brief Your Purpose"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
