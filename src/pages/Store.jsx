import { Row, Col, Card } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";
function Store() {
  return (
    <div className="store-wrap">
      <h1 align="center" className="p-3">
        <img className="logo-img" src="img/logo.PNG" alt="" />
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
        <Card className="shadow p-3 mb-5 bg-body rounded">
          <Card.Body>
            <Card.Text>
              {<img className="product-img" src="img/tshirtf.png" alt="" />}
            </Card.Text>
            <Card.Title
              style={{ fontSize: 20, textAlign: "center" }}
              className="card-txt  text-secondary"
            >
              100 FIRES T-SHIRT
            </Card.Title>
            <Card.Text
              className="text-secondary"
              style={{ fontSize: 20, textAlign: "center" }}
            >
              Comming soon...
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <footer>
        <a target="_blank" href="https://www.instagram.com/steve_spectacular/">
          <img className="logo-img-2" src="img/instagram.PNG" alt="" />
        </a>
        <p className="contact">CONTACT US: Ahunnitfires@gmail.com</p>
      </footer>
    </div>
  );
}

export default Store;
