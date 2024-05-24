import { COURSE_UPPER } from "./data.js";
import { COURSE_LOWER } from "./data.js";
import "./index.css";
import Course_UpperComponent from "./components/Course_UpperComponent.jsx";
import Course_LowerComponent from "./components/Course_LowerComponent.jsx";

function Course_FullPage() {
  return (
    <div id="Course_Page">
      <Course_UpperComponent
        title={COURSE_UPPER[0].title}
        description={COURSE_UPPER[0].description}
        buttonFunctionName={COURSE_UPPER[0].buttonFunctionName}
      />
      <div></div>
      <div
        id="LOWER"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Course_LowerComponent
          image={COURSE_LOWER[0].image}
          title={COURSE_LOWER[0].title}
          description={COURSE_LOWER[0].description}
        />
        <Course_LowerComponent
          image={COURSE_LOWER[1].image}
          title={COURSE_LOWER[1].title}
          description={COURSE_LOWER[1].description}
        />
        <Course_LowerComponent
          image={COURSE_LOWER[2].image}
          title={COURSE_LOWER[2].title}
          description={COURSE_LOWER[2].description}
        />
        <Course_LowerComponent
          image={COURSE_LOWER[3].image}
          title={COURSE_LOWER[3].title}
          description={COURSE_LOWER[3].description}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="new">
      <Course_FullPage />
    </div>
  );
}

export default App;
