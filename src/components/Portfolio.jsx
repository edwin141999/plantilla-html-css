import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
    const portfolio = [
        {
            img: "../../src/assets/img/trabajo1.jpg",
            title: "Trabajo real #1",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
        {
            img: "../../src/assets/img/trabajo2.jpg",
            title: "Trabajo experimental #1",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
        {
            img: "../../src/assets/img/trabajo3.jpg",
            title: "Trabajo real #2",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
        {
            img: "../../src/assets/img/trabajo4.jpg",
            title: "Trabajo experimental #2",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
        {
            img: "../../src/assets/img/trabajo5.jpg",
            title: "Me invento este trabajo",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
        {
            img: "../../src/assets/img/trabajo6.jpg",
            title: "Porque puedo",
            description:
                "Describe el proyecto y si puedes añade un enlace con más info, GitHub, sitio web, etc.",
        },
    ];
    return (
        <section className="section-portfolio">
            <div className="div-xp">
                <h1 className="title-xp">Mi experiencia</h1>
                <p className="description-xp">
                    Experiencia de anteriores empleos o trabajos experimentales
                    que hayas realizado para aprender (como este). O inventate
                    algo :)
                </p>
                <button className="btn-xp">GitHub o Contacto </button>
            </div>
            <div className="div-portfolio">
                {portfolio.map((project, index) => {
                    return (
                        <div key={index} className="grid-portfolio">
                            <img
                                src={project.img}
                                className="img-portfolio"
                            ></img>
                            <h2 className="title-portfolio">{project.title}</h2>
                            <p className="description-portfolio">
                                {project.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
