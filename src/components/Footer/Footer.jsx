import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="container py-4" id="text-footer">
        <nav className="row">
          <div className="col-12 col-md-3">
            <h4>Nuestra Información</h4>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt"></i> Manos Creativas 123, Montevideo, Uruguay
              </li>
              <li>
                <i className="bi bi-telephone"></i> +59898123456
              </li>
              <li>
                <i className="bi bi-envelope"></i> fake@manoscreativas.com
              </li>
              <li className="socials">
                <i className="bi bi-instagram" />
                <i className="bi bi-facebook" />
                <i className="bi bi-twitter" />
                <i className="bi bi-youtube" />
              </li>
            </ul>
          </div>
          <div className="container">
            <p className="text-center border-top pt-2">© 2023, Manos Creativas</p>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
