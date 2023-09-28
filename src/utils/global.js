const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart");

cartIcon.addEventListener("click", (e) => {
  if (cartModal.style.display === "none") {
    cartModal.style.display = "block";
  } else {
    cartModal.style.display = "none";
  }
});
