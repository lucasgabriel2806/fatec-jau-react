import React, { useRef } from 'react';
import './Depoimentos.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Depoimentos = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='depoimentos'>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Mariana S.</h3>

                            <span>Ex aluna de Logística</span>
                        </div>                        
                    </div>
                    <p>“Escolhi a FATEC Jahu pela qualidade do ensino e pela gratuidade, e não me arrependo. A estrutura é simples, mas funcional, e o conteúdo dos cursos é muito bem direcionado para a área profissional.”</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Lucas A.</h3>
                            <span>Aluno de DSM</span>
                        </div>                        
                    </div>
                    <p>“Estudar na FATEC Jahu foi uma experiência transformadora. O ensino é bem focado na prática, o que ajuda muito a entender como o mercado realmente funciona. Os professores são acessíveis e sempre dispostos a ajudar.”</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ana P.</h3>
                            <span>Aluna de Logística</span>
                        </div>
                    </div>
                    <p>“Mesmo sendo uma faculdade pública, a FATEC Jahu oferece um ensino de alto nível. O ambiente é colaborativo e incentiva o aprendizado contínuo, tanto dentro quanto fora da sala de aula.”</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Rafael M.</h3>
                            <span>Aluno de Construção Naval</span>
                        </div>
                    </div>
                    <p>“A FATEC Jahu me proporcionou uma base sólida na área de tecnologia. Os projetos desenvolvidos durante o curso ajudam bastante a ganhar experiência e confiança para o mercado de trabalho.”</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Depoimentos;