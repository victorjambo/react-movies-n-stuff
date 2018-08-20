import React from 'react';

const Newsletter = () => (
  <section id="newsletter">
    <div className="newsletter_inner">
      <h2>Get the best Movies &amp; TV Shows trailers straight in yoour inbox each week.</h2>
      <div className="sign_up_form">
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Email Address" />
        <button type="button" className="button">Subscribe</button>
      </div>
    </div>
  </section>
);

export default Newsletter;
