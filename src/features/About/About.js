import React from 'react'
import './About.css'

import { useSelector } from 'react-redux';
import { selectTheme } from '../../AppSlice';

import heroDrums from '../../images/Drums-Graham.jpeg'

const About = () => {

    const theme = useSelector(selectTheme)

    const skillStyle = {
        borderBottom: `1px solid ${theme.square1}`
    }

    const imgStyle = {
      boxShadow: `0px 0px 0px 8px ${theme.backgroundColor}, 0px 0px 0px 10px ${theme.square1}`
    }

  return (
    <div className="about-container about" id="about">
      <div>
        <img src={heroDrums} alt='drum hero' style={imgStyle}/>
        <ul className="about-section-skills">
          {/* <SkillList /> */}
          <li id="react" style={skillStyle}>Technical Support & Troubleshooting</li>
          <li id="html" style={skillStyle}>Customer Service & Communication</li>
          <li id="css" style={skillStyle}>Network Protocols</li>
          <li id="java" style={skillStyle}>Problem Resolution & Analytical Thinking</li>
          <li id="git" style={skillStyle}>Computer Programming / Web Development</li>
          {/* <li id="SQL"><FiDatabase className='skill-icon' />SQL</li> */}
        </ul>
      </div>
      <div>
        <h2>About Me</h2>
        <div className="about-bio">
          <p className='bio'>Hey there,</p>
          <p className='bio'>I'm a dedicated Lessons Coordinator with a strong passion for problem-solving and a real knack for all things IT. Right now, I'm on a journey to explore the exciting world of Information Technology and how I can bring my skills to the table.</p>
          <p className='bio'>My career has been shaped at Long & McQuade Musical Instruments, where I've spent a solid four years handling lessons administration and providing top-notch customer service. This role has taught me the importance of effective communication and the value of teamwork. Whether it's managing schedules, resolving customer issues, or even leading a team, I've learned to pay attention to the nitty-gritty details and take a proactive approach.</p>
          <p className='bio'>What truly sets me apart is my unyielding commitment to learning and growth. I'm currently in pursuit of the Google IT Support Specialist certification, focusing on deskside support, troubleshooting, and tackling all sorts of tech challenges. This lines up perfectly with my aspiration to join the IT team at McCain Foods. On the side, I've dabbled in web development, taking on projects like a Monopoly money tracking web app and a PokeDex using the PokeAPI. It's all about staying adaptable and welcoming new challenges.</p>
          <p className='bio'>With a background in administration, a Bachelor's degree from the University of Lethbridge, and a Diploma from Red Deer Polytechnic, I've gained valuable skills in time management, project coordination, and teamwork. I'm excited about the idea of blending my IT expertise with a customer-centric approach to contribute to your IT department's success. I'd love to chat more about how I can bring my unique skill set to your team.</p>
        </div>
      </div> 
    </div>
  )
}

export default About