const $ = (selector) => document.querySelector(selector);
const userEmail = $(".navBar__right__email");
const desktopMenu = $(".desktop--menu");

const menuResIcon = $(".navBar__menuRes--logo");
const mobileMenu = $(".mobile--menu");

const shoppingCartIcon = $(".navBar__right__shopping--car");
const shoppingCartProducts = $(".carDetail");

const sectionProducts = $(".cards-container");

const productDetail = $(".product-detail");
const closeProductDetail = $(".product-detail-close");

function showDesktopMenu() {
  shoppingCartProducts.classList.add("hide__aside");
  productDetail.classList.add("hide__aside");

  desktopMenu.classList.toggle("inactive");
}
function showMobileMenu() {
  shoppingCartProducts.classList.add("hide__aside");
  productDetail.classList.add("hide__aside");

  mobileMenu.classList.toggle("hide__mobileMenu");
}
function showShoppingCartProducts() {
  mobileMenu.classList.add("hide__mobileMenu");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add("hide__aside");

  shoppingCartProducts.classList.toggle("hide__aside");
}
function showProduct() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("hide__mobileMenu");
  shoppingCartProducts.classList.add("hide__aside");

  productDetail.classList.toggle("hide__aside");
}
function closeProduct() {
  productDetail.classList.add("hide__aside");
}

userEmail.addEventListener("click", showDesktopMenu);
menuResIcon.addEventListener("click", showMobileMenu);
shoppingCartIcon.addEventListener("click", showShoppingCartProducts);
closeProductDetail.addEventListener("click", closeProduct);

const productList = [];
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(products) {
  for (prodcut of products) {
    const prodctCard = document.createElement("div");
    prodctCard.classList.add("product-card");
    const imgProduct = document.createElement("img");
    imgProduct.classList.add("product-img");
    imgProduct.src = `${prodcut.imgUrl}`;
    const prodcutInfo = document.createElement("div");
    prodcutInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerText = `${prodcut.name}`;
    const productPrice = document.createElement("p");
    productPrice.innerText = `${prodcut.price}`;
    const imgFigure = document.createElement("figure");
    const imgCar = document.createElement("img");
    imgCar.src = "./Platzi_YardSale_Icons/bt_add_to_cart.svg";

    productInfoDiv.append(productName, productPrice);
    imgFigure.appendChild(imgCar);

    prodcutInfo.append(productInfoDiv, imgFigure);

    prodctCard.append(imgProduct, prodcutInfo);

    sectionProducts.appendChild(prodctCard);
    prodctCard.addEventListener("click", showProduct);
  }
}
renderProducts(productList);
