import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About This Blog</h1>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">About</li>
        </ol>
      </nav>
      
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">Our Mission</h2>
        <p>Welcome to our accessible blog! Our mission is to share knowledge about web development with a focus on creating accessible experiences for all users, regardless of their abilities or disabilities.</p>
        <p>We believe that the web should be accessible to everyone, and we're committed to demonstrating best practices through our content and the design of this site.</p>
      </section>
      
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact Information</h2>
        <address>
          <p>Email: <a href="mailto:contact@accessibleblog.example">contact@accessibleblog.example</a></p>
          <p>Twitter: <a href="https://twitter.com/accessibleblog" target="_blank" rel="noopener noreferrer">@accessibleblog</a></p>
        </address>
      </section>
      
      <section aria-labelledby="accessibility-statement">
        <h2 id="accessibility-statement">Accessibility Statement</h2>
        <p>We are committed to ensuring this website is accessible to all users. Our accessibility efforts include:</p>
        <ul>
          <li>Using semantic HTML elements</li>
          <li>Providing alternative text for images</li>
          <li>Ensuring keyboard navigability</li>
          <li>Using ARIA attributes appropriately</li>
          <li>Maintaining sufficient color contrast</li>
          <li>Supporting screen readers and other assistive technologies</li>
        </ul>
        <p>If you encounter any accessibility issues on our site, please contact us so we can address them promptly.</p>
      </section>
    </>
  );
} 