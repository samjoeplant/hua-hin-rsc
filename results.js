(function () {


  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function renderResults(results) {
    const container = document.getElementById("results-list");
    if (!container) return;

    container.innerHTML = "";

    const matches = Array.isArray(results) ? results : [];
    const visibleResults = matches.filter((match) => {
      const home = match?.teams?.home?.name;
      const away = match?.teams?.away?.name;
      return hasText(home) && hasText(away);
    });

    if (!visibleResults.length) {
      container.textContent = "No results available yet.";
      return;
    }

    visibleResults.slice(0, 6).forEach((match) => {
      const item = document.createElement("div");
      item.className = "match-card";

      const home = match.teams?.home?.name;
      const away = match.teams?.away?.name;
      const hs = match.goals?.home ?? 0;
      const as = match.goals?.away ?? 0;
      const date = match.fixture?.date ? new Date(match.fixture.date).toLocaleString() : "Date TBD";
      const venue = match.fixture?.venue?.name || "Venue TBD";

      item.innerHTML = `
        <strong>${date}</strong><br>
        ${home} ${hs} - ${as} ${away}<br>
        <em>${venue}</em>
      `;

      container.appendChild(item);
    });
  }

  function loadResults() {
    const results = window.resultsData;
    renderResults(results);
  }

  loadResults();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { renderResults, loadResults };
  }

  window.renderResults = renderResults;
  window.loadResults = loadResults;
})();
