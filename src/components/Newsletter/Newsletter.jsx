import css from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={`${css.newsletter} text-center`}>
      <h3>Suscríbete a nuestro Newsletter!</h3>
      <p>Dejanos tu email para recibir noticias y descuentos especiales!</p>
    </div>
  );
}

export default Newsletter;
