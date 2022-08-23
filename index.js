const $ = (selector) => document.querySelector(selector);
const userEmail = $(".navBar__right__email");
const desktopMenu = $(".desktop--menu");

const menuResIcon = $(".navBar__menuRes--logo");
const mobileMenu = $(".mobile--menu");

const shoppingCartIcon = $(".navBar__right__shopping--car");
const shoppingCartProducts = $(".carDetail");

const sectionProducts = $(".cards-container");

const productDetail = $(".product-detail");

const carProducts = $(".selectedProducts");
const shoppingCarProductsContainer = $(".carDetail__my-order-content");
const summaryTotal = $(".summary__total");

const productList = [];
productList.push({
  id: 1,
  name: "Bike",
  price: "$" + 120.0,
  imgUrl:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  id: 2,
  name: "Gaming Laptop",
  price: "$" + 500.0,
  imgUrl:
    "https://cdn.kelaptop.com/img/gallery_mediums/92897405_0825942003.jpg",
});
productList.push({
  id: 3,
  name: "Gaming Mouse",
  price: "$" + 100.0,
  imgUrl:
    "https://www.tradeinn.com/f/13806/138068783/razer-deathadder-pro-v2-wireless-gaming-mouse.jpg",
});
productList.push({
  id: 4,
  name: "Monitor",
  price: "$" + 500.0,
  imgUrl:
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u3223qe/media-gallery/monitor-u3223qe-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3469&hei=3195&qlt=100,0&resMode=sharp2&size=3469,3195",
});
productList.push({
  id: 5,
  name: "Mechanical Keyboard",
  price: "$" + 100.0,
  imgUrl:
    "https://cdn.shopify.com/s/files/1/0070/1048/4351/products/Keychron-C1-hot-swappable-wired-type-c-mechanical-keyboard-tenkeyless-layout-for-Mac-Windows-iOS-Gateron-Switch-Brown_1800x1800_59641c8f-6644-419c-a939-bee3330f9b8a_480x480.jpg?v=1611327046",
});
productList.push({
  id: 6,
  name: "Silla Gamer",
  price: "$" + 600.0,
  imgUrl: "https://c1.neweggimages.com/ProductImage/AGDWS211127SOT2b.jpg",
});

let selectedProdcuts = [];

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
function showProduct(element) {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("hide__mobileMenu");
  shoppingCartProducts.classList.add("hide__aside");

  productDetail.innerHTML = "";
  const productToRender = productList
    .filter((e) => {
      return e.id == element.target.id;
    })
    .map((e) => {
      return `
    <div class="product-detail-close">
    <img src="/Platzi_YardSale_Icons/icon_close.png" alt="close" />
  </div>
  <img
    src="${e.imgUrl}"
    alt="${e.name}"
  />
  <div class="product-detail__product-info">
    <p>${e.price}</p>
    <p>${e.name}</p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores odio iure sit voluptatem, iusto odit dolor dolorem iste in praesentium ab consequatur officia sequi, adipisci, expedita quibusdam dignissimos corporis.
    </p>
    <button class="primary-button add-to-car-btn">
      <img src="/Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="car" />
      Add to cart
    </button>
  </div>
    `;
    });

  productDetail.innerHTML = productToRender;
  const closeProductDetail = $(".product-detail-close");
  closeProductDetail.addEventListener("click", closeProduct);
  productDetail.classList.toggle("hide__aside");
}
function closeProduct() {
  productDetail.classList.add("hide__aside");
}

userEmail.addEventListener("click", showDesktopMenu);
menuResIcon.addEventListener("click", showMobileMenu);
shoppingCartIcon.addEventListener("click", showShoppingCartProducts);

function renderProducts(products) {
  for (prodcut of products) {
    const prodctCard = document.createElement("div");
    prodctCard.classList.add("product-card");
    const imgProduct = document.createElement("img");
    imgProduct.classList.add("product-img");
    imgProduct.setAttribute("id", prodcut.id);
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
    imgCar.setAttribute("id", prodcut.id);
    imgCar.src = "./Platzi_YardSale_Icons/bt_add_to_cart.svg";

    productInfoDiv.append(productName, productPrice);
    imgFigure.appendChild(imgCar);

    prodcutInfo.append(productInfoDiv, imgFigure);

    prodctCard.append(imgProduct, prodcutInfo);

    sectionProducts.appendChild(prodctCard);
    imgProduct.addEventListener("click", showProduct);

    imgCar.addEventListener("click", (element) => {
      const selectedProduct = products.find((e) => e.id == element.target.id);
      selectedProdcuts.push(selectedProduct);
      carProducts.innerText = selectedProdcuts.length;
      renderProductsInCarShopping();
    });
  }
}

function renderProductsInCarShopping() {
  const producsToRender = selectedProdcuts
    .map((e) => {
      return `
    <div class="shopping-cart">
            <figure>
              <img
                src="${e.imgUrl}"
                alt="bike"
                class="product-img"
              />
            </figure>
            <p>${e.name}</p>
            <p>${e.price}</p>
            <img src="/Platzi_YardSale_Icons/icon_close.png" alt="" />
    </div>
    `;
    })
    .join("");

  const productsPrice = selectedProdcuts.map((e) => {
    return parseInt(e.price.split("$")[1]);
  });
  const totalPrice = productsPrice.reduce((acc, curr) => acc + curr);
  shoppingCarProductsContainer.innerHTML = producsToRender;
  summaryTotal.innerText = `$${totalPrice}`;
}

renderProducts(productList);
