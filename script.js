
const btn = document.getElementById("eventBtn");
const msg = document.getElementById("message");
let pressTimer;


// Click event

btn.addEventListener("click", () => {
  msg.textContent = " Button clicked!";
});

// Keypress detection

document.addEventListener("keydown", (event) => {
    msg.textContent = ` You pressed: ${event.key}`;
  });
  

// Double-click secret action

btn.addEventListener("dblclick", () => {
  msg.textContent = " double-click action triggered!";
});


//Button behavior

const button = document.getElementById("changeBtn");
button.addEventListener("click", () => {
  button.classList.toggle("changed");
  button.textContent = button.classList.contains("changed") ? "Changed! " : "Click Me ";
});

// Slideshow images
const images = [
    "./images/laptop.jpg",
  "./images/blog.jpg",
  "./images/mac.jpeg"
  
  ];



  let index = 0;
    const slideImg = document.getElementById("slideImg");
    setInterval(() => {
      index = (index + 1) % images.length;
      slideImg.style.opacity = 0;
      setTimeout(() => {
        slideImg.src = images[index];
        slideImg.style.opacity = 1;
      }, 300);
    }, 3000);

    // Tabs
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        const target = document.getElementById("tab-" + tab.dataset.tab);
        target.classList.add("active");
      });
    });

//Form Validation

// Form validation function
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name) {
    alert("Name is required.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!isValidPassword(password)) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  return true;
}

// Helper functions
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

// Real-time feedback
document.getElementById("name").addEventListener("input", function (e) {
  const feedback = document.getElementById("name-feedback");
  if (e.target.value.trim()) {
    feedback.textContent = "✅ Name looks good!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = " Name is required.";
    feedback.style.color = "red";
  }
});

document.getElementById("email").addEventListener("input", function (e) {
  const feedback = document.getElementById("email-feedback");
  if (isValidEmail(e.target.value)) {
    feedback.textContent = " Valid email!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = " Invalid email format.";
    feedback.style.color = "red";
  }
});

document.getElementById("password").addEventListener("input", function (e) {
  const feedback = document.getElementById("password-feedback");
  if (e.target.value.length >= 8) {
    feedback.textContent = " Strong password!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = " Password must be at least 8 characters.";
    feedback.style.color = "red";
  }
});