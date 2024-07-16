import axios from "axios";

const API_URL = 'https://alura-geek-api-kohl.vercel.app/videos'

const fetchSportsData = async() =>{
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }catch(error){
        console.error('Ocurrio un error ', error);
        throw error;
    }
}

const uploadNewVideo = async(newVideo)=>{
    try {
        const response = await axios.post(API_URL, newVideo);
        return response.data;
    } catch (error) {
        console.error('Ocurrio un errror al enviar el video', error);
        throw error;
    }
}

const getVideoById = async(id)=>{
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data;
    } catch (error) {
        console.error('No se encontro el video con la id deseada');
        throw error;
    }
}

const deleteVideo = async(id)=>{
    try{
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data
    }catch(error){
        console.error('Ocurrio un error al borrar el video', error);
        throw error;
    }
}

const updateVideo = async(id, newVideo)=>{
    try {
        const response = await axios.put(`${API_URL}/${id}`, newVideo);
        return response.data;
    } catch (error) {
        console.error('Ocurrio un error al actualizar el video', error);
        throw error;
    }
}

const apiService = {
    fetchSportsData, uploadNewVideo, deleteVideo, updateVideo, getVideoById
};

export default apiService;