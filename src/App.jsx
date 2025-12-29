import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Cursos from './Components/Cursos/Cursos';
import Sobre from './Components/Sobre/Sobre';
import Campus from './Components/Campus/Campus';
import Depoimentos from './Components/Depoimentos/Depoimentos';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Nossos cursos' title='O que oferecemos' />
        <Cursos />
        <Sobre setPlayState={setPlayState} />
        <Title subTitle='Galeria' title='Fotos do Campus' />
        <Campus /> 
        <Title subTitle='DEPOIMENTOS' title='O que os estudantes dizem' />        
        <Depoimentos />
        <Title subTitle='Contato' title='Entre em Contato' />
        <Contato />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App;