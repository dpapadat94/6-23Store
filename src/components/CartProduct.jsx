import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";
import { getProductData } from "../productsStore";
import { Card, Form, Row, Col } from "react-bootstrap";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;

  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>

      <p>Quantity: {quantity}</p>

      <p> ${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>

      <hr></hr>
    </>
  );
}

export default CartProduct;
