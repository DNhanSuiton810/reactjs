import "bootstrap/dist/css/bootstrap.css";

export default function AboutUs_Form({ title, name, email, feedback }) {
  return (
    <div id="AboutUs_Form">
      <h3>{title}</h3>
      <div className="d-block">
        <input type="text" placeholder={name} className="name"></input>
        <input type="text" placeholder={email} className="email"></input>
        <input type="text" placeholder={feedback} className="feedback"></input>
      </div>
      <button>SEND</button>
    </div>
  );
}
