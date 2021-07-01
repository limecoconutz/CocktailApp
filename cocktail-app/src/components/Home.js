import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-banner"
    style={{backgroundImage: 
      `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),
      url('https://images.unsplash.com/photo-1573551565922-aec98de55802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`}}
    >
      <div className="container">
        <h1 className="banner-title">Cosmina's Cocktail Database</h1>
        <h4 className="banner-subtitle">The place where you can find the most famous cocktails in the world, and how to make them</h4>
      </div>
    </div>
  );
}

export default Home;

// style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png);">
//   <div class="container">
//     <h1>Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!</h1>
//     <p>Change your life and learn to code at one of our campuses around the world.</p>
//     <a class="btn btn-flat" href="#">Apply now</a>
//   </div>
// </div>