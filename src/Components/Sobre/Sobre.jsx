import React from 'react';
import './Sobre.css';
import sobre_img from '../../assets/sobre.png';
import play_icon from '../../assets/play-icon.png';

const Sobre = ({setPlayState}) => {
  return (
    <div className='sobre'>
      <div className="sobre-left">
        <img src={sobre_img} alt="" className='sobre-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="sobre-right">
        <h3>SOBRE A FACULDADE</h3>
        <h2>Formando os líderes de amanhã, hoje</h2>
        <p>A FATEC Jahu (Faculdade de Tecnologia de Jaú) é uma instituição pública de ensino superior vinculada ao Centro Paula Souza, reconhecida pela qualidade acadêmica e pela formação tecnológica de excelência.</p>
        <p>A unidade oferece cursos superiores gratuitos voltados às demandas do mercado de trabalho, com foco em inovação, prática profissional e desenvolvimento regional.</p>
        <p>A FATEC Jahu contribui para a formação de profissionais qualificados, preparados para atuar de forma ética, crítica e eficiente em suas áreas de conhecimento.</p>
        <p>Os cursos oferecidos pela FATEC Jahu abrangem áreas estratégicas da tecnologia e da gestão, como Análise e Desenvolvimento de Sistemas, Sistemas para Internet, Logística, entre outros, proporcionando uma formação sólida que alia teoria e prática, capacitando os alunos para enfrentar os desafios do mercado de trabalho e acompanhar as constantes evoluções tecnológicas.</p>
      </div>
    </div>
  )
}

export default Sobre;