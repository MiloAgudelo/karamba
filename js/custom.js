//Back to Top Button


//Define the button as a constant
const btt_button = document.getElementById("btn-back-to-top");

// Fade in/out the button based on the scroll position
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    // If the scroll position is greater than 300 pixels, fade in the button slowly
    $(btt_button).fadeIn('slow');
  } else {
    // If the scroll position is less than or equal to 300 pixels, fade out the button slowly
    $(btt_button).fadeOut('slow');
  }
});

// Handle scroll position for displaying the button
function scrollFunction() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; // The "||"" is acting as a OR operator.
  const Display = scrollPosition > 20;

  // Toggle the button visibility using CSS display property
  mybutton.style.display = Display ? 'block' : 'none'; // The "?" is acting as a conditional operator, if its true then "block", if false then "none"
}

// Add event listener for the button click
document.getElementById("btn-back-to-top").addEventListener("click", backToTop);

// Scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Counter Up
//Import the counterUp Function
const counterUp = window.counterUp.default

// Define a callback function that will be executed when the observed elements intersect the viewport (It works when seen)
const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target
    // Check if the observed element is intersecting the viewport and doesn't have the class 'is-visible'
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      // Call the counterUp function on the element with a duration of 600 milliseconds and a delay of 10 milliseconds
      counterUp(el, {
        duration: 600,
        delay: 10,
      })
      // Add the class 'is-visible' to the element
      el.classList.add('is-visible')
    } else {
      // If the element is not intersecting the viewport or already has the class 'is-visible', remove the class 'is-visible'
      el.classList.remove('is-visible')
    }
  })
}
// Create a new instance of the IntersectionObserver class, passing the callback function and a threshold value of 1 (When is completely visible)
const IO = new IntersectionObserver(callback, {
  threshold: 1
})

// Select all elements with the class 'counter' using the querySelectorAll method
const els = document.querySelectorAll('.counter')
// Iterate over each element
// Start observing the element for intersection with the viewport by calling the observe method on the IntersectionObserver instance
els.forEach((el) => {IO.observe(el)})


// Menu Filter
$(window).on('load', function () {
  // Execute when the window finishes loading
  $('.filters_menu li').click(function () {
    // Attach a click event handler to each li element inside .filters_menu
      $('.filters_menu li').removeClass('active');
      // Remove the 'active' class from all li elements inside .filters_menu
      $(this).addClass('active');
      // Add the 'active' class to the clicked li element

      var data = $(this).attr('data-filter');
      // Get the value of the 'data-filter' attribute of the clicked li element
      $grid.isotope({
          filter: data
          // Use the Isotope library's filter method to filter elements in $grid based on the 'data' value
      })
  });

  var $grid = $(".grid").isotope({
    // Initialize the Isotope library on the .grid element
      itemSelector: ".all",
      // Define the item selector to be used for filtering as ".all"

      percentPosition: false,
      // Disable the percentPosition layout mode
      masonry: {
          columnWidth: ".all"
          // Set the column width for the masonry layout to be the width of elements with the class ".all"
      }
  })
});

// Add to Cart Button
const cartBtns = document.querySelectorAll('.cart-button');

cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener('click', () => {
    cartBtn.classList.add('clicked');

    setTimeout(() => {
      cartBtn.classList.remove('clicked');
    }, 5000);
  });
});

//Contact Alert
function contact() {
  alert('Your message has been sent, we will contact you ASAP.');
}

//Login Form

const inputs = document.querySelectorAll(".input");
  //Add Class
  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  //Remove Class
  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  const users = [
    { email: "lester.portillo@uam.edu.co", password: "123456" },
    { email: "andres.parra@uam.edu.co", password: "123456" },
    { email: "camilo.agudeloj@uam.edu.co", password: "123456" },
  ];

  const loginButton = document.getElementById("LogInButton");

  loginButton.addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const email = emailInput.value;
    const password = passwordInput.value;

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      sessionStorage.setItem("isLoggedIn", "true");
      alert("Successful login");
      // Redirect to menu.html
    window.location.href = "menu.html";
    } else {
      alert("Invalid email or password");
    }
  });

  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function () {
    const emailInput = document.getElementById("emailregister");
    const passwordInput = document.getElementById("passwordregister");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    alert("Account created successfully");
    alert("Now Login Normally");

  });

//Language

function changeLanguage(language) {
  switch(language) {
    case "index-us":
      window.location.href = "index.html";
    break;
    case "index-es":
      window.location.href = "index-es.html";
    break;
    case "menu-us":
      window.location.href = "menu.html";
    break;
    case "menu-es":
      window.location.href = "menu-es.html";
    case "about-us":
      window.location.href = "about.html";
    break;
    case "about-es":
      window.location.href = "about-es.html";
    break;
    case "sorry":
      alert("Lo sentimos, no hemos implementado esta funcionalidad todavía.")
    break;
  }
}