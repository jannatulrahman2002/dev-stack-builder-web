import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Footer */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>DS</span>
              <h3>Dev Stack</h3>
            </div>

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="footer-socials">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-column">
            <h4>PRODUCT</h4>

            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>

            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4>LEGAL</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;