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
    message.textContent = "Por favor escribe un mensaje antes de enviar.";
    message.style.color = "red";
    message.classList.remove("hidden");
    return;
  }

  message.textContent = "Enviando...";
  message.style.color = "#333";
  message.classList.remove("hidden");

  fetch("http://localhost:3000/guardar-pqrs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensaje: input.value.trim() })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      message.textContent = "Tu solicitud ha sido enviada. ¡Gracias por escribirnos!";
      message.style.color = "green";
      input.value = "";
    } else {
      message.textContent = "Error: " + data.message;
      message.style.color = "red";
    }
  })
  .catch(err => {
    console.error("Error en fetch:", err);
    message.textContent = "Hubo un error al conectar con el servidor.";
    message.style.color = "red";
  });
}