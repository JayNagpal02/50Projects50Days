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
        imgLink: "3-rotating-navigation.png",
    },
    {
        number: 4,
        name: "Hidden_Search_Widget",
        imgLink: "4-hidden-search-widget.png",
    },
    {
        number: 5,
        name: "Blurry_Loading",
        imgLink: "5-blurry-loading.png",
    },
    {
        number: 6,
        name: "Scroll_Animation",
        imgLink: "6-scroll-animation.png",
    },
    {
        number: 7,
        name: "Split_Landing_Page",
        imgLink: "7-split-landing-page.png",
    },
    {
        number: 8,
        name: "Form_Wave_Animation",
        imgLink: "8-form-wave-animation.png",
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
