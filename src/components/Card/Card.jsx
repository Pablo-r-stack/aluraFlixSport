import React from 'react'
import { TiDelete } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import apiService from '../../services/apiService';
import { Link } from 'react-router-dom';
export default function Card({ video, fetchVideos, handleOpenModal }) {

    if (!video) {
        return null; // Puedes manejar el caso de video undefined como prefieras
    }

    const { title, url, id } = video;

    // Extraer el ID del video de la URL de YouTube
    const videoId = url.split('v=')[1]?.split('&')[0];

    // Construir la URL de la miniatura
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    const deleteVideo = async (e) => {
        e.preventDefault();
        const response = await apiService.deleteVideo(id);
        if (response) {
            console.log(response);
            alert('Video Borrado Exitosamente');
            fetchVideos();
        }
    }

    const editVideo = (e) => {
        e.preventDefault();
        handleOpenModal(video);
        console.log('Click Editar');
    }

    return (
        <div className='container relative max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer'>
            <img className='w-full block object-cover transition duration-300 filter hover:filter-none' src={thumbnailUrl} alt="Video thumbnail" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                <Link to={`/watch/${id}`} className='font-bold text-white text-xl mb-2 hover:scale-90 transition-all duration-300'>
                    {title}
                </Link>
                {handleOpenModal ? <div className='absolute top-0 right-0 flex gap-3 mr-1 mt-1'>
                    <FaRegEdit onClick={editVideo} className='text-white hover:scale-125 transition duration-300' />
                    <TiDelete onClick={deleteVideo} className='text-white hover:scale-125 transition duration-300' />
                </div> : <></>}
            </div>
        </div>
    )
}
