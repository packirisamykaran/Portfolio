import React from 'react'
import { media } from '../assets'

export default function Coding() {
  return (
    <div id='about' className="coding-journey">
            <h2>How i &nbsp;<mark>started</mark> &nbsp;coding <img src={media['coding-gif']} className="coding-gif" alt="" /></h2>
            <div className="journey">
              <div> i began programming in 2021 when i was trying to build an online business.</div>
              {/* <div>i learned c, python and spent some time playing around with machine learning piplines and models.</div> */}
              <div>I came across <mark>java</mark>, learned about <mark>J2EE</mark>, <mark>servlet</mark>, <mark>JSP</mark>, <mark>OOPS</mark> concepts and <mark>SQL</mark>.</div>
              <div> That's when it clicked for me. I loved the ideas of web technology and how they work and are useful in our daily lives.</div>
              <div>i'm currently doing full-stack web development with <mark>MERN Stack </mark></div>              
            </div>
        </div>
  )
}
