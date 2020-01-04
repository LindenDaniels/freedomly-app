import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
 
  <>
    
    
    <section className = "landing-section">
      <header className="landing-header">
        <h1>Grocery Plus</h1>
        <h2>The grocery list with a twist.</h2>
        <img src="https://i.ibb.co/PmZ6PNr/food-1932466.jpg" alt="food"></img>
      </header>
    </section>
      <section className="landing-section">
        <header>
            <h3>Meal Planning and a Grocery List</h3>
        </header>
        <p><img src="https://i.ibb.co/NY76hNF/Screen-Shot-2019-12-31-at-11-13-18-AM.png" alt="recipe interface"/></p>
        <p>Grocery Plus allows you to add recipes, and add grocery and non-grocery items to a grocery list.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>All-In-One Grocery List</h3>
        </header>
        <p><img src="https://i.ibb.co/k5yLcZ5/Screen-Shot-2019-12-31-at-11-17-21-AM.png" alt="a grocery list"></img></p>
        <p>Now you can do all your shopping without having to switch apps!</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>Add Your Own Recipes</h3>
        </header>
        <p><img src="https://i.ibb.co/TqxQRwP/Screen-Shot-2019-12-31-at-11-19-09-AM.png" alt="Add recipe interface"></img></p>
        <p>Add your own recipes!</p>
      </section>

    </>

  )}