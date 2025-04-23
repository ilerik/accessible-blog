import React from 'react';
import Link from 'next/link';

export default function Posts() {
  return (
    <React.Fragment>
      <h1>Blog Posts</h1>
      <nav aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">Blog Posts</li>
        </ol>
      </nav>
      
      <section>
        <article aria-labelledby="post-1">
          <h2 id="post-1">
            <Link href="/posts/first-post/">Getting Started with Accessibility</Link>
          </h2>
          <p>Learn the basics of web accessibility and why it matters.</p>
          <time dateTime="2023-12-01">December 1, 2023</time>
          <p>
            <Link href="/posts/first-post/" aria-label="Read more about Getting Started with Accessibility">Read more</Link>
          </p>
        </article>
        
        <article aria-labelledby="post-2">
          <h2 id="post-2">
            <Link href="/posts/second-post/">ARIA Best Practices</Link>
          </h2>
          <p>Implementing ARIA attributes correctly in your web applications.</p>
          <time dateTime="2023-12-05">December 5, 2023</time>
          <p>
            <Link href="/posts/second-post/" aria-label="Read more about ARIA Best Practices">Read more</Link>
          </p>
        </article>
        
        <article aria-labelledby="post-3">
          <h2 id="post-3">
            <Link href="/posts/third-post/">Semantic HTML for Better Accessibility</Link>
          </h2>
          <p>How using proper HTML elements improves accessibility without extra effort.</p>
          <time dateTime="2023-12-10">December 10, 2023</time>
          <p>
            <Link href="/posts/third-post/" aria-label="Read more about Semantic HTML for Better Accessibility">Read more</Link>
          </p>
        </article>
      </section>
    </React.Fragment>
  );
} 