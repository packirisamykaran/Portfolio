import React from 'react'
import "../style/Skills.css"

export default function Skills() {

  const techs:any = {
    "JavaScript" : "https://img.icons8.com/color/344/javascript--v1.png",
    "TypeScript" : "https://img.icons8.com/fluency/344/typescript.png",
    "ReactJS":"https://img.icons8.com/color/344/react-native.png",
    "NodeJS" :"https://img.icons8.com/color/344/nodejs.png",
    "ExpressJS": "https://img.icons8.com/ios-filled/344/javascript.png",
    "Java":"https://img.icons8.com/color/344/java-coffee-cup-logo--v1.png",
    "MongoDB": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
    "SQL" : "https://img.icons8.com/external-soft-fill-juicy-fish/344/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
    "Firebase": "https://img.icons8.com/color/344/firebase.png",
    "Sass":"https://img.icons8.com/color/344/sass.png"
  }

  const techDisplay = Object.keys(techs).map((tech:string, index)=>{
    return <div className='items' key={index}><img className='icon' src={techs[tech]} alt="" /><div className='skill'>{tech}</div></div>
  })

  return (
    <div className="skills" id='skills'>
      <h2>Web Technologies i have worked with</h2>
      <div className="skills-container">
        {techDisplay}
      </div>      
    </div>
  )
}
