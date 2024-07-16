import React from 'react'
import Banner from '../components/Banner/Banner'
import SportSection from '../components/SportSection/SportSection'

export default function HomePage(props) {
    const { videoList, categories, fetchVideos, handleOpenModal } = props;

    
    if(!videoList){
        return null;
    }

    const latestVideo = videoList[(videoList.length-1)];

    return (
        <>
            <Banner latestVideo={latestVideo}  />
            <main className='container max-w-5xl self-center flex flex-col items-center justify-center'>
                {categories.map(category => (
                    <SportSection
                     category={category} 
                     key={category.title} 
                     videos={videoList.filter(video=> video.category === category.title)}
                     fetchVideos={fetchVideos}
                     handleOpenModal={handleOpenModal}
                     />
                ))}
            </main>

        </>
    )
}
