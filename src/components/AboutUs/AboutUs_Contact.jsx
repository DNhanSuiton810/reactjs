import "./AboutUs.css";

export default function AboutUs_Contact() {
  return (
    <div className="AboutUs_Contact">
      <div className="contact-form">
        <h2>
          <strong>Contact</strong>Us
        </h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name:"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            required
          />

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Feedback:"
          ></textarea>

          <button type="submit" className="button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
