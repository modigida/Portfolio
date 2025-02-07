// Manage and display .html components on index.html
function loadContent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch ${file}`);
      return response.text();
    })
    .then(content => {
      document.getElementById(id).innerHTML = content;
    })
    .catch(error => console.error(error));
}

loadContent("header-placeholder", "header.html");
loadContent("about-placeholder", "about.html");
loadContent("projects-placeholder", "projects.html");
loadContent("contact-placeholder", "contact.html");
loadContent("footer-placeholder", "footer.html");

loadContent("cv-placeholder", "cv.html");
loadContent("workoutTracker-placeholder", "workoutTracker.html");
loadContent("recipes-placeholder", "recipes.html");

// Manage magnifier on cv-img
const img = document.querySelector('.cv-img');
const magnifier = document.querySelector('.magnifier');

if (img && magnifier) { 
  img.addEventListener('mousemove', (e) => {
    magnifier.style.display = 'block';

    const imgRect = img.getBoundingClientRect();

    const mouseX = e.clientX - imgRect.left;
    const mouseY = e.clientY - imgRect.top;

    magnifier.style.left = `${e.clientX - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${e.clientY - magnifier.offsetHeight / 2}px`;

    const zoomFactor = 2; 
    magnifier.style.backgroundImage = `url(${img.src})`;
    magnifier.style.backgroundSize = `${img.width * zoomFactor}px ${img.height * zoomFactor}px`;
    magnifier.style.backgroundPosition = `-${mouseX * zoomFactor - magnifier.offsetWidth / 2}px -${mouseY * zoomFactor - magnifier.offsetHeight / 2}px`;
  });

  img.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
  });
}
