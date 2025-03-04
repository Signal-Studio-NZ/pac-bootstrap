//addToCart basket slider
const productDetailsInfo = document.getElementById("productDetails-info");
const addToCart = document.getElementById("addToCart");
const productImg = document.getElementById("productImg");
const basketLayer = document.getElementById("basketLayers");
const basketClose = document.getElementById("basketClose");
addToCart.addEventListener("click", () => {
  productImg.style.marginLeft = "-100%";
  productImg.style.transition = "all 0.5s";
  productImg.style.display = "none";
  productDetailsInfo.classList.remove("w-100");
  productDetailsInfo.style.width = "50%";
  basketLayer.classList.remove("d-none");
  basketLayer.classList.add("d-flex");
});
basketClose.addEventListener("click", () => {
  productImg.style.marginLeft = "0";
  productImg.style.transition = "all 0.5s";
  productImg.style.display = "block";
  productDetailsInfo.classList.add("w-100");
  // productDetailsInfo.style.width = "55%";
  basketLayer.classList.add("d-none");
  basketLayer.classList.remove("d-flex");
});
