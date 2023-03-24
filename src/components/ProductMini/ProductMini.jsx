import "./ProductMini.css";

function ProductMini(productInfo) {
  return (
    <div id="productContainer" className="border">
      <i className="bi bi-heart"></i>
      <img
        src="/img/pexels-rodnae-productions-6806697.jpg"
        alt=""
        width={"200rem"}
        height={"200rem"}
        className="rounded"
      />
      <p className="fw-bold" id="productTitle">
        {productInfo.title}Maceta
      </p>
      <p id="price">14USD</p>
      <span id="rating" className="badge">
        4.5 <i className="bi bi-star-fill"></i>
      </span>
    </div>
  );
}

export default ProductMini;
