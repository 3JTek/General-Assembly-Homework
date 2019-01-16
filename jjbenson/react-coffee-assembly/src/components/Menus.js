import React from 'react'

//Import component
import Tag from './Tag'

const Menus = ({title, links, text})=>{
  return (
    <section id='menus'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>{title}</h2>
            <Tag tag={'p'} arr={text} />
            <Tag tag={'a'} arr={links}/>
            {/*text.map((el,i) => <p key={i}>{el}</p>)*/}
            {/*links.map((el,i) => <a key={i} href={el.link} target='_blank' rel = 'noopener noreferrer' >{el.content}</a>)*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menus
