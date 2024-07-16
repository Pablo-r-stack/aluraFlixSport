import React from 'react'
import Form from '../components/Form/Form'
import Banner from '../components/Banner/Banner'

export default function NewVideo(props) {
  const { categories, fetchVideos } = props
  return (
    <>
      <Banner />
      <div className='w-full flex flex-col gap-5 items-center justify-center p-3 '>
        <h2 className='text-3xl font-bold my-5'>Cargar Nuevo video</h2>
        <Form categories={categories} fetchVideos={fetchVideos} />
      </div>
    </>
  )
}
