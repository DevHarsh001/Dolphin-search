const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase();

document.getElementById("searchInput").value = query;

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const results = data.map(item => {
      let score = 0;
      const content = `${item.title} ${item.description} ${item.body}`.toLowerCase();
      const words = query.split(" ");
      words.forEach(word => {
        const matchCount = content.split(word).length - 1;
        score += matchCount;
      });
      return { ...item, score };
    }).filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);

    const resultsContainer = document.getElementById("results");
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
      results.forEach(result => {
        const el = document.createElement("div");
        el.className = "result-item";
        el.innerHTML = `
          <a href="${result.url}" target="_blank">${result.title}</a>
          <p>${result.description}</p>
        `;
        resultsContainer.appendChild(el);
      });
    }
  });
