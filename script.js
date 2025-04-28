const projects = [
  {
    title: "Cat Photo App",
    description: "An app to view cat photos.",
    image: "images/cat-photo-app.png",
    link: "responsive-web-design/learning-projects/cat-photo-app/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Cafe Menu",
    description: "A cafe menu created with HTML and CSS.",
    image: "images/cafe-menu.png",
    link: "responsive-web-design/learning-projects/cafe-menu/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Set of Coloured Markers",
    description: "A set of coloured markers created with HTML and CSS.",
    image: "images/set-of-coloured-markers.png",
    link: "responsive-web-design/learning-projects/set-of-colored-markers/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Registration Form",
    description: "A registration form created with HTML and CSS.",
    image: "images/registration-form.png",
    link: "responsive-web-design/learning-projects/registration-form/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Survey Form",
    description: "A survey form created with HTML and CSS.",
    image: "images/survey-form.png",
    link: "responsive-web-design/learning-projects/survey-form/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Rothko Painting",
    description: "A Rothko painting created with HTML and CSS.",
    image: "images/rothko-painting.png",
    link: "responsive-web-design/learning-projects/rothko-painting/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Photo Gallery",
    description: "A photo gallery created with HTML and CSS.",
    image: "images/photo-gallery.png",
    link: "responsive-web-design/learning-projects/photo-gallery/index.html",
    category: "responsive-web-design",
  },
  {
    title:"Nutrition Label",
    description:"A nutrition label created with HTML and CSS.",
    image:"images/nutrition-label.png",
    link:"responsive-web-design/learning-projects/nutrition-label/index.html",
    category:"responsive-web-design"
  },
  {
    title: "Quiz",
    description: "An accessibility quiz created with HTML and CSS.",
    image: "images/quiz.png",
    link: "responsive-web-design/learning-projects/quiz/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Tribute Page",
    description: "A tribute page created with HTML and CSS.",
    image: "images/tribute-page.png",
    link: "responsive-web-design/learning-projects/tribute-page/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Balance Sheet",
    description: "A balance sheet created with HTML and CSS.",
    image: "images/balance-sheet.png",
    link: "responsive-web-design/learning-projects/balance-sheet/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Cat Painting",
    description: "A cat painting created with HTML and CSS.",
    image: "images/cat-painting.png",
    link: "responsive-web-design/learning-projects/cat-painting/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Piano",
    description: "A piano created with HTML and CSS.",
    image: "images/piano.png",
    link: "responsive-web-design/learning-projects/piano/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Technical Documentation",
    description: "A technical documentation page created with HTML and CSS.",
    image: "images/technical-documentation.png",
    link: "responsive-web-design/certification-projects/technical-documentation/index.html",
    category: "responsive-web-design",
  },
  {
    title: "City Skyline",
    description: "A city skyline created with HTML and CSS.",
    image: "images/city-skyline.png",
    link: "responsive-web-design/learning-projects/city-skyline/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Magazine",
    description: "A magazine created with HTML and CSS.",
    image: "images/magazine.png",
    link: "responsive-web-design/learning-projects/magazine/index.html",
    category: "responsive-web-design",
  },
  {
    title: "Product Landing Page",
    description: "A product landing page created with HTML and CSS.",
    image: "images/product-landing-page.png",
    link: "https://razeen-shaikh.github.io/product-landing-page/",
    category: "responsive-web-design",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectContainer");
  const searchInput = document.getElementById("searchBar");

  if (!container || !searchInput) {
    return;
  }

  searchInput.addEventListener("input", (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery)
    );
    displayProjects(filteredProjects);
  });

  displayProjects(projects);
});

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card loading"; // initial loading class

  const image = new Image();
  image.src = project.image;
  image.alt = project.title;
  image.loading = "lazy";
  image.className = "project-img";

  // Wait for image to load before revealing the card
  image.onload = () => {
    card.classList.remove("loading");
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  card.innerHTML = `
      <div class="image-container"></div>
      <div class="project-info">
        <h3>${truncateText(project.title, 30)}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="view-btn">View Project</a>
      </div>
    `;

  card.querySelector(".image-container").appendChild(image);
  return card;
}

function displayProjects(projectList) {
  const container = document.getElementById("projectContainer");
  container.innerHTML = "";

  projectList.forEach((project, index) => {
    const card = createProjectCard(project);
    card.style.animationDelay = `${index * 100}ms`;
    container.appendChild(card);
  });
}

function filterProjects(category) {
  const filtered =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);
  displayProjects(filtered);
}
