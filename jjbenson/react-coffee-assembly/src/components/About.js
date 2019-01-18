import React from 'react'

//Import component
import Tag from './Tag'

//Destructure props
const About = ({title,text})=>{
  return (
    <section id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>{title}</h2>
            {/*I dont think this Tag component is a good idea but useful for some practice*/}
            <Tag tag={'p'} arr={text} />
            {/*text.map((el,i) => <p key={i}>{el}</p>)*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
