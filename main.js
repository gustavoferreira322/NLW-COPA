function createGame(player1, hour, player2) {
  return `
  <li>
      <img
        src="./assets/icon-${player1}.svg"
        alt="icon da bandeira do ${player1}"
        />
      <strong>${hour}</strong>
      <img
        src="./assets/icon-${player2}.svg"
      alt="icon da bandeira do ${player2}"
      />
     </li>`
}
function createCard(date, day, games) {
  return `<div class="card">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brasil", "16:00", "camaroes")) +
  createCard("24/11", "quinta", createGame("brasil", "16:00", "camaroes")) +
  createCard("24/11", "quinta", createGame("brasil", "16:00", "camaroes"))


