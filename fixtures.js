(function () {
  const FIXTURES = [
    {
      teams: { home: { name: "Test 1" }, away: { name: "Away 1" } },
      fixture: { date: "2026-08-01T18:00:00+07:00", venue: { name: "Hua Hin Municipal Stadium" } }
    },
    {
      teams: { home: { name: "Test 2" }, away: { name: "Away 2" } },
      fixture: { date: "2026-08-08T18:00:00+07:00", venue: { name: "Hua Hin Municipal Stadium" } }
    }
  ];

  function renderFixtures(fixtures) {
    const container = document.getElementById("fixtures-list");
    if (!container) return;

    container.innerHTML = "";

    fixtures.slice(0, 6).forEach((match) => {
      const item = document.createElement("div");
      item.className = "match-card";

      const home = match.teams?.home?.name || "Home team";
      const away = match.teams?.away?.name || "Away team";
      const date = new Date(match.fixture?.date || Date.now()).toLocaleString();
      const venue = match.fixture?.venue?.name || "TBD";

      item.innerHTML = `
        <strong>${date}</strong><br>
        ${home} vs ${away}<br>
        <em>${venue}</em>
      `;

      container.appendChild(item);
    });
  }

  function loadFixtures() {
    renderFixtures(FIXTURES);
  }

  loadFixtures();
})();
