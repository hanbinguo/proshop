//for using params in the url
import { useParams } from "react-router-dom";
//for html
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const product = products.find((p) => p.id === productId);
	console.log(product);

	return <div>ProductScreen</div>;
};

export default ProductScreen;
