// Map: section name → target element id in index.html
var sections = {
  "about": "about-body",
  "skills": "skills",
  "projects": "projects",
  "experience": "experience",
  "certifications": "certifications",
  "education": "education",
  "contact": "contact"
};

// Load each section file into its target element
Object.keys(sections).forEach(function (name) {
  fetch("sections/" + name + ".html")
    .then(function (res) { return res.text(); })
    .then(function (html) {
      var target = document.getElementById(sections[name]);
      if (target) target.innerHTML = html;
    })
    .catch(function (err) {
      console.error("Failed to load " + name + ".html", err);
    });
});

// Mobile menu toggle
document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("open");
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("open");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();