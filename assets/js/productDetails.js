//addToCart basket slider
const productDetailsInfo = document.getElementById("productDetails-info");
const addToCart = document.getElementById("addToCart");
const addToCart2 = document.getElementById("addToCart2");
const productImg = document.getElementById("productImg");
const basketLayer = document.getElementById("basketLayers");
const basketClose = document.getElementById("basketClose");
const basketLyer = document.getElementById("basketLyer");
const bigImg = document.getElementById("big-img");
addToCart.addEventListener("click", () => {
  productImg.style.marginLeft = "-100%";
  basketLyer.style.marginLeft = "0";
  productDetailsInfo.style.width = "50%";
  productDetailsInfo.style.transition = "0.7s linear";
  bigImg.style.maxWidth = "667px";
  productDetailsInfo.classList.remove("w-100");
  setTimeout(() => {
    productImg.style.display = "none";
    basketLayer.classList.remove("d-none");
    basketLayer.classList.add("d-flex");
  }, 500);
});

basketClose.addEventListener("click", () => {
  productImg.style.marginLeft = "0";
  productDetailsInfo.style.marginLeft = "50%";
  productDetailsInfo.classList.add("w-100");
  basketLayer.classList.add("d-none");
  basketLayer.classList.remove("d-flex");
  setTimeout(() => {
    productDetailsInfo.style.marginLeft = "0";
    productImg.style.display = "block";
    productDetailsInfo.classList.add("w-100");
    productDetailsInfo.style.transition = "none";
    bigImg.style.maxWidth = "none";
  }, 500);
});
