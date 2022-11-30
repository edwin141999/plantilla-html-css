import React from "react";
import "./Skills.css";

export default function Skills() {
    const skills = [
        {
            nombre: "ReactJs",
            descripcion:
                "Creacón de aplicaciones web y móviles multiplataforma con React y React Native",
        },
        {
            nombre: "PHP, SQL y Laravel",
            descripcion:
                "15 año de experiencia en el desarrollo backend con tecnologías OpenSource",
        },
        {
            nombre: "SEO",
            descripcion:
                "10 años de experiencia en optimización de sitios web y posicionamiento en buscadores",
        },
    ];
    return (
        <section className="section-skill">
            <div className="div-skill">
                <h1 className="title-skill">Mis habilidades</h1>
                <p className="info-skill">
                    Cuenta tus principales conocimientos y habilidades. Si lo
                    necesitas puedes agregar otra ínea de 3 cajas de texto
                    debajo.{" "}
                </p>
            </div>
            <div className="div-card">
                {skills.map((skill, index) => {
                    return (
                        <div key={index} className="card">
                            <h2 className="title-card">{skill.nombre}</h2>
                            <p className="description-card">
                                {skill.descripcion}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
