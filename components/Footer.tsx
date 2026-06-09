export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="nav-logo">CUB</h3>
            <p>Concerts Under Berkeley<br />UC Berkeley&apos;s student-run music club.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#join">Join Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
              <a href="#" className="social-link" aria-label="Twitter">X</a>
              <a href="#" className="social-link" aria-label="YouTube">YT</a>
              <a href="#" className="social-link" aria-label="Spotify">SP</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Concerts Under Berkeley. Made with &#9829; at Cal.</p>
        </div>
      </div>
    </footer>
  );
}
