var collapsibles = document.querySelectorAll(".footer-block__heading");

collapsibles.forEach(function(collapsible) {
  collapsible.addEventListener("click", function() {
    var isActive = this.classList.contains("active");

    collapsibles.forEach(function(c) {
      c.classList.remove("active");
      c.nextElementSibling.style.display = "none";
    });

    if (!isActive) {
      this.classList.add("active");
      this.nextElementSibling.style.display = "block";
    }
  });
});
