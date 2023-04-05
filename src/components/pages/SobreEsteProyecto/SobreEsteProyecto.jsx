import css from "./SobreEsteProyecto.module.css";
import { Container } from "react-bootstrap";
import PageNavbar from "../../PageNavbar/PageNavbar";

function SobreEsteProyecto() {
  return (
    <>
      <PageNavbar />
      <Container fluid className="p-0">
        <section className={`${css.darkSection} row`}>
          <div className={`${css.profile} col-12 col-md-6 col-lg-3`}>
            <h4>Nicolás Ross</h4>
            <div className={css.icons}>
              <a href="https://github.com/nicoroke" target="_blank" rel="noreferrer">
                <i className={`${css.profileIcon} bi bi-github`}></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-ross-kegel-1a968414b/"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`${css.profileIcon} bi bi-linkedin`}></i>
              </a>
            </div>
          </div>
          <div className={`${css.profile} col-12 col-md-6 col-lg-3`}>
            <h4>Kevin Lapizaga</h4>
            <div className={css.icons}>
              <a href="https://github.com/kevin4555" target="_blank">
                <i className={`${css.profileIcon} bi bi-github`}></i>
              </a>
              <a href="https://linkedin.com/in/kevin-lapizaga/" target="_blank">
                <i className={`${css.profileIcon} bi bi-linkedin`}></i>
              </a>
            </div>
          </div>
          <div className={`${css.profile} col-12 col-md-6 col-lg-3`}>
            <h4>Maia Chamorro</h4>
            <div className={css.icons}>
              <a href="https://github.com/lemilegram" target="_blank">
                <i className={`${css.profileIcon} bi bi-github`}></i>
              </a>
              <a href="https://www.linkedin.com/in/maia-chamorro/" target="_blank">
                <i className={`${css.profileIcon} bi bi-linkedin`}></i>
              </a>
            </div>
          </div>
          <div className={`${css.profile} col-12 col-md-6 col-lg-3`}>
            <h4>Sebastián Wajshan</h4>
            <div className={css.icons}>
              <a href="https://github.com/sebawaj" target="_blank">
                <i className={`${css.profileIcon} bi bi-github`}></i>
              </a>
              <a href="https://www.linkedin.com/in/sebastian-wajshan" target="_blank">
                <i className={`${css.profileIcon} bi bi-linkedin`}></i>
              </a>
            </div>
          </div>
        </section>
        <section className={css.greenSection}>
          <h1>eCommerce</h1>
          <h2>Proyecto Final Bootcamp</h2>
        </section>
        <section className={css.platinumSection} id={css["infoSection"]}>
          <div id={css["infoProyecto"]} className="container d-flex w-50 align-items-center">
            <a href="https://ha.dev">
              <img src="ha_logo.png" alt="" />
            </a>
            <p className="px-3">
              Esto es <b>Manos Creativas</b>, un <b>eCommerce ficticio</b> realizado por 4
              compañeros a lo largo de 3 semanas como proyecto final del{" "}
              <b>bootcamp de Hack Academy</b>. El bootcamp de Full-Stack development de Hack Academy
              es un curso
              <b> intensivo</b> de 3 meses con una carga horaria de más de 600 horas. En este
              aprendemos tecnologías de <b>front-end y back-end</b>, las cuales utilizamos para
              varios proyectos como este.
            </p>
          </div>
        </section>
        <section className={css.platinumSection}>
          <h3>Tecnologías Utilizadas</h3>
          <div className="row" id={css["iconList"]}>
            <div className="col-3">
              <div>
                <img src="icons/icons8-bootstrap-32.png" alt="" />
                <h5>Bootstrap</h5>
              </div>
              <div>
                <img src="icons/icons8-express-js-30.png" alt="" />
                <h5>Expressjs</h5>
              </div>
            </div>
            <div className="col-3">
              <div>
                <img src="icons/icons8-react-30.png" alt="" />
                <h5>React</h5>
              </div>
              <div>
                <img src="icons/icons8-redux-30.png" alt="" />
                <h5>Redux</h5>
              </div>
            </div>
            <div className="col-3">
              <div>
                <img src="icons/icons8-node-js-32.png" alt="" />
                <h5>Node.js</h5>
              </div>
              <div>
                <img src="icons/icons8-github-30.png" alt="" />
                <h5>GitHub</h5>
              </div>
            </div>
            <div className="col-3">
              <div>
                <img src="icons/icons8-mysql-logo-30.png" alt="" />
                <h5>MySQL</h5>
              </div>
              <div>
                <img src="icons/icons8-sequelize-30.png" alt="" />
                <h5>Sequelize</h5>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default SobreEsteProyecto;
