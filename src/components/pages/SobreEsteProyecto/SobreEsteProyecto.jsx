import "./SobreEsteProyecto.css";
import { Container } from "react-bootstrap";
import PageNavbar from "../../navbar/PageNavbar";

function SobreEsteProyecto() {
	return (
		<>
			<PageNavbar />
			<Container fluid className="p-0">
				<section className="darkSection row">
					<div className="profile col-12 col-md-6 col-lg-3">
						<h4>Nicolás Ross</h4>
						<div className="icons">
							<a href="https://github.com/nicoroke">
								<i className="profileIcon bi bi-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/nicol%C3%A1s-ross-kegel-1a968414b/">
								<i className="profileIcon bi bi-linkedin"></i>
							</a>
						</div>
					</div>
					<div className="profile col-12 col-md-6 col-lg-3">
						<h4>Kevin Lapizaga</h4>
						<div className="icons">
							<a href="github.com/kevin4555">
								<i className="profileIcon bi bi-github"></i>
							</a>
							<a href="linkedin.com/in/kevin-lapizaga/">
								<i className="profileIcon bi bi-linkedin"></i>
							</a>
						</div>
					</div>
					<div className="profile col-12 col-md-6 col-lg-3">
						<h4>Maia Chamorro</h4>
						<div className="icons">
							<a href="https://github.com/lemilegram">
								<i className="profileIcon bi bi-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/maia-chamorro/">
								<i className="profileIcon bi bi-linkedin"></i>
							</a>
						</div>
					</div>
					<div className="profile col-12 col-md-6 col-lg-3">
						<h4>Sebastián Wajshan</h4>
						<div className="icons">
							<a href="">
								<i className="profileIcon bi bi-github"></i>
							</a>
							<a href="">
								<i className="profileIcon bi bi-linkedin"></i>
							</a>
						</div>
					</div>
				</section>
				<div className="custom-shape-divider-top-1679573669">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 300 120"
						preserveAspectRatio="none"
					>
						<path
							d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
							className="shape-fill"
						></path>
					</svg>
				</div>
				<section className="greenSection">
					<h1>eCommerce</h1>
					<h2>Proyecto Final Bootcamp</h2>
				</section>
				<section className="platinumSection" id="infoSection">
					<div
						id="infoProyecto"
						className="container d-flex w-50 align-items-center"
					>
						<a href="https://ha.dev">
							<img src="ha_logo.png" alt="" />
						</a>
						<p className="px-3">
							Esto es <b>Manos Creativas</b>, un{" "}
							<b>eCommerce ficticio</b> realizado por 4 compañeros
							a lo largo de 3 semanas como proyecto final del{" "}
							<b>bootcamp de Hack Academy</b>. El bootcamp de
							Full-Stack development de Hack Academy es un curso
							<b> intensivo</b> de 3 meses con una carga horaria
							de más de 600 horas. En este aprendemos tecnologías
							de <b>front-end y back-end</b>, las cuales
							utilizamos para varios proyectos como este.
						</p>
					</div>
				</section>
				<section className="platinumSection">
					<h3>Tecnologías Utilizadas</h3>
					<div className="row" id="iconList">
						<div className="col-3">
							<div>
								<img
									src="icons/icons8-bootstrap-32.png"
									alt=""
								/>
								<h5>Bootstrap</h5>
							</div>
							<div>
								<img
									src="icons/icons8-express-js-30.png"
									alt=""
								/>
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
								<img
									src="icons/icons8-mysql-logo-30.png"
									alt=""
								/>
								<h5>MySQL</h5>
							</div>
							<div>
								<img
									src="icons/icons8-sequelize-30.png"
									alt=""
								/>
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
