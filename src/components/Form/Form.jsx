import React, { useEffect, useState } from 'react';
import Field from '../Field/Field';
import OptionList from '../OptionList/OptionList';
import Button from '../Button/Button';
import apiService from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
    const { categories, currentVideo,fetchVideos, updateVid, handleCloseModal } = props; // Destructura categories desde props correctamente
    const navigate = useNavigate();
    const [newVideo, setNewVideo] = useState({
        title: '',
        category: '',
        url: '',
    });
    
    useEffect(() => {
        if (currentVideo) {
            const { title, category, url } = currentVideo;
            setNewVideo({ title, category, url });
        }
    }, [currentVideo]);

    const validateForm = ()=>{
        for (const [key, value] of Object.entries(newVideo)) {
            if (!value.trim()) {
                alert(`Por favor, ingresa un valor válido para ${key}.`);
                return false;
            }
        }
        return true;
    };
    
    const sendForm = async (e) => {
        e.preventDefault();
        if(validateForm()){
            const response = updateVid ? await apiService.updateVideo(currentVideo.id, newVideo) : await apiService.uploadNewVideo(newVideo);
            if(response){
                alert('exito!');
                fetchVideos();
                if(handleCloseModal) handleCloseModal();
                navigate('/');
            }
        }
    };

    return (
        <form onSubmit={sendForm} className='container flex flex-col gap-2 justify-evenly text-2xl p-5 h-2/4 bg-black rounded-lg drop-shadow-lg'>
            <Field title='Titulo del video' placeholder='ingresa un titulo' value={newVideo.title} setNewVideo={setNewVideo} name="title" required />
            <OptionList categories={categories} value={newVideo.category} setNewVideo={setNewVideo} required/>
            <Field title='Url del video' placeholder='Ingresa una url' value={newVideo.url} setNewVideo={setNewVideo} name="url" required/>
            <Button name='Enviar' callback='' />
        </form>
    );
}
