"use client"; // Add this line at the top

import React, { useState } from 'react';
import styled from 'styled-components';

// Define a type for the props
interface MessageProps {
  type: 'error' | 'success';
}

const FormSection = styled.section`
  position: relative;
  padding: 2rem;
  color: white;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/contact.jpg') no-repeat center center/cover;
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`;

const FormInput = styled.input`
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #fff;
  width: 100%;
  background: transparent;
  color: #fff; /* Ensure text color is set */
  font-weight: 700; /* Added font-weight */
  font-size: 1.1rem; /* Set font size for visibility */

  &:focus {
    outline: none;
    border-bottom-color: #1abc9c;
  }

  &::placeholder {
    color: #ddd; /* Ensure placeholder text is visible */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FormTextArea = styled.textarea`
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #fff;
  width: 100%;
  background: transparent;
  color: #fff; /* Ensure text color is set */
  border-radius: 4px;
  font-weight: 700; /* Added font-weight */
  font-size: 1.1rem; /* Set font size for visibility */

  &:focus {
    outline: none;
    border-color: #1abc9c;
  }

  &::placeholder {
    color: #ddd; /* Ensure placeholder text is visible */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  background: #1abc9c;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #16a085;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FormTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormSubtitle = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Message = styled.p<MessageProps>`
  color: ${props => props.type === 'error' ? '#e74c3c' : '#2ecc71'};
  font-weight: bold;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      const result = await response.json();
      setErrorMessage(result.message || 'Failed to send the message.');
      setResponseMessage('');
    }
  };

  return (
    <FormSection >
      {responseMessage && <Message type="success">{responseMessage}</Message>}
      {errorMessage && <Message type="error">{errorMessage}</Message>}
      <FormTitle>Get in Touch</FormTitle>
      <FormSubtitle>Have a project in mind or just want to chat? Feel free to drop me a message below!</FormSubtitle>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <FormTextArea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <FormButton type="submit">Send</FormButton>
      </Form>
    </FormSection>
  );
};

export default Contact;
