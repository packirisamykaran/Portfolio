import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import devImg from "../images/dev-vector.png";
import { media } from '../../sections/assets'
import "./Hero.css"
export default function Hero() {
  return (
    <div className="hero">
      <img src={devImg} alt="" className="dev-vector" />

      <div className="greet-title">
        <div className="greet">
          Hi i'm Karan
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
              Array(100).fill("Full-Stack Web3 Developer")
            }
            multiTextDelay={1000}
            typeSpeed={100}
          />
        </div>
      </div>
    </div>
  )
}
