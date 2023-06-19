//hoodie:price_1N86moAf5038I6zhKjDq1KcX
//tshirt:price_1N86nQAf5038I6zhNmFsY3We

const productsArray = [
  {
    id: "price_1NKmsMAf5038I6zhWOW7uVHN",
    title: "HOODIE (small) ",
    price: "75",
    img: "img/hoodief.png",
  },
  {
    id: "price_1NKmsGAf5038I6zhUYHwDRg1",
    title: "HOODIE (medium) ",
    price: "75",
    img: "img/hoodief.png",
  },
  {
    id: "price_1NKmsBAf5038I6zhFS2Gm08r",
    title: "HOODIE (large) ",
    price: "75",
    img: "img/hoodief.png",
  },

  {
    id: "price_1NKms3Af5038I6zh7RU0HnEq",
    title: "HOODIE (XL) ",
    price: "75",
    img: "img/hoodief.png",
  },

  // {
  //   id: "price_1N86nQAf5038I6zhNmFsY3We",
  //   title: "T-SHIRT",
  //   price: "COMMING SOON...",
  //   img: "img/tshirtf.png",
  // },
];

//function that finds product info by the assosicated product id passed in.
//we are saying "find the product whos id is the same as the id passed in as a parameter and save that product to the variable "productData" .. then return that product (saved as productData) to us.
function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  return productData;
}

export { productsArray, getProductData };
