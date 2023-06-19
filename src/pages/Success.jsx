function Success() {
  return (
    <div className="success-div">
      <h3 className="row justify-content-center mt-5 mb-5">
        Order Placed Successfully!
      </h3>
      <p className="successText">
        Your order is being processed for shipment.{" "}
      </p>
      <p className="successText">
        {" "}
        Please contact us at Ahunnitfires@gmail.com with any questions regarding
        your purchase.
      </p>
      <img className="img-suc" src="img/IMG_1921.PNG" alt="" />
    </div>
  );
}

export default Success;
