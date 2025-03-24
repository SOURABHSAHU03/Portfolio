import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm17 8h-2V7.238l-7.928 7.1L4 7.216V19h16v-9zM5 4v.511l7.55 6.662L20 4.53V4H5z"/>
        </svg>
      ),
      label: "Email",
      value: "2022ucp1632@mnit.ac.com",
      action: () => window.location.href = "mailto:sourabh@example.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 015.044 3h3.536a1 1 0 011 .98c.022.14.044.38.066.68.023.302.045.645.045.99 0 .982-.186 2.022-.534 3.034a1 1 0 01-.664.66l-2.06.543a12.042 12.042 0 005.816 5.817l.542-2.06a1 1 0 01.661-.665c1.012-.348 2.052-.534 3.034-.534.344 0 .687.022.99.045.3.022.54.044.68.066a1 1 0 01.98 1z"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 9302251384",
      action: () => navigator.clipboard.writeText("+91 9302251384").then(() => alert("Phone number copied!"))
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "github.com/SOURABHSAHU03",
      action: () => window.open("https://github.com/SOURABHSAHU03", "_blank")
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card" onClick={method.action}>
              <div className="contact-icon">
                {method.icon}
              </div>
              <div className="contact-details">
                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} Sourabh Sahu. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;