import React from 'react'
import { media } from '../assets'
import "../style/Home.css"
import devImg from "../images/dev-vector.png";
import Coding from '../coding/Coding';
import Skills from '../skills/Skills';
import TypeWriterEffect from 'react-typewriter-effect';
import Projects from '../projects/Projects';



export default function Home() {



  return (
    <div className="home">
      <div className="intro">
        <div className="greet-title">
          <div className="greet">
            Hi
            <img src={media.ironman} alt="gif" className="gif"></img><br />
            I'M&nbsp;
            <span className="name">
              PACKIRISAMY KARAN
            </span>
          </div>
          <div className="title">
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Rubik, sans-serif',
                color: 'white',
                fontWeight: 400,
                fontSize: '1.3rem',

                // marginInline: 'auto',
                whiteSpace: 'nowrap',
                // width: 'max-content',
                border: 'none',
                outline: 'none',
                padding: "0.2rem"
              }}
              className="title"
              startDelay={500}
              cursorColor="#ef476f"
              blink="true"
              multiText={
                Array(100).fill("Full-Stack Web Developer")
              }
              multiTextDelay={1000}
              typeSpeed={100}
            />
          </div>
        </div>
        <img src={devImg} alt="" className="dev-vector" />
      </div>
      <Coding />
      <Skills />
      <Projects />
    </div>
  )
}
