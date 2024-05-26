import Course_Advertising from './Course_UpperComponent.jsx'
import { Courses_UpperComponentData } from '../../data/Courses_data.js'
import { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Course_SubAdvertising from './Course_LowerComponent.jsx'

function slider() {
  return (
    <AwesomeSlider>
      <div>
        {' '}
        <Course_Advertising
          title={Courses_UpperComponentData[0].title}
          description={Courses_UpperComponentData[0].description}
          buttonFunctionName={Courses_UpperComponentData[0].buttonFunctionName}
        />
      </div>
      <div>
        {' '}
        <Course_Advertising
          title={Courses_UpperComponentData[1].title}
          description={Courses_UpperComponentData[1].description}
          buttonFunctionName={Courses_UpperComponentData[1].buttonFunctionName}
        />
      </div>
      <div>
        {' '}
        <Course_Advertising
          title={Courses_UpperComponentData[2].title}
          description={Courses_UpperComponentData[2].description}
          buttonFunctionName={Courses_UpperComponentData[2].buttonFunctionName}
        />
      </div>
    </AwesomeSlider>
  )
}

export default function Courses_FullPage() {
  return (
    // <div id="Courses_FullPage">
    //   {Courses_UpperComponentData.map((course, index) => (
    //     <Course_Advertising
    //       key={index}
    //       title={course.title}
    //       description={course.description}
    //       buttonFunctionName={course.buttonFunctionName}
    //     />
    //   ))}

    <div id="Courses_FullPage">
      <Course_Advertising
        title={Courses_UpperComponentData[0].title}
        description={Courses_UpperComponentData[0].description}
        buttonFunctionName={Courses_UpperComponentData[0].buttonFunctionName}
      />
      <Course_SubAdvertising />
    </div>
  )
}
