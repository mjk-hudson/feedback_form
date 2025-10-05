import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({name: '', email: '', feedback: ''});
// Handle input changes
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData, [name]: value});
  };
//Hanld form submission
  const handleSubmit = (e) =>{
      e.preventDefault();
      const confirmationMessage = `name: ${formData.name} email: ${formData.email} feedback: ${formData.feedback}`;
      const isConfirmed = window.confirm(`Please confirm your feedback:\n${confirmationMessage}`);
      // If user confirms, process the feedback
      if (isConfirmed) {
        console.log('Feedback submitted:', formData);
        setFormData({name: '', email: '', feedback: ''});
        alert('Thank you for your valuable feedback!  We appreciate your time and effort in helping us improve.');
      }
    };
  return (
    <>
    <nav>Tell Us What You Think</nav>
      <form onSubmit ={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
        type ='text'
        name='name'
        placeholder='Your Name'
        value = {formData.name}
        onChange={handleChange}
        />
        <input 
        type='email'
        name = 'email'
        placeholder = 'Your Email'
        value = {formData.email}
        onChange={handleChange}
        />
        <textarea
        name = 'feedback'
        placeholder = 'Your Feedback'
        value = {formData.feedback}
        onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
