//for using params in the url
//for html
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
	FormControl,
} from "react-bootstrap";
//components
import Rating from "../components/Rating";
//data
// import products from "../products";
//we dont do that now, instead we fetch from backend
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
//implement Add To Cart
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsQuery(productId);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [qty, setQty] = useState(1);

	const addToCartHandler = () => {
		dispatch(addToCart({ ...product, qty }));
		navigate("/cart");
	};

	return (
		<>
			<Link to="/" className="btn btn-light my-3">
				Homepage
			</Link>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<Row>
						<Col md={5}>
							<Image src={product.image} alt={product.name} fluid />
						</Col>
						<Col md={4}>
							<ListGroup variant="flush">
								<ListGroupItem>
									<h3>{product.name}</h3>
								</ListGroupItem>
								<ListGroupItem>
									<Rating
										value={product.rating}
										text={`${product.numReviews} reviews`}
									/>
								</ListGroupItem>
								<ListGroupItem>Price:${product.price}</ListGroupItem>
								<ListGroupItem>Description:{product.description}</ListGroupItem>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant="flush">
									<ListGroupItem>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>${product.price}</strong>
											</Col>
										</Row>
									</ListGroupItem>
									<ListGroupItem>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
											</Col>
										</Row>
									</ListGroupItem>
									{product.countInStock > 0 && (
										<ListGroupItem>
											<Row>
												<Col>Qty</Col>
												<Col>
													<FormControl
														as="select"
														value={qty}
														onChange={(e) => setQty(Number(e.target.value))}
													>
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															)
														)}
													</FormControl>
												</Col>
											</Row>
										</ListGroupItem>
									)}
									<ListGroupItem>
										<Button
											className="btn-block"
											type="button"
											disabled={product.countInStock === 0}
											onClick={addToCartHandler}
										>
											Add To Cart
										</Button>
									</ListGroupItem>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};

export default ProductScreen;
