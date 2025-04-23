import React from 'react';

export default function FirstPost() {
  return (
    <article>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/posts">Blog Posts</a></li>
          <li aria-current="page">Getting Started with Accessibility</li>
        </ol>
      </nav>
      
      <header>
        <h1>Getting Started with Accessibility</h1>
        <p>
          <time dateTime="2023-12-01">December 1, 2023</time>
          <span aria-label="Author">By Admin</span>
        </p>
      </header>
      
      <div role="region" aria-label="Table of Contents">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#why-accessibility">Why Accessibility Matters</a></li>
          <li><a href="#key-principles">Key Principles</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>
      
      <section id="introduction" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Introduction</h2>
        <p>Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can:</p>
        <ul>
          <li>perceive, understand, navigate, and interact with the Web</li>
          <li>contribute to the Web</li>
        </ul>
      </section>
      
      <section id="why-accessibility" aria-labelledby="why-heading">
        <h2 id="why-heading">Why Accessibility Matters</h2>
        <p>The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.</p>
        <p>Thus the impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction that many people face in the physical world.</p>
      </section>
      
      <section id="key-principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading">Key Principles</h2>
        <p>There are four main guiding principles of accessibility:</p>
        <ol>
          <li><strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable</strong> - User interface components and navigation must be operable.</li>
          <li><strong>Understandable</strong> - Information and the operation of user interface must be understandable.</li>
          <li><strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
        </ol>
      </section>
      
      <section id="conclusion" aria-labelledby="conclusion-heading">
        <h2 id="conclusion-heading">Conclusion</h2>
        <p>Accessibility is essential for developers and organizations that want to create high-quality websites and web tools, and not exclude people from using their products and services.</p>
      </section>
      
      <footer>
        <h2>Related Posts</h2>
        <ul>
          <li>
            <a href="/posts/second-post">ARIA Best Practices</a>
          </li>
          <li>
            <a href="/posts/third-post">Semantic HTML for Better Accessibility</a>
          </li>
        </ul>
      </footer>
    </article>
  );
} 