import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";
// import Size from "./Size";
function ProductCard(props) {
  // props.product is the product we are selling
  // const [size, setSize] = useState("");
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  {
    return (
      <>
        <Card className="card-txt shadow p-3 mb-5 bg-body rounded">
          <Card.Body>
            <Card.Text>
              {<img className="product-img" src={product.img} alt="" />}
            </Card.Text>
            <Card.Title style={{ fontSize: 20 }} className="card-txt">
              {product.title}
            </Card.Title>
            <Card.Text>${product.price}</Card.Text>
            {/* <Size /> */}
            {productQuantity > 0 ? (
              <>
                <Form as={Row}>
                  <Form.Label column="true" sm="6">
                    In Cart: {productQuantity}
                  </Form.Label>
                  <Col sm="6">
                    <Button
                      sm="6"
                      variant="light"
                      onClick={() => cart.addOneToCart(product.id)}
                      className="mx-2"
                    >
                      +
                    </Button>
                    <Button
                      sm="6"
                      variant="light"
                      onClick={() => cart.removeOneFromCart(product.id)}
                      className="mx-2"
                    >
                      -
                    </Button>
                  </Col>
                </Form>

                <Button
                  onClick={() => cart.deleteFromCart(product.id)}
                  className="my-2"
                  variant="outline-secondary"
                >
                  Remove from cart
                </Button>
              </>
            ) : (
              <Button
                className="cart-btn"
                variant="outline-dark"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add To Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ProductCard;
