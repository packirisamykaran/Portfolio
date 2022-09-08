import React from 'react'
import "../style/Projects.css"
import projectDetails from './projectDetails'

export default function Projects() {

  const projectList = Object.keys(projectDetails).map((key, index)=>{
    try{
      return (
        <div key={index} className="items">
              <img src={require("./img/"+key+".png")} alt="img" />
              <div className="name">{key}</div>
              <div className="description">{projectDetails[key].description}</div>
              <a href={projectDetails[key].project} className="view">View Project</a>
              <a href={projectDetails[key].github} className="github">Github</a>
            </div>
      )
    }
    catch(err){
      console.log(err)
    }
  })


  return (
    <div className='projects' id='projects'>
        <h1><mark>Projects</mark></h1>
        <div className="list">
          {projectList}
        </div>
    </div>
  )
}
