// components/SimpleForm.jsx
// Demonstrates controlled inputs, state management, form handling

import React, { useState } from "react";

function SimpleForm() {
  // State variables for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    alert(`Form Submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page form-page">
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;