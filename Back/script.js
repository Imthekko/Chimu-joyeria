let bar = Array.from(document.querySelectorAll("li"));

bar.forEach(function(it) {
  it.onclick = function() {
    bar.forEach(function(el) {
      el.classList.remove("active");
    });
    this.classList.toggle("active");
  };
});

const swiper = new Swiper('.swiper', {

  direction: 'vertical',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('.card-buy').click(function() {
  $('.card-bottom').removeClass("unclicked").addClass("clicked");
});

$('.card-remove').click(function() {
  $('.card-bottom').removeClass("clicked").addClass("unclicked");
});

//Pqrs

function sendPQRS() {
  const input = document.getElementById("pqrsInput");
  const message = document.getElementById("pqrsMessage");

  if (input.value.trim() === "") {
    message.textContent = "⚠️ Por favor escribe un mensaje antes de enviar.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Tu solicitud ha sido enviada. ¡Gracias por escribirnos!";
    message.style.color = "#2d4a32";
    input.value = ""; 
  }

  message.classList.remove("hidden");
}


