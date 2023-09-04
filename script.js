// Usei alguns tutoriais no stackoverflow e no Youtube
// Função para adicionar um item ao carrinho de compras e exibir a mensagem personalizada
function addToCart(productName, price) {
    // Recuperar o carrinho de compras da sessão ou criar um novo
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Adicionar o item ao carrinho
    cart.push({ productName, price });
    // Atualizar o carrinho na sessão
    localStorage.setItem("cart", JSON.stringify(cart));
    // Exibir a mensagem personalizada
    showCustomMessage(`"${productName}" foi adicionado ao carrinho!`);
    // Atualizar o contador do carrinho no cabeçalho
    updateCartCount(cart.length);
}
// Função para exibir a mensagem personalizada
function showCustomMessage(message) {
    const customMessageElement = document.querySelector(".custom-message");
    const customMessageTextElement = document.querySelector("#custom-message-text");
    // Definir o texto da mensagem
    customMessageTextElement.textContent = message;
    // Exibir a mensagem
    customMessageElement.style.opacity = "1";
    // Esconder a mensagem após 3 segundos 
    setTimeout(() => {
        customMessageElement.style.opacity = "0";
    }, 3000);
}
// Função para atualizar o contador do carrinho no cabeçalho
function updateCartCount(count) {
    const cartCountElement = document.querySelector(".cart a");
    if (cartCountElement) {
        cartCountElement.textContent = `Carrinho (${count})`;
    }
}
// Inicializar o contador do carrinho no carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Atualizar o contador do carrinho no cabeçalho
    updateCartCount(cart.length);
});

// Banner do site //
document.addEventListener("DOMContentLoaded", function () {
    const bannerSlideshow = document.querySelector(".banner-slideshow");
    const bannerSlides = document.querySelectorAll(".banner-slide");
    let currentSlide = 0;
  
    function nextSlide() {
      const slideCount = bannerSlides.length;
      currentSlide = (currentSlide + 1) % slideCount;
      const translateX = -currentSlide * 100;
      bannerSlideshow.style.transition = "transform 0.5s ease-in-out";
      bannerSlideshow.style.transform = `translateX(${translateX}%)`;
  
      if (currentSlide === 0) {
        setTimeout(() => {
          bannerSlideshow.style.transition = "none";
          bannerSlideshow.style.transform = "translateX(0%)";
        }, 500); 
      }
    }
  
    setInterval(nextSlide, 8000); 
  });
