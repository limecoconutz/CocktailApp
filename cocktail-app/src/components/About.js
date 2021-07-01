import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-banner"
      style={{backgroundImage: 
        `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),
        url('https://images.unsplash.com/photo-1570716893556-8cae2e541ba8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`}}
      ></div>
      <div className="container">
            <p className="about-subtitle">This app was created by 
            <em> Cosmina Iosifescu</em>, a developer at  
            <em><a className="text-orange" href="https://salt.dev/"> salt</a></em>
            </p>
      </div>
    </div>
  );
}

export default About;