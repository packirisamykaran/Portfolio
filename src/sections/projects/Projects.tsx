import React from 'react'
import projectDetails from './projectDetails'
import './Project.css'

export default function Projects() {



  const projectList = Object.keys(projectDetails).map((key, index) => {
    try {
      return (
        <div key={index} className="project section-bg">
          <img src={require("./img/" + key + " desktop.png")} alt="Mobile View" />
          <div className="name">{key}</div>
          <div className="description">{projectDetails[key].description}</div>
          <a href={projectDetails[key].project} className="button">View Project</a>
          {/* <a href={projectDetails[key].github} className="github">Github</a> */}
        </div>
      )
    }
    catch (err) {
      console.log(err)
    }
  })

  return (
    <div className='projects section'>
      <h3 className="heading">
        Projects
      </h3>
      <div className="container">
        {projectList}
      </div>
    </div>
  )
}
