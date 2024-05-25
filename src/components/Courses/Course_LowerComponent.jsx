import "bootstrap/dist/css/bootstrap.css";

export default function Course_SubAdvertising({ image, title, description }) {
  return (
    <div id="Course_LowerComponent">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
