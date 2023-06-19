import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkout = async () => {
    await fetch("https://100fires.netlify.app//checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <div>
          <Navbar.Brand style={{ fontSize: 50 }} href="/">
            <span style={{ fontSize: 50, color: "HotPink" }}>1</span>
            <span style={{ fontSize: 50, color: "blue" }}>0</span>
            <span style={{ fontSize: 50, color: "fireBrick" }}>0</span>
            <span style={{ fontSize: 50, color: "limeGreen" }}> F</span>
            <span style={{ fontSize: 50, color: "dodgerBlue" }}>I</span>
            <span style={{ fontSize: 50, color: "orangeRed" }}>R</span>
            <span style={{ fontSize: 50, color: "darkOrchid" }}>E</span>
            <span style={{ fontSize: 50, color: "gold" }}>S</span>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            style={{ fontSize: 35, background: "transparent", border: "none" }}
            size="lg"
            variant="light"
            onClick={handleShow}
          >
            <span style={{ fontSize: 35, color: "HotPink" }}>V</span>
            <span style={{ fontSize: 35, color: "blue" }}>I</span>
            <span style={{ fontSize: 35, color: "fireBrick" }}>E</span>
            <span style={{ fontSize: 35, color: "limeGreen" }}>W</span>
            <span style={{ fontSize: 35, color: "dodgerBlue" }}>C</span>
            <span style={{ fontSize: 35, color: "orangeRed" }}>A</span>
            <span style={{ fontSize: 35, color: "darkOrchid" }}>R</span>
            <span style={{ fontSize: 35, color: "gold" }}>T </span>
            {productsCount}
            <img
              style={{ paddingBottom: ".5rem" }}
              className="logo-img-2"
              src="img/shopping-bag.PNG"
              alt=""
            />
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase Items
              </Button>
            </>
          ) : (
            <h1>Cart is empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
