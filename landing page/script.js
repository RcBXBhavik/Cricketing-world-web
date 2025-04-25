const matches = [
  {
    teams: "India vs Australia",
    result: "India won by 6 wickets",
    image: "ind vs aus main.jpg", 
  },
  {
    teams: "England vs Pakistan",
    result: "Pakistan won by 4 runs",
    image: "england.jpg",
  },
  {
    teams: "South Africa vs New Zealand",
    result: "Match tied",
    image: "sa vs new.jpg",
  },
];


function scrollToMatches() {
  document.getElementById("matches").scrollIntoView({ behavior: "smooth" });
}

const matchesContainer = document.querySelector(".matches");

matches.forEach((match) => {
  const card = document.createElement("div");
  card.className = "match-card";
  card.innerHTML = `
    <img src="${match.image}" alt="${match.teams}" />
    <h3>${match.teams}</h3>
    <p>${match.result}</p>
    <button onclick="alert('Thanks for checking out ${match.teams}!')">Match Details</button>
  `;
  matchesContainer.appendChild(card);
});
