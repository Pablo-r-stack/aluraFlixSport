import React from 'react'

export default function Button(props) {
    const {name} = props
  return (
    <button className='bg-blue-600 py-2 rounded-lg text-white drop-shadow-lg hover:scale-105 transition-all duration-300'>{name}</button>
  )
}
