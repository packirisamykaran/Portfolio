import React from 'react'
import { media } from '../../sections/assets'

export default function Coding() {
  return (
    <div id='about' className="coding-journey">
      <h2>How i &nbsp;<mark>started</mark> &nbsp;coding <img src={media['coding-gif']} className="coding-gif" alt="" /></h2>
      <div className="journey">
        <div className="journey">
          <div>In 2021, I began my programming journey with CS50, exploring Python and machine learning.</div>
          <div>Discovering <mark>Java</mark> and its related technologies, <mark>J2EE</mark>, <mark>servlets</mark>, <mark>JSP</mark>, <mark>OOPS</mark>, and <mark>SQL</mark>, captivated me.</div>
          <div>I fell in love with web technology and its practicality in our daily lives.</div>
          <div>Now, I'm actively involved in the <mark>web3 space</mark>, launching NFT projects and an NFT marketplace, fueled by my passion for <mark>blockchain</mark> technology's evolving applications.</div>
        </div>
      </div>
    </div>
  )
}
