import React from 'react';
import BlockstackButton from 'components/blockstack-button';
import Logo from 'components/logo';
import landingImage from 'images/landing.png';
import './landing.css';

const Landing = () => (
  <div className="Landing">
    <div className="Landing__content">
      <div className="Landing__logo">
        <Logo/>
        <p className="Tagline">Order from chaos</p>
      </div>
      <div className="Landing__text">
        <h1 className="Landing__title">Your Crypto Taxes Simple & Private</h1>
        <p className="Landing__body">Generate a tax report for Coinbase transactions with the push of a button, decentralized so your data stays yours.</p>
        <BlockstackButton/>
        <div className="Landing__install-link">
          Don&quot;t have Blockstack? <a href="https://blockstack.org/install" target="_blank" rel="noopener noreferrer">Install here</a>
        </div>
      </div>
    </div>
    <div
      className="Landing__illustration"
      style={{backgroundImage: `url(${landingImage}), linear-gradient(to bottom, var(--color-blue), var(--color-cyan))`}}
    />
  </div>
);

export default Landing;
