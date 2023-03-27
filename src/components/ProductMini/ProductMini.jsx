import "./ProductMini.css";
import { Link } from "react-router-dom";

function ProductMini({ product }) {
	return (
		<div
			className="col-6 col-md-4 col-lg-3 mb-5 p-relative"
			id="product-mini"
			key={product.id}
		>
			<div id="productContainer" className="shadow rounded">
				<div className="img-container">
					<Link
						to={`/product/${product.id}`}
						className="text-decoration-none"
					>
						<img
							/* src={`/img/${product.img.img1}`} */
							src="/img/pexels-los-muertos-crew-8066050.jpg"
							alt=""
							className="destacados-img w-100 rounded-top"
						/>
					</Link>
					<button className="icono-btn">
						<i class="bi bi-heart heart-icon"></i>
					</button>
				</div>
				<Link
					to={`/product/${product.id}`}
					className="text-decoration-none"
				>
					<div
						className="border px-2 rounded-bottom"
						id="infoContainer"
					>
						<div className="row">
							<h5 className="mt-3">{product.title}</h5>
							<small
								className="fw-light col-12 mb-2"
								id="product"
							>
								{product.description.length >= 100
									? product.description.substring(0, 100) +
									  "..."
									: product.description}
							</small>
							<span>
								<small id="priceBefore">
									{Math.floor(product.price * 1.2)} USD
								</small>
								<small> 20% OFF</small>
							</span>
							<small id="price" className="fw-bold">
								{product.price} USD
							</small>
							<small id="rating" className="col-6 text-end">
								<i className="bi bi-star-fill text-warning"></i>{" "}
								{product.rating}
							</small>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProductMini;
