import "../index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Course_UpperComponent({
  title,
  description,
  buttonFunctionName,
}) {
  return (
    <div id="Course_Advertising_Sliding">
      <h3>{title}</h3>
      <p className="col-md-4">{description}</p>
      <button type="button">{buttonFunctionName}</button>
    </div>
  );
}
