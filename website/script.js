document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  // Restore theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark") ? "dark" : "light",
    );
  });

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updateKPIs() {
    document.getElementById("sales").textContent =
      "$" + rand(100000, 200000).toLocaleString();
    document.getElementById("users").textContent = rand(500, 1500);
    document.getElementById("conversion").textContent =
      (Math.random() * 10).toFixed(1) + "%";
    document.getElementById("tickets").textContent = rand(5, 30);
  }

  updateKPIs();
  setInterval(updateKPIs, 5000);

  const labels = Array.from({ length: 12 }, (_, i) => `M${i + 1}`);
  const data = labels.map(() => rand(5000, 20000));
  const ctx = document.getElementById("salesChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Monthly Sales",
          data,
          fill: false,
          borderColor: "#42a5f5",
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
