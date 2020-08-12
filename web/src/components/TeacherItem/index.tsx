import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-M0yXSU-JBvUR5awzCJ7C-PVMQc9dPpCm0cF0o=s83-c-mo" alt="" />
                <div>
                    <strong>Patricia Matta</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /> <br />
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;