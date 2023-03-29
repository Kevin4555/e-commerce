import "./Products.css";
import ProductMini from "../../ProductMini/ProductMini";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("");
  const [selectedRatingOption, setSelectedRatingOption] = useState("");
  const [selectedPriceOption, setSelectedPriceOption] = useState("");

  const handleOptionChangeCategory = (event) => {
    setSelectedCategoryOption(event.target.value);
  };
  const handleOptionChangeRating = (event) => {
    setSelectedRatingOption(event.target.value);
  };
  const handleOptionChangePrice = (event) => {
    setSelectedPriceOption(event.target.value);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const filtro = products.filter((product) => product.category === selectedCategoryOption);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </div>
          {products.map((product) => (
            <ProductMini product={product} key={`${product.name}_${product.id}`} />
          ))}
        </div>
      </div>
      {
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-left ms-0 m-0 p-0 vh-100 w-22rem"
        >
          <div className="vh-100">
            <Modal.Header closeButton>
              <Modal.Title>Filtros</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="fs-5">Categoría</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRadio">
                  <Form.Check
                    type="radio"
                    label="Todas"
                    value="todas"
                    checked={selectedCategoryOption === "todas"}
                    onChange={handleOptionChangeCategory}
                  />
                  {categories.map((category) => {
                    return (
                      <Form.Check
                        type="radio"
                        label={category.name}
                        value={category.id}
                        checked={selectedCategoryOption === category.id}
                        onChange={handleOptionChangeCategory}
                        key={`${category.name}_${category.id}`}
                      />
                    );
                  })}
                </Form.Group>
              </Form>
              <h4 className="fs-5">Calificación</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRadio">
                  <Form.Check
                    type="radio"
                    label="Una estrella"
                    value="unaEstrella"
                    checked={selectedRatingOption === "unaEstrella"}
                    onChange={handleOptionChangeRating}
                  />

                  <Form.Check
                    type="radio"
                    label="Dos estrellas"
                    value="dosEstrella"
                    checked={selectedRatingOption === "dosEstrella"}
                    onChange={handleOptionChangeRating}
                  />

                  <Form.Check
                    type="radio"
                    label="Tres estrellas"
                    value="tresEstrellas"
                    checked={selectedRatingOption === "tresEstrellas"}
                    onChange={handleOptionChangeRating}
                  />

                  <Form.Check
                    type="radio"
                    label="Cuatro estrellas"
                    value="cuatroEstrellas"
                    checked={selectedRatingOption === "cuatroEstrellas"}
                    onChange={handleOptionChangeRating}
                  />

                  <Form.Check
                    type="radio"
                    label="Cinco estrellas"
                    value="cincoEstrellas"
                    checked={selectedRatingOption === "cincoEstrellas"}
                    onChange={handleOptionChangeRating}
                  />
                </Form.Group>
              </Form>
              <h4 className="fs-5">Précio</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRadio">
                  <Form.Check
                    type="radio"
                    label="Cualquier precio"
                    value="anyPrice"
                    checked={selectedPriceOption === "anyPrice"}
                    onChange={handleOptionChangePrice}
                  />

                  <Form.Check
                    type="radio"
                    label="Menor de USD 25"
                    value="menorUSD25"
                    checked={selectedPriceOption === "menorUSD25"}
                    onChange={handleOptionChangePrice}
                  />

                  <Form.Check
                    type="radio"
                    label="USD 25 a USD 50"
                    value="USD25aUSD50"
                    checked={selectedPriceOption === "USD25aUSD50"}
                    onChange={handleOptionChangePrice}
                  />

                  <Form.Check
                    type="radio"
                    label="USD 50 a USD 100"
                    value="USD50aUSD100"
                    checked={selectedPriceOption === "USD50aUSD100"}
                    onChange={handleOptionChangePrice}
                  />

                  <Form.Check
                    type="radio"
                    label="Más de 100"
                    value="masDe100"
                    checked={selectedPriceOption === "masDe100"}
                    onChange={handleOptionChangePrice}
                  />
                  <Form.Check
                    type="radio"
                    label="Personalizados"
                    value="personalizados"
                    checked={selectedPriceOption === "personalizados"}
                    onChange={handleOptionChangePrice}
                  />
                  <div className="d-flex">
                    <Form.Control type="number" placeholder="Mínimo" className="w-6rem" />
                    <small className="my-auto fs-6 mx-2">To</small>
                    <Form.Control type="number" placeholder="Máximo" className="w-6rem" />
                  </div>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="justify-content-start">
              <Button className="w-6rem" variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button className="w-6rem" variant="primary" onClick={handleClose}>
                Aplicar
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      }
    </>
  );
}

export default Products;
