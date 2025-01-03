const projects = [];

projects.forEach((project, index) => {
  document.querySelector("#projects-container").innerHTML += `
    <div class="main__projects__container__element">
        <a href="${project.url}" target="_blank" class="main__projects__container__element__title">${project.name}</a>
        <p>${project.desc}</p>
    </div>
    `;
});
