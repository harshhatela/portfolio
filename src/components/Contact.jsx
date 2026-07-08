import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    const newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      hasError = true;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSending(true);

    emailjs.send(
      'service_2j29or2',          // ✅ Service ID
      'template_1yg5s0v',         // ✅ Template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      'KRXX8zHNTIGI4ikkt'          // ✅ Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>CONTACT</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Let's Start A Conversation</h3>
          <p>
            Whether you have a project in mind, need some advice, or just want
            to say hello, I'd love to hear from you. Drop me a message and I'll
            get back to you as soon as possible.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>
                workwithharsh.hatela@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ''}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ''}
            ></textarea>
            {errors.message && (
              <span className={styles.errorText}>{errors.message}</span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className={styles.btnSubmit}
            disabled={isSending}
          >
            <span className={styles.btnText}>
              {isSending ? 'Sending...' : 'Send Message'}
            </span>

            <div className={styles.planeIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
