colorbutton = document.getElementById("color-button-generator");

function randomcolor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
}

colorbutton.addEventListener("click", () => {
<<<<<<< HEAD
  document.body.style.backgroundColor = randomcolor();
});
=======
    document.body.style.backgroundColor = randomcolor();
})

>>>>>>> 3013deef548c1b04deb37c34e132ea32bde8ec3b
