import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
 
  <>
    
    
    <section className = "landing-section">
      <header className="landing-header">
        <h1>Freedomly</h1>
        <h2>Imagine freedom from debt.</h2>
        <img src="https://i.ibb.co/PmZ6PNr/food-1932466.jpg" alt="food"></img>
      </header>
    </section>
      <section className="landing-section">
        <header>
            <h3>Add Folders</h3>
        </header>
        <p><img src="https://i.ibb.co/NY76hNF/Screen-Shot-2019-12-31-at-11-13-18-AM.png" alt="recipe interface"/></p>
        <p>With Freedomly, you can add folders to organize your debts in.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>Add Debts</h3>
        </header>
        <p><img src="https://i.ibb.co/k5yLcZ5/Screen-Shot-2019-12-31-at-11-17-21-AM.png" alt="a grocery list"></img></p>
        <p>You can also add debts to those folders.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>An Organized List of your Debts</h3>
        </header>
        <p><img src="https://i.ibb.co/TqxQRwP/Screen-Shot-2019-12-31-at-11-19-09-AM.png" alt="Add recipe interface"></img></p>
        <p>You can then view your list of debts!</p>
      </section>

    </>

  )}