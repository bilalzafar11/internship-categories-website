// ✅ Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  window.scrollY > 300
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Change icon if needed
  const icon = toggleBtn.parentElement.querySelector("i");
  if (icon) {
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);
  }
});

// ✅ Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.checked = true;
  }
});

// ✅ Apply Now Alert on Link Click
const applyLinks = document.querySelectorAll("a.apply-btn");
applyLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Optional: remove preventDefault if you want to continue to link
    e.preventDefault();

    alert("✅ Thank you for applying! We’ll contact you shortly.");

    // To redirect after alert, uncomment the line below:
    // window.location.href = link.href;
  });
});
