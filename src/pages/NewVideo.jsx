import React from 'react'
import Form from '../components/Form/Form'

export default function NewVideo(props) {
  const { categories, fetchVideos } = props
  return (
    <div className='container flex flex-col gap-5 items-center p-5 h-screen'>
        <h2 className='text-3xl font-bold my-5'>Cargar Nuevo video</h2>
        <Form categories={categories} fetchVideos={fetchVideos} />
    </div>
  )
}
