import React from 'react'

const Tag = (props) => {

  let list
  switch(props.tag){
    case 'p': list = props.arr.map((el,i) => <p key={i}>{el}</p>)
      break
    case 'a': list = props.arr.map((el,i) => <a key={i} href={'./'+el.link}>{el.content}</a>)
      break
  }

  return(
    <div>
      {list}
    </div>
  )
}

export default Tag
