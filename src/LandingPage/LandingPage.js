import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
  <>
    <section className = "landing-section">
      <header className="landing-header">
        <h1>Freedomly</h1>
        <h2>Imagine freedom from debt.</h2>
        <img src="https://i.ibb.co/ns8d4P4/success-846055-1920.jpg" alt="A person standing on a rock on the ocean and throwing their hands in the air with joy."></img>
      </header>
    </section>
      <section className="landing-section">
        <header>
            <h3>Add Folders</h3>
        </header>
        <p><img src="https://i.ibb.co/bKc35Rw/Screen-Shot-2020-01-10-at-8-53-02-PM.png" alt="Add Folder Interface"/></p>
        <p className='landing-p'>With Freedomly, you can add folders to organize your debts in.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>Add Debts</h3>
        </header>
        <p><img src="https://i.ibb.co/jzJXNBL/Screen-Shot-2020-01-10-at-8-54-41-PM.png" alt="Add Debt Interface" /></p>
        <p className='landing-p'>You can also add debts to those folders.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>An Organized List of your Debts</h3>
        </header>
        <p><img src="https://i.ibb.co/VpgjJnZ/Screen-Shot-2020-01-10-at-8-59-11-PM.png" alt="Add list of debts"></img></p>
        <p className='landing-p'>You can then view your list of debts!</p>
      </section>
    </>
  )}