var isInViewport = function(elem) {
  var distance = elem.getBoundingClientRect();
  return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
  };
  var btnContainer = document.getElementById("mynav");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("nav-item");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
  }

  // Add active class on scroll
  window.addEventListener("scroll", function() {
      var sections = document.querySelectorAll("section");
      var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

      for (var s = 0; s < sections.length; s++) {
      var section = sections[s];
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          var id = section.getAttribute("id");
          for (var j = 0; j < btns.length; j++) {
          var btn = btns[j];
          var href = btn.querySelector("a").getAttribute("href").substring(1);
          if (href === id) {
              btn.classList.add("active");
          } else {
              btn.classList.remove("active");
          }
          }
      }
      }
  });