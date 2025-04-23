import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accessible Blog',
  description: 'A blog built with accessibility in mind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header role="banner">
          <nav aria-label="Main Navigation">
            <ul role="menubar">
              <li role="none">
                <a href="/" role="menuitem">Home</a>
              </li>
              <li role="none">
                <a href="/posts" role="menuitem">Blog Posts</a>
              </li>
              <li role="none">
                <a href="/about" role="menuitem">About</a>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer role="contentinfo">
          <p>&copy; {new Date().getFullYear()} Accessible Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
} 