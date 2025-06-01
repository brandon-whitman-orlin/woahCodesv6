import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contactMethod, setContactMethod] = useState("");
  const [placeholder, setPlaceholder] = useState("Select a contact method first");
  const [isContactEnabled, setIsContactEnabled] = useState(false);

  const handleContactMethodChange = (event) => {
    const method = event.target.value;
    setContactMethod(method);

    const placeholders = {
      email: "email@example.com",
      reddit: "u/your-reddit-username",
      discord: "YourDiscord#1234",
      linkedin: "https://www.linkedin.com/in/your-name",
      other: "Enter your contact info",
    };

    setPlaceholder(placeholders[method] || "Enter your contact info");
    setIsContactEnabled(true);
  };

  return (
    <form
      id="contact-form"
      className="contact-form"
      action="https://formspree.io/f/xldnrklj"
      method="post"
    >
      <div>
        <label htmlFor="contact-name">Your Name</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="What should I call you?"
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-method">Preferred Contact Method</label>
        <select
          id="contact-method"
          name="contact-method"
          value={contactMethod}
          onChange={handleContactMethodChange}
          required
        >
          <option value="" disabled>
            Select contact method
          </option>
          <option value="email">Email</option>
          <option value="reddit">Reddit</option>
          <option value="discord">Discord</option>
          <option value="linkedin">LinkedIn</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-info">Your Contact Info</label>
        <input
          type="text"
          id="contact-info"
          name="contact"
          placeholder={placeholder}
          required
          disabled={!isContactEnabled}
        />
      </div>
      <div>
        <label htmlFor="contact-message">Reason for Contact</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          placeholder="Tell me what's on your mind :D"
          required
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Contact;
