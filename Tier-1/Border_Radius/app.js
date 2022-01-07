const input = document.querySelector(".inp");

function updateRad() {
  const suf = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suf
  );
}

input.addEventListener("change", updateRad);
