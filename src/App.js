/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles/App.css";
import Testimonio from "./components/Testimonio";
import Curso from "./components/Curso";
import Pregunta from "./components/Pregunta";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="div-search">
          <button>
            <a href="">
              <img
                className="lupa-icon"
                src={require("./images/lupaN.png")}
                href
              />
            </a>
          </button>
          <input
            id="inputPreguntas"
            placeholder="Encuentra +9,000 Tutoriales"
          />
        </div>
        <div className="div-logo">
          <img src={require("./images/freecodecamp-logo.png")} />
        </div>
        <div className="enlaces-header">
          <button className="btn-nav btn-text btn-hide">Donar</button>
          <button className="btn-nav btn-icon">
            <img src={require("./images/world.png")} />
          </button>
          <button className="btn-nav btn-icon btn-text"><span className="btn-hide">Menú</span><img className="image-menu-nav" src={require("./images/menu-icono.png")}/></button>
          <button className="btn-nav btn-icon">
            <img src={require("./images/usuario.png")} />
          </button>
        </div>
      </nav>
      <div className="content-top">
        <div className="top-text">
          <h1 className="titulo-principal">
            <span className="parte">Aprende a programar gratis.</span>
            <span className="parte">Construye proyectos.</span>
            <span className="parte">Obtén certificaciones.</span>
          </h1>
          <p className="resultados">
            <span className="resultados-linea1">
              Desde 2014, más de 40.000 graduados de freeCodeCamp.org han
            </span>
            conseguido trabajos en empresas de tecnología, entre las que se
            incluyen:
          </p>
          <img className="marcas" src={require("./images/imagen-marcas.jpg")} />
          <button className="btn-iniciar btn-iniciar1">
            Empieza (es gratis)
          </button>
          <img
            className="estudiantes"
            src={require("./images/estudiantes.png")}
          />
          <p className="texto-imagen-estudiantes">
            Estudiantes de freeCodeCamp en un grupo de estudio local en Corea
            del Sur.
          </p>
        </div>
        <div className="div-empresas-recomendaciones">
          <img
            className="empresas-recomendaciones"
            src={require("./images/empresas-recomendaciones.jpg")}
          />
        </div>
      </div>
      <div className="div-testimonios">
        <h2 className="titulo-div-testimonios">
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h2>

        <Testimonio
          imagen="shawn"
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          texto="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimonio
          imagen="sarah"
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          texto="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          imagen="emma"
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          texto="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
        <button className="btn-iniciar">Empieza (es gratis)</button>
      </div>
      <div className="cursos">
        <h2>Obtén certificaciones verificadas gratuitas en:</h2>
        <Curso
          imagen="computadora"
          nombre="Certificación Responsive Web Design"
        />
        <Curso
          imagen="js"
          nombre="Certificación Algoritmos de JavaScript y Estructuras de Datos"
        />
        <Curso
          imagen="react"
          nombre="Certificación Librerías de desarrollo de interfaz"
        />
        <Curso imagen="base-datos" nombre="Certificación Relational Database" />
        <Curso
          imagen="python"
          nombre="Certificación Cálculo Científico con Python"
        />
        <button className="btn-iniciar">Empieza (es gratis)</button>
      </div>
      <div className="preguntas">
        <h2>Frequently asked questions:</h2>
        <Pregunta
          pregunta="What exactly is freeCodeCamp?"
          respuesta="freeCodeCamp is a community of people from all around the world who are learning to code together. We're a 501(c)(3) public charity."
        />
        <Pregunta
          pregunta="How will freeCodeCamp help me learn to code?  "
          respuesta="You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app.
          
          You will also earn free verified certifications along the way."
        />
        <Pregunta
          pregunta="Is freeCodeCamp really free?"
          respuesta="Yes. Every aspect of freeCodeCamp is 100% free. The courses, the projects, and even the certifications."
        />
        <Pregunta
          pregunta="Can freeCodeCamp help me get a job as a software developer?"
          respuesta="Yes. Every year, thousands of people who join the freeCodeCamp community get their first software developer job."
        />
      </div>
      <h3 className="despedida">¡Feliz día programando!</h3>
      <button className="btn-iniciar">Empieza (es gratis)</button>

      <footer>
        <div className="footer-top">
          <div className="descripcion-compania">
            <p>
              freeCodeCamp es una organización benéfica 501(c)(3) exenta de
              impuestos apoyada por donantes (Número de Identificación Fiscal
              Federal De Los Estados Unidos: 82-0779546)
            </p>
            <p>
              Nuestra misión: ayudar a las personas a aprender a programar de
              forma gratuita. Logramos esto mediante la creación de miles de
              videos, artículos y lecciones de programación interactivas, todos
              disponibles gratuitamente para el público. También tenemos miles
              de grupos de estudio de FreeCodeCamp en todo el mundo.
            </p>
            <p>
              Las donaciones a freeCodeCamp se destinan a nuestras iniciativas
              educativas y ayudan a pagar los servidores, los servicios y el
              personal.
            </p>
            <p className="cta-donacion">
              Puedes{" "}
              <span className="enlace-donacion">
                hacer una donación deducible de impuestos aquí
              </span>
              .
            </p>
          </div>
          <div className="tendencias">
            <h3>Guías de tendencias</h3>
            <table>
              <caption>Guías de tendencias</caption>
              <tbody>
                <tr>
                  <td>Git Clone</td>
                  <td>Métodos Agile</td>
                  <td>Python Main</td>
                </tr>
                <tr>
                  <td>Callback</td>
                  <td>Debounce</td>
                  <td>Url Enconde</td>
                </tr>
                <tr>
                  <td>Blink HTML</td>
                  <td>Python Tupla</td>
                  <td>JavaScript Push</td>
                </tr>
                <tr>
                  <td>Java List</td>
                  <td>UX</td>
                  <td>Proceso de Diseño</td>
                </tr>
                <tr>
                  <td>Números Primos</td>
                  <td>Diseño de Producto</td>
                  <td>Digital Design</td>
                </tr>
                <tr>
                  <td>Juegos de Cödigo</td>
                  <td>SVM</td>
                  <td>JavaScript forEach</td>
                </tr>
                <tr>
                  <td>Google BERT</td>
                  <td>Create Table SQL</td>
                  <td>Diseño Web Responsive</td>
                </tr>
                <tr>
                  <td>¿Qué es un archivo SVG?</td>
                  <td>PDF Password Remover</td>
                  <td>¿Qué es un Archivo PDF?</td>
                </tr>
                <tr>
                  <td>What Is Python?</td>
                  <td>¿Qué es TLS?</td>
                  <td>¿Qué es una red LAN?</td>
                </tr>
                <tr>
                  <td>¿Qué es npm?</td>
                  <td>Ejemplos de RSync</td>
                  <td>Random Forest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="footer-links">
          <h3>Nuestra caridad</h3>
          <a
            href="https://www.freecodecamp.org/espanol/news/acerca-de-freecodecamp-preguntas-frecuentes/"
            target="_blank"
            rel="noreferrer"
          >
            Acerca de
          </a>
          <a
            href="https://www.linkedin.com/school/free-code-camp/people/"
            target="_blank"
            rel="noreferrer"
          >
            Red de ex-Alumnos
          </a>
          <a
            href="https://github.com/freeCodeCamp/"
            target="_blank"
            rel="noreferrer"
          >
            Código abierto
          </a>
          <a
            href="https://www.freecodecamp.org/shop/"
            target="_blank"
            rel="noreferrer"
          >
            Tienda
          </a>
          <a
            href="https://www.freecodecamp.org/espanol/news/preguntas-comunes-de-soporte-tecnico/"
            target="_blank"
            rel="noreferrer"
          >
            Soporte
          </a>
          <a
            href="https://www.freecodecamp.org/news/sponsors/"
            target="_blank"
            rel="noreferrer"
          >
            Patrocinadores
          </a>
          <a
            href="https://www.freecodecamp.org/espanol/news/politica-de-honestidad-academica/"
            target="_blank"
            rel="noreferrer"
          >
            Honestidad Académica
          </a>
          <a
            href="https://www.freecodecamp.org/espanol/news/codigo-de-conducta/"
            target="_blank"
            rel="noreferrer"
          >
            Código de Conducta
          </a>
          <a
            href="https://www.freecodecamp.org/news/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Política de privacidad
          </a>
          <a
            href="https://www.freecodecamp.org/news/terms-of-service/"
            target="_blank"
            rel="noreferrer"
          >
            Términos de servicio
          </a>
          <a
            href="https://www.freecodecamp.org/news/copyright-policy/"
            target="_blank"
            rel="noreferrer"
            style={{ display: "block" }}
          >
            Política de derechos de autor
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
