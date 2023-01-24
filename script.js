document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true
  }).type('Philippines', {delay: 500})
  .delete(11)
  .type('Seicheles', {delay: 500})
  .delete(9)
  .type('Jamaica', {delay: 500})
  .delete(7)
  .type('Bahamas', {delay: 500})
  
  .go()
})

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});