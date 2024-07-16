import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import apiService from './services/apiService.js';
import NewVideo from './pages/NewVideo.jsx';
import Modal from './components/Modal/Modal.jsx';
import Form from './components/Form/Form.jsx';
import WatchVideo from './pages/WatchVideo.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  const [videoList, setVideoList] = useState([]);
  const[categories, setCategories] = useState([
    {
      title:"Futbol"
    },
    {
      title:"Basquetbol"
    },
    {
      title:"Contacto"
    },
    {
      title:"Automovilismo"
    }
  ]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    fetchVideos();
}, []);

  const fetchVideos = (async()=>{
    try{
      const data = await apiService.fetchSportsData();
      setVideoList(data);
    }catch(error){
      console.error('Error fetching data')
    }
  })

  const handleOpenModal = (video) => {
    // setCurrentPelicula(pelicula);
    setCurrentVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };


  return (
    <BrowserRouter className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage videoList={videoList} categories={categories} fetchVideos={fetchVideos} handleOpenModal={handleOpenModal} />} />
        <Route path="/newVideo" element={<NewVideo categories={categories} fetchVideos={fetchVideos} />} />
        <Route path="/watch/:id" element={<WatchVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Modal show={showModal} handleClose={handleCloseModal} >
        <Form categories={categories} currentVideo={currentVideo} fetchVideos={fetchVideos} updateVid={true} handleCloseModal={handleCloseModal} />
      </Modal>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
