window.addEventListener("load", () => {
  document.getElementById("pic").addEventListener("click", (event) => {
    if (event.target.tagName == "INPUT") {
      let a = event.target.id;
      document.getElementById("im").src = "/images/" + a + ".jpg";
      document.getElementById("im").style.border = "1px solid #000000";
    }
  });
});
