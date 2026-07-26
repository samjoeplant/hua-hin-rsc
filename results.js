(function () {
  const RESULTS = [
    {
      teams: { home: { name: "Test 1" }, away: { name: "Away 1" } },
      goals: { home: 2, away: 1 },
      fixture: { date: "2026-07-25T18:00:00+07:00", venue: { name: "Hua Hin Municipal Stadium" } }
    },
    {
      teams: { home: { name: "Test 2" }, away: { name: "Away 2" } },
      goals: { home: 0, away: 1 },
      fixture: { date: "2026-07-18T18:00:00+07:00", venue: { name: "Pattaya Stadium" } }
    }
  ];

  function renderResults(results) {
    const container = document.getElementById("results-list");
    if (!container) return;

    container.innerHTML = "";

    results.slice(0, 6).forEach((match) => {
      const item = document.createElement("div");
      item.className = "match-card";

      const home = match.teams?.home?.name || "Home team";
      const away = match.teams?.away?.name || "Away team";
      const hs = match.goals?.home ?? 0;
      const as = match.goals?.away ?? 0;
      const date = new Date(match.fixture?.date || Date.now()).toLocaleString();
      const venue = match.fixture?.venue?.name || "TBD";

      item.innerHTML = `
        <strong>${date}</strong><br>
        ${home} ${hs} - ${as} ${away}<br>
        <em>${venue}</em>
      `;

      container.appendChild(item);
    });
  }

  function loadResults() {
    renderResults(RESULTS);
  }

  loadResults();
})();
