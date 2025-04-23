import React from 'react';

export default function ThirdPost() {
  return (
    <article>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/posts">Blog Posts</a></li>
          <li aria-current="page">Semantic HTML for Better Accessibility</li>
        </ol>
      </nav>
      
      <header>
        <h1>Semantic HTML for Better Accessibility</h1>
        <p>
          <time dateTime="2023-12-10">December 10, 2023</time>
          <span aria-label="Author">By Admin</span>
        </p>
      </header>
      
      <div role="region" aria-label="Table of Contents">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#what-is-semantic-html">What is Semantic HTML?</a></li>
          <li><a href="#semantic-elements">Key Semantic Elements</a></li>
          <li><a href="#benefits">Accessibility Benefits</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>
      
      <section id="introduction" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Introduction</h2>
        <p>When building websites, the HTML elements you choose play a significant role in making your content accessible. Semantic HTML—using elements that clearly describe their meaning to both browsers and developers—creates a strong foundation for accessibility without requiring additional work.</p>
      </section>
      
      <section id="what-is-semantic-html" aria-labelledby="semantic-heading">
        <h2 id="semantic-heading">What is Semantic HTML?</h2>
        <p>Semantic HTML means using HTML elements according to their intended purpose—using tags that describe the type of content they contain. For example, using &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, and &lt;section&gt; elements instead of generic &lt;div&gt; elements with class names.</p>
        <p>The opposite of semantic HTML is using elements solely for their visual presentation, like using &lt;div&gt; and &lt;span&gt; for everything and controlling appearance with CSS.</p>
      </section>
      
      <section id="semantic-elements" aria-labelledby="elements-heading">
        <h2 id="elements-heading">Key Semantic Elements</h2>
        <p>Here are some important semantic elements and how they contribute to accessibility:</p>
        
        <h3>Document Structure</h3>
        <ul>
          <li><strong>&lt;header&gt;</strong> - Identifies the top of a page, article, or section</li>
          <li><strong>&lt;nav&gt;</strong> - Contains the main navigation functionality</li>
          <li><strong>&lt;main&gt;</strong> - Contains the central content unique to the page</li>
          <li><strong>&lt;article&gt;</strong> - Represents a self-contained composition</li>
          <li><strong>&lt;section&gt;</strong> - Represents a standalone section of content</li>
          <li><strong>&lt;aside&gt;</strong> - Contains content tangentially related to surrounding content</li>
          <li><strong>&lt;footer&gt;</strong> - Contains information about the section or page</li>
        </ul>
        
        <h3>Text Structure</h3>
        <ul>
          <li><strong>&lt;h1&gt; through &lt;h6&gt;</strong> - Heading levels, creating document outline</li>
          <li><strong>&lt;p&gt;</strong> - Paragraph of text</li>
          <li><strong>&lt;blockquote&gt;</strong> - Extended quotation</li>
          <li><strong>&lt;figure&gt; and &lt;figcaption&gt;</strong> - Self-contained content with optional caption</li>
          <li><strong>&lt;address&gt;</strong> - Contact information</li>
        </ul>
        
        <h3>Lists</h3>
        <ul>
          <li><strong>&lt;ul&gt;</strong> - Unordered list</li>
          <li><strong>&lt;ol&gt;</strong> - Ordered list</li>
          <li><strong>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</strong> - Description list with terms and descriptions</li>
        </ul>
      </section>
      
      <section id="benefits" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading">Accessibility Benefits</h2>
        <p>Using semantic HTML provides several accessibility advantages:</p>
        <ol>
          <li><strong>Screen reader navigation</strong> - Screen readers announce elements based on their semantic meaning, allowing users to understand the page structure and navigate between sections.</li>
          <li><strong>Keyboard navigation</strong> - Many semantic elements receive keyboard focus by default, making sites more navigable without a mouse.</li>
          <li><strong>Assistive technology support</strong> - Assistive technologies can provide special features for semantic elements, such as skipping between headings or jumping to the main content.</li>
          <li><strong>Search engine optimization</strong> - Search engines better understand your content when it's structured semantically.</li>
          <li><strong>Future-proofing</strong> - Semantic HTML is more maintainable and adaptable to new technologies and browsing methods.</li>
        </ol>
      </section>
      
      <section id="conclusion" aria-labelledby="conclusion-heading">
        <h2 id="conclusion-heading">Conclusion</h2>
        <p>Semantic HTML is one of the easiest ways to improve accessibility. By choosing the right HTML elements, you create an inherently more accessible website before adding any ARIA attributes or JavaScript enhancements. Remember: good accessibility starts with a solid HTML foundation.</p>
        <p>As you build your next web project, challenge yourself to use the most semantically appropriate elements possible. Your users—especially those relying on assistive technologies—will benefit greatly from this approach.</p>
      </section>
      
      <footer>
        <h2>Related Posts</h2>
        <ul>
          <li>
            <a href="/posts/first-post">Getting Started with Accessibility</a>
          </li>
          <li>
            <a href="/posts/second-post">ARIA Best Practices</a>
          </li>
        </ul>
      </footer>
    </article>
  );
} 