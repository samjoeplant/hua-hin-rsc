(function () {


  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function renderFixtures(fixtures) {
    const container = document.getElementById("fixtures-list");
    if (!container) return;

    container.innerHTML = "";

    const matches = Array.isArray(fixtures) ? fixtures : [];
    const visibleFixtures = matches.filter((match) => {
      const home = match?.teams?.home?.name;
      const away = match?.teams?.away?.name;
      return hasText(home) && hasText(away);
    });

    if (!visibleFixtures.length) {
      container.textContent = "No fixtures available yet.";
      return;
    }

    visibleFixtures.slice(0, 6).forEach((match) => {
      const item = document.createElement("div");
      item.className = "match-card";

      const home = match.teams?.home?.name;
      const away = match.teams?.away?.name;
      const date = match.fixture?.date ? new Date(match.fixture.date).toLocaleString() : "Date TBD";
      const venue = match.fixture?.venue?.name || "Venue TBD";

      item.innerHTML = `
        <strong>${date}</strong><br>
        ${home} vs ${away}<br>
        <em>${venue}</em>
      `;

      container.appendChild(item);
    });
  }

  function loadFixtures() {
    const fixtures = window.fixturesData;
    renderFixtures(fixtures);
  }

  loadFixtures();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { renderFixtures, loadFixtures };
  }

  window.renderFixtures = renderFixtures;
  window.loadFixtures = loadFixtures;
})();
