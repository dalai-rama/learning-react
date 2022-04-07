import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <p> {props.text1}: {props.value1}  </p>
      <p> {props.text3}: {props.value3} </p>
      <p> {props.text2}: {props.value2} </p>
     </div>
  )
}

const Total = ({exercises}) => <p>Number of exercises: {exercises} </p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content text1={course.parts[0].name} value1={course.parts[0].exercises}
      text2={course.parts[1].name} value2={course.parts[1].exercises}
      text3={course.parts[2].name} value3={course.parts[2].exercises} />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />

    </div>
  )
}



/* const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content
      text1 = {parts[0].name} value1 = {parts[0].exercises} 
      text2 = {parts[1].name} value2 = {parts[1].exercises}
      text3 = {parts[2].name} value3 = {parts[2].exercises}
      />
          
      <Total exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
} */

ReactDOM.render(<App />, document.getElementById('root'))