import React from 'react'
import './Skill.css'

export default function Skill() {

  const techs: any = {
    "AWS": "https://img.icons8.com/?size=512&id=mHi46t5vguiz&format=png",
    "Golang": "https://img.icons8.com/?size=2x&id=44442&format=png",
    "TypeScript": "https://img.icons8.com/fluency/344/typescript.png",
    "ReactJS": "https://img.icons8.com/color/344/react-native.png",
    "NodeJS": "https://img.icons8.com/color/344/nodejs.png",
    "NextJS": "https://img.icons8.com/color/344/nextjs.png",
    "ExpressJS": "https://img.icons8.com/ios-filled/344/javascript.png",
    "Java": "https://img.icons8.com/color/344/java-coffee-cup-logo--v1.png",
    "Python": "https://img.icons8.com/fluency/344/python.png",
    "MongoDB": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
    "SQL": "https://img.icons8.com/external-soft-fill-juicy-fish/344/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
    // "Firebase": "https://img.icons8.com/color/344/firebase.png",
    "Sass": "https://img.icons8.com/color/344/sass.png",
    // "Rust":"https://cdn.icon-icons.com/icons2/2699/PNG/512/rust_lang_logo_icon_169776.png"
  }

  const techDisplay = Object.keys(techs).map((tech: string, index) => {
    return <div className='skill' key={index}><img className='icon' src={techs[tech]} alt="" /><div className='skill'>{tech}</div></div>
  })
  return (
    <div className="skills">
      <div className="heading">
        Web Technologies
      </div>
      <div className="container section-bg">
        {techDisplay}
      </div>
    </div>
  )
}
