import React from 'react';

export default function SecondPost() {
  return (
    <article>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/posts">Blog Posts</a></li>
          <li aria-current="page">ARIA Best Practices</li>
        </ol>
      </nav>
      
      <header>
        <h1>ARIA Best Practices</h1>
        <p>
          <time dateTime="2023-12-05">December 5, 2023</time>
          <span aria-label="Author">By Admin</span>
        </p>
      </header>
      
      <div role="region" aria-label="Table of Contents">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#aria-basics">ARIA Basics</a></li>
          <li><a href="#common-patterns">Common ARIA Patterns</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>
      
      <section id="introduction" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Introduction</h2>
        <p>ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and web applications more accessible to people with disabilities. These attributes supplement HTML so that interactions and widgets commonly used in applications can be passed to assistive technologies.</p>
      </section>
      
      <section id="aria-basics" aria-labelledby="basics-heading">
        <h2 id="basics-heading">ARIA Basics</h2>
        <p>ARIA works by modifying the accessibility tree, which is used by assistive technologies like screen readers. It does this through three main features:</p>
        <ul>
          <li><strong>Roles</strong> - Define what an element is or does</li>
          <li><strong>Properties</strong> - Define attributes of elements</li>
          <li><strong>States</strong> - Define the current condition of elements</li>
        </ul>
        <p>ARIA doesn't change any functionality or appearance of an element—it only changes how that element is announced or described to users of assistive technologies.</p>
      </section>
      
      <section id="common-patterns" aria-labelledby="patterns-heading">
        <h2 id="patterns-heading">Common ARIA Patterns</h2>
        <p>Here are some common patterns where ARIA is particularly useful:</p>
        <h3>1. Landmark Roles</h3>
        <p>Landmark roles help users navigate through sections of a page:</p>
        <pre><code>
&lt;header role="banner"&gt;
&lt;nav role="navigation"&gt;
&lt;main role="main"&gt;
&lt;footer role="contentinfo"&gt;
        </code></pre>
        
        <h3>2. Live Regions</h3>
        <p>Live regions announce dynamic content changes:</p>
        <pre><code>
&lt;div aria-live="polite"&gt;Content that will update&lt;/div&gt;
        </code></pre>
        
        <h3>3. Form Controls</h3>
        <p>Making custom controls accessible:</p>
        <pre><code>
&lt;div role="button" tabindex="0" aria-pressed="false"&gt;Toggle&lt;/div&gt;
        </code></pre>
      </section>
      
      <section id="best-practices" aria-labelledby="practices-heading">
        <h2 id="practices-heading">Best Practices</h2>
        <p>When using ARIA, follow these best practices:</p>
        <ol>
          <li><strong>Use native HTML elements when possible</strong> - They have built-in accessibility features.</li>
          <li><strong>Don't change native semantics</strong> - Don't add role="button" to a &lt;button&gt; element.</li>
          <li><strong>Make interactive elements keyboard accessible</strong> - Custom controls need keyboard event handlers.</li>
          <li><strong>Hide decorative elements from screen readers</strong> - Use aria-hidden="true" for decorative elements.</li>
          <li><strong>Label all form controls and interactive elements</strong> - Use aria-label or aria-labelledby.</li>
        </ol>
        <p>Remember the first rule of ARIA: "No ARIA is better than bad ARIA." Only use ARIA when necessary, and test thoroughly with actual assistive technologies.</p>
      </section>
      
      <section id="conclusion" aria-labelledby="conclusion-heading">
        <h2 id="conclusion-heading">Conclusion</h2>
        <p>ARIA is a powerful tool for enhancing accessibility when used correctly. By understanding and following best practices, you can ensure your web applications are more usable for people with disabilities. Always remember that the goal is to provide an equivalent experience for all users, regardless of how they interact with your website.</p>
      </section>
      
      <footer>
        <h2>Related Posts</h2>
        <ul>
          <li>
            <a href="/posts/first-post">Getting Started with Accessibility</a>
          </li>
          <li>
            <a href="/posts/third-post">Semantic HTML for Better Accessibility</a>
          </li>
        </ul>
      </footer>
    </article>
  );
} 