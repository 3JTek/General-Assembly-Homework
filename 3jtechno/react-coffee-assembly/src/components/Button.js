import React from 'react'

const Button = (props) => {
  const {url = '', text, target = ''} = props
  return (
    <a target={target} href={url}>{text}</a>
  )
}

export default Button
