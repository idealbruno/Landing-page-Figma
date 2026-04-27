const btnPrimary = document.querySelector(".btn-primary");
const items = document.querySelectorAll(".item");


btnPrimary.addEventListener("click", () => {
  alert("Obrigado! Sua consulta foi agendada. Entraremos em contato em breve!");
});


items.forEach(item => {
  item.querySelector(".item-header").addEventListener("click", () => {
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

