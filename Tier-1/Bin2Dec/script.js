const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  // Clear the message
  document.querySelector(".message").innerHTML = " ";
  let val = document.querySelector(".input").value;
  const arr = val.split("");

  // Loop to check if num contains only 's and 1's
  for (let num of arr) {
    let num2 = Number(num);
    if (num2 !== 0 && num2 !== 1) {
      document.querySelector(".message").innerHTML = "Enter a valid Binary";
      break;
    } else {
      // Calculate decimal value
      let num = arr.join("");
      let decimal = parseInt(num, 2);
      console.log(decimal);
      document.querySelector(
        ".message"
      ).innerHTML = `The Decimal Value is ${decimal}`;
    }
  }
});
