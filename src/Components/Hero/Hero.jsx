import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Faculdade de Tecnologia de Jahu</h1>
        <p>A Faculdade de Tecnologia de Jahu – FATEC-JAHU é uma Instituição Pública de Ensino Superior que oferece cursos de graduação para formação de Tecnólogos, visando atender segmentos atuais e emergentes da atividade econômica</p>
        <button className="btn">Explore mais <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero;