import React from 'react'
import { media } from '../assets'
import "../style/Home.css"
import devImg from "../images/dev-vector.png";
import Coding from '../coding/Coding';
import Skills from '../skills/Skills';

export default function Home() {
  return (
    <div className="home">
        <div className="intro">
          <div className="greet-title">
            <div className="greet">
                Hi
                <img src={media.ironman} className="gif"></img><br/>
                I'M&nbsp;
                <span className="name">
                   PACKIRISAMY KARAN
                </span>
            </div>
            <div className="title">Full-Stack Web Developer</div>
          </div>
          <img src={devImg} alt="" className="dev-vector" />
        </div>
        <Coding/>
        <Skills/>
    </div>
  )
}
