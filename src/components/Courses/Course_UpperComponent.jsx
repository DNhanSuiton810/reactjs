import 'bootstrap/dist/css/bootstrap.css'
import './Courses.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const slider = (
  <AwesomeSlider>
    <div>{Course_Advertising}</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
)

export default function Course_Advertising({ title, description, buttonFunctionName }) {
  return (
    <div id="Course_Advertising_Sliding">
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button">{buttonFunctionName}</button>
    </div>
  )
}
