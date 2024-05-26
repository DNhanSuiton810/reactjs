import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function AboutUs_Footer({}) {
  return (
    <div className="footer">
      <div className="">
        <img src=""></img>
        <p>Lorem ipsum</p>
        <div>
          <a href="https://www.facebook.com/">
            <img src="https://via.placeholder.com/50" alt="placeholder" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="https://via.placeholder.com/50" alt="placeholder" />
          </a>
          <a href="https://www.twitter.com/">
            <img src="https://via.placeholder.com/50" alt="placeholder" />
          </a>
        </div>
      </div>
      <div className="">
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h3>Contact</h3>
        <p>123-456-7890</p>
        <p>mail@gmail.com</p>
      </div>
    </div>
  );
}
