const projects = [
    {
        number: 1,
        name: "Expanding_Cards",
        imgLink: "1-expanding-cards.png",
    },
    {
        number: 2,
        name: "Progress_Steps",
        imgLink: "2-progress-steps.png",
    },
    {
        number: 3,
        name: "Rotating_Navigation",
        imgLink: "",
    },
];

const projectsElement = document.getElementById("projects");

projects.forEach((project) => {
    const projectElement = document.createElement("div");

    projectElement.innerHTML = `
        <span class="day">${project.number}</span>
        <img src="images/${project.imgLink}" alt="${project.name}" />
        <div class="content">
            <h4>${formatProjectName(project.name)}</h4>
            <a
                href = "${project.name}/index.html"
                class="btn btn-primary"
            >Live Demo</a>
        </div>
    `;

    projectsElement.appendChild(projectElement);
});

function formatProjectName(name) {
    return name.split("_").join(" ");
}