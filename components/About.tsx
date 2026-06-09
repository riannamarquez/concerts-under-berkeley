export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">More Than Just Music</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">&#9835;</div>
            <h3>Live Performances</h3>
            <p>We organize live concerts, open mics, and jam sessions across campus, showcasing talented student musicians of all genres.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">&#9733;</div>
            <h3>Artist Spotlights</h3>
            <p>We highlight and support emerging student artists, giving them a platform to share their music with the Berkeley community.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">&#9829;</div>
            <h3>Community</h3>
            <p>More than a club — we&apos;re a family of music lovers. Connect with fellow students who share your passion for live music.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <details className="meet-team-dropdown">
          <summary className="meet-team-toggle">
            <span>Meet the Team</span>
            <span className="meet-team-arrow">&#9660;</span>
          </summary>
          <div className="meet-team-content">
            <p className="meet-team-placeholder">Team bios coming soon. Stay tuned!</p>
          </div>
        </details>
      </div>
    </section>
  );
}
