import React from 'react'
import Card from '../Card/Card'

export default function SportSection({ category, videos, fetchVideos, handleOpenModal }) {
    if(!category || !videos || videos.length === 0) return null;

    return (
        <section className='container flex flex-col'>
            <h3 className='font-bold text-2xl m-3'>{category.title}</h3>
            <div className='container flex gap-2 pb-1 flex-nowrap overflow-x-auto'>
                {videos.map((video) => (
                    <div className="flex-shrink-0 w-64" key={video.id}>
                        <Card video={video} fetchVideos={fetchVideos} handleOpenModal={handleOpenModal} />
                    </div>
                ))}
            </div>
        </section>
    )
}
