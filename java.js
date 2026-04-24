const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.querySelector(".item-header").addEventListener("click", () => {
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});