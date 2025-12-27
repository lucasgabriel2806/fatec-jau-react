import React from 'react';
import './Cursos.css';
import curso_1 from '../../assets/dsm.jpg';
import curso_2 from '../../assets/logistica.jpg';
import curso_3 from '../../assets/construcao-naval.jpg';
import { FaLaptop, FaAddressBook, FaShip } from "react-icons/fa";

const Cursos = () => {
  return (
    <div className='cursos'>
        <div className="curso">
            <img src={curso_1} alt="" />
            <div className="caption">
                <FaLaptop size='3em' />
                <p>Desenvolvimento de Software <br /> Multiplataforma</p>
            </div>
        </div>
        <div className="curso">
            <img src={curso_2} alt="" />
            <div className="caption">
                <FaAddressBook size='3em' />
                <p>Logística</p>
            </div>
        </div>
        <div className="curso">
            <img src={curso_3} alt="" />
            <div className="caption">
                <FaShip size='3em' />
                <p>Construção Naval</p>
            </div>
        </div>      
    </div>
  )
}

export default Cursos;