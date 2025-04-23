export default function Home() {
  return (
    <article>
      <header>
        <h1>Welcome to My Accessible Blog</h1>
      </header>
      <section aria-labelledby="latest-posts">
        <h2 id="latest-posts">Latest Posts</h2>
        <ul>
          <li>
            <article>
              <h3>
                <a href="/posts/first-post">Getting Started with Accessibility</a>
              </h3>
              <p>Learn the basics of web accessibility and why it matters.</p>
              <time dateTime="2023-12-01">December 1, 2023</time>
            </article>
          </li>
          <li>
            <article>
              <h3>
                <a href="/posts/second-post">ARIA Best Practices</a>
              </h3>
              <p>Implementing ARIA attributes correctly in your web applications.</p>
              <time dateTime="2023-12-05">December 5, 2023</time>
            </article>
          </li>
        </ul>
      </section>
      <section aria-labelledby="about-blog">
        <h2 id="about-blog">About This Blog</h2>
        <p>This blog is dedicated to sharing knowledge about web development, with a focus on creating accessible web experiences for everyone.</p>
      </section>
    </article>
  );
} 