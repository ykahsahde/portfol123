const ProjectsData = [
  {
    name: "News Website clone",
    logo: "news.png",
    description:
      "",
    link: "https://newsreporter24.netlify.app/",
  },
  {
    name: "Student Book",
    logo: "book.png",
    description:
      "",
    link: "https://ass34.vercel.app/",
  },
  {
    name: "Stocks Website Clone",
    logo: "stock.png",
    description:
      "",
    link: "https://bull-snowy-tau.vercel.app/",
  },
  {
    name: "Learn Hub",
    logo: "book.png",
    description:
      "",
    link: "https://learn-hub1.netlify.app/",
  },
  {
    name: "Dice Roller",
    logo: "dice.png",
    description:
      "",
    link: "https://ass32.vercel.app/",
  },
  {
    name: "Food Website",
    logo: "dish.png",
    description:
      " ",
    link: "https://icp-ass24.vercel.app/",
  }
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
