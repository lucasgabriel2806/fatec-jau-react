import React from 'react';
import './Contato.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contato = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1c63aa37-bd1f-4ab7-b479-db2b8e34808d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className='contato'>
        <div className="contato-col">
            <h3>Envie-nos uma mensagem <img src={msg_icon} alt="" /></h3>
            <p>Sinta-se à vontade para entrar em contato conosco através do formulário de contato ou encontre nossas informações de contato abaixo. Seus comentários, perguntas e sugestões são importantes para nós, pois nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contato@fatec.com</li>
                <li><img src={phone_icon} alt="" />(14) 3622-8280</li>
                <li><img src={location_icon} alt="" />R. Frei Galvão - Jardim Pedro Ometto <br /> Jaú - SP, 17212-599</li>
            </ul>
        </div>
        <div className="contato-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Seu nome</label>
                <input type="text" name='name' id='name' placeholder='Digite seu nome' required />
                <label htmlFor="phone">Número de telefone</label>
                <input type="tel" name='phone' id='phone' placeholder='Digite seu número de telefone' required />
                <label htmlFor="message">Sua mensagem</label>
                <textarea name="message" id="message" rows='6' placeholder='Digite sua mensagem' required></textarea>
                <button type='submit' className="btn dark-btn">Enviar <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contato;