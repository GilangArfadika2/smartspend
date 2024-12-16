// / Performance Mark: Start
performance.mark('start');

const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.95 // Trigger when 50% of the element is visible
};
const fadeInElements = document.querySelectorAll('.fade-in-translate');
const fadeInReverseElements = document.querySelectorAll('.reverse-translate');

// Performance: Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Mark when the element becomes visible
      performance.mark(`element-visible-${entry.target.classList[0]}`);

      // Measure time from start to when the element becomes visible
      performance.measure(`visibility-${entry.target.classList[0]}`, 'start', `element-visible-${entry.target.classList[0]}`);

      // entry.target.style.animationDelay = `${index * 0.5}s`; // 0.5s delay between each element
      entry.target.classList.add('visible');
    }
  });
});

fadeInElements.forEach(el => observer.observe(el));
fadeInReverseElements.forEach(el => observer.observe(el));

const nav = document.querySelector(".nav");
const provinsiSelect = document.getElementById('provinsi');
const kotaSelect = document.getElementById('kota');
let logo = document.querySelector(".logo-svg");

window.addEventListener("scroll", fixNav);


window.onload = function() {
  // Mark when the page has finished loading
  performance.mark('page-loaded');

  // Measure page load time
  performance.measure('page-load-time', 'start', 'page-loaded');

  for (let provinsi in data) {
    let option = document.createElement('option');
    option.value = provinsi;
    option.textContent = provinsi;
    provinsiSelect.appendChild(option);
  }
};

// Event listener for province selection
provinsiSelect.addEventListener('change', function() {
  const selectedProvinsi = provinsiSelect.value;
  kotaSelect.innerHTML = '<option value="">Pilih Kecamatan/Kabupaten</option>';
  
  if (selectedProvinsi !== "") {
    kotaSelect.disabled = false;
    data[selectedProvinsi].forEach(function(kota) {
      let option = document.createElement('option');
      option.value = kota;
      option.textContent = kota;
      kotaSelect.appendChild(option);
    });
  } else {
    kotaSelect.disabled = true;
  }
});

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 120) {
    if (!nav.classList.contains("active")) {
      // Mark when the navigation bar becomes fixed
      performance.mark('nav-fixed');

      // Measure time from start to nav fix
      performance.measure('nav-fix-time', 'start', 'nav-fixed');
    }

    nav.classList.add("active");
    logo.src = "logo-no-background2.svg";
  } else {
    nav.classList.remove("active");
    logo.src = "logo-no-background1.svg";
  }
}

// Output the performance measurements
window.addEventListener("load", () => {
  setTimeout(() => {
    console.log(performance.getEntriesByType('measure'));
  }, 5000); // Allow some time for events to occur before logging
});

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Move clouds based on scroll
  document.querySelectorAll("#clouds > ellipse").forEach((cloud) => {
      const depth = cloud.getAttribute("data-depth") || 0.2;
      cloud.style.transform = `translateX(${scrollY * depth}px)`;
  });

  // Move the sun based on scroll
  const sun = document.querySelector("#sun");
  if (sun) {
      const depth = sun.getAttribute("data-depth") || 0.4;

      // Add both scroll-based translateY and rotation animation
      sun.style.transform = `translateY(${scrollY * depth}px) rotate(${scrollY * 0.1}deg)`;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .content-background, .hero");
  const navLinks = document.querySelectorAll(".nav-list li a");

  // Intersection Observer options
  const options = {
    root: null,
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Find the matching link and add 'active' class
        const activeLink = document.querySelector(`.nav-list li a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  // Observe each section
  sections.forEach((section) => observer.observe(section));
});

