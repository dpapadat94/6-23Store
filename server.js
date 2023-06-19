//sk_test_51GuOa8Af5038I6zh4KxUrgo4WnlHfQY2rZy6OFyaNx2GvlXOcRI5gOjXeYBzdB6GAvysZfLcKjR5Fo7AWifBcISx00PkgeZNpC
//hoodie:price_1N86moAf5038I6zhKjDq1KcX
//tshirt:price_1N86nQAf5038I6zhNmFsY3We

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "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"
);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
