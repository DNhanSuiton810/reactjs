import "bootstrap/dist/css/bootstrap.css";
import "./Courses.css";

export default function Course_Advertising({
  title,
  description,
  buttonFunctionName,
}) {
  return (
    <div id="Course_Advertising_Sliding">
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button">{buttonFunctionName}</button>
    </div>
  );
}
