function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src=    "/logo-text.png" alt="Dev Stack" />
      
      
      </div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
} 
export default Navbar ;