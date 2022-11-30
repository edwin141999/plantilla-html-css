import React from "react";
import "./About.css";

export default function About() {
    return (
        <div className="section-about">
            <div className="about-me">
                <h1 className="title">Hola, soy Mauri. FullStack Developer</h1>
                <p className="info">
                    Pon aquí una breve introducción sobre ti, a que te dedicas,
                    tu experiencia y cualquier hito importante en tu carrera o
                    estudios.
                </p>
            </div>
            <div className="div-img">
                <img
                    className="img-section"
                    src="../../src/assets/img/perro.jpg"
                    alt="perro"
                />
            </div>
        </div>
    );
}
