import React from "react";
import "./styles.css";
import whatsappIcon from "../../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/37215778?s=400&u=2c93abd69dae2d5b0deabd4ecae81ebdb5a3b865&v=4"
                    alt="Micaelly Uchoa"
                />
                <div>
                    <strong>Micaelly Uchoa</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiata das melhores tecnologias de química avançada e blá <br />
                blá blá
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
