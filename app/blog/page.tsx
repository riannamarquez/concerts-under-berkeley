import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Concerts Under Berkeley',
};

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', textAlign: 'center', padding: '0 24px' }}>
      <span className="section-tag">Coming Soon</span>
      <h1 className="section-title">The CUB Blog</h1>
      <p style={{ color: 'var(--gray)', maxWidth: '480px', lineHeight: '1.7' }}>
        Stories, recaps, artist spotlights, and more — dropping soon. Check back after our next show!
      </p>
      <a href="/" className="btn btn-primary" style={{ marginTop: '8px' }}>Back to Home</a>
    </main>
  );
}
