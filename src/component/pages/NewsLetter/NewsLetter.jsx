import React from 'react';
import './NewsLetter.css';

const Newsletter = () => {
  return (
    <div className="container">
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay up to date with the latest news and updates.</p>
      <form>
        <input type="email" placeholder="Enter your email address" required />
        <button type="submit" className='.btn-playstore-1'>Subscribe</button>
      </form>
    </div>
    </div>

  );
};

export default Newsletter;
