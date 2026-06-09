export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-tag">cozy, home-style performances by student artists &#127928;</p>
        <h1 className="hero-title">
          concerts under<br />berkeley
        </h1>
        <p className="hero-subtitle">sick beats</p>
        <div className="hero-buttons">
          <a href="#events" className="btn btn-primary">upcoming events</a>
          <a href="#join" className="btn btn-outline">contact us!</a>
          <a href="/blog" className="btn btn-outline">blog &#128191;</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>about us!</span>
        <div className="scroll-line"></div>
      </div>
    </header>
  );
}
