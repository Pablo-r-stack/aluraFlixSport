import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/apiService';
import Banner from '../components/Banner/Banner';

const WatchVideo = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const fetchedVideo = await apiService.getVideoById(id);
                setVideo(fetchedVideo);
            } catch (error) {
                console.error('Error fetching video:', error);
                setError(true);
            }
        };

        fetchVideo();
    }, [id]); // Dependencia id para volver a cargar cuando cambie

    if (error) {
        navigate('*');
    }

    if (!video) {
        return null; // Puedes mostrar un spinner de carga o un mensaje de espera mientras se carga el video
    }

    // Extraer el ID del video de la URL de YouTube
    const videoId = video.url.split('v=')[1]?.split('&')[0];
    // Construir la URL del video de YouTube
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (<>
        <Banner />
        <main className='w-full flex flex-col p-4 gap-5 h-screen'>
            <h2 className='text-2xl font-bold'>{video.title}</h2>
            <div className="w-full flex flex-col items-center">
                <iframe
                    title="YouTube video player"
                    className="w-full h-48 sm:h-96 md:h-108  max-w-4xl"
                    src={videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <span className='text-xs italic'>Categoría: {video.category}</span>

        </main>
    </>
    );
};

export default WatchVideo;