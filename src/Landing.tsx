import "./Landing.css";

function Landing() {
  return (
    <div className="container">
      <img src="assets/H2.png" alt="" className="H2" />
      <img src="assets/Dots.png" alt="" className="top_dots" />
      <img src="assets/rect.png" alt="" className="top_rect" />
      <img src="assets/Rectangle 25.png" alt="" className="top_half" />
      <div>
        <img src="assets/ACM Logo.png" alt="ACM Logo" className="logo" />
        <div className="acm">ACM Organizing Committee Selections</div>
        <button className="register-button">REGISTER NOW</button>
        <button className="faq">FAQs</button>
      </div>
      <img src="assets/rect.png" alt="" className="bottom_rect" />
      <img src="assets/Dots.png" alt="" className="bottom_dots" />
      <img src="assets/Rectangle 24.png" alt="" className="bottom_half" />
      <img src="assets/H2 rev.png" alt="" className="H2_rev" />
    </div>
  );
}

export default Landing;
